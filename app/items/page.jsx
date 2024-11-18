"use client";

import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

// Haversine formula to calculate distance
const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const toRad = (value) => value * (Math.PI / 180); // Convert degrees to radians

  const deltaLat = toRad(lat2 - lat1);
  const deltaLon = toRad(lon2 - lon1);

  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distanceKm = R * c; // Distance in kilometers
  const distanceMiles = distanceKm * 0.621371; // Convert distance to miles
  return distanceMiles; // Distance in miles
};

function Items() {
  // State to store locations from the database
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for user input
  const [userLocation, setUserLocation] = useState(null); // State for user location
  const [distances, setDistances] = useState([]); // State for calculated distances
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearchClicked, setIsSearchClicked] = useState(false); // State to track button click
  const [distanceFilter, setDistanceFilter] = useState(0); // State for distance filter

  // Fetch locations from Firestore
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "recycle_locations"));
        const locationsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLocations(locationsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching locations: ", err);
        setError("Failed to load locations. Please try again later.");
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Calculate distances from user to all locations
  useEffect(() => {
    if (userLocation) {
      const calculatedDistances = locations.map((location) => {
        const distance = haversine(
          userLocation.latitude,
          userLocation.longitude,
          location.latitude,
          location.longitude
        );
        return { ...location, distance };
      });
      setDistances(calculatedDistances);
    }
  }, [userLocation, locations]);

  // Filter locations based on user input and distance filter
  const matchingLocations = distances.filter((location) => {
    const matchesItem = location.item?.toLowerCase().includes(searchQuery.toLowerCase().trim());
    const matchesDistance = location.distance <= distanceFilter || distanceFilter === 0;
    return matchesItem && matchesDistance;
  });

  // Handle search button click
  const handleSearch = () => {
    setIsSearchClicked(true);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4 font-bold">Find the nearest location to recycle your item</h1>

      {loading && <p>Loading locations...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          {/* Text Input for User Query */}
          <div className="flex justify-center w-full mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter an item name (e.g., Magazines)"
              className="p-2 border rounded w-1/2"
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="p-2 mb-4 bg-blue-500 text-white rounded"
          >
            Search
          </button>

          {/* Distance Filter Dropdown */}
          <div className="mb-4">
            <label htmlFor="distanceFilter" className="mr-2">Filter by distance:</label>
            <select
              id="distanceFilter"
              value={distanceFilter}
              onChange={(e) => setDistanceFilter(Number(e.target.value))}
              className="p-2 border rounded"
            >
              <option value={0}>All</option>
              <option value={5}>5 miles</option>
              <option value={10}>10 miles</option>
              <option value={15}>15 miles</option>
            </select>
          </div>

          {/* Display matching locations */}
          <div className="mt-4 w-full">
            {isSearchClicked ? (
              matchingLocations.length > 0 ? (
                matchingLocations
                  .sort((a, b) => a.distance - b.distance) // Sort by distance
                  .map((location) => (
                    <div
                      key={location.id}
                      className="p-4 mb-2 border rounded bg-gray-100 shadow-sm"
                    >
                      <p>
                        <strong>Item:</strong> {location.item}
                      </p>
                      <p>
                        <strong>Location:</strong> {location.name}
                      </p>
                      <p>
                        <strong>Address:</strong> {location.street}, {location.city}, {location.state} {location.zip}
                      </p>
                      <p>
                        <strong>Distance:</strong> {location.distance.toFixed(2)} miles
                      </p>
                    </div>
                  ))
              ) : (
                <p className="text-gray-500">No matching locations found for "{searchQuery}".</p>
              )
            ) : (
              <p className="text-gray-500">Press "Search" to find locations.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Items;