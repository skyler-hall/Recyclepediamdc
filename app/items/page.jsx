'use client';

import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { availableItems } from '@/data/availableItems'; // Import available items

// Haversine formula to calculate distance
const haversine = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const toRad = (value) => value * (Math.PI / 180); // Convert degrees to radians

  const deltaLat = toRad(lat2 - lat1);
  const deltaLon = toRad(lon2 - lon1);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distanceKm = R * c; // Distance in kilometers
  const distanceMiles = distanceKm * 0.621371; // Convert distance to miles
  return distanceMiles; // Distance in miles
};

function Items() {
  // State to store search query, user location, and distances
  const [searchQuery, setSearchQuery] = useState(''); // State for user input
  const [userLocation, setUserLocation] = useState(null); // State for user location
  const [matchingLocations, setMatchingLocations] = useState([]); // State for matching locations
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for errors
  const [isSearchClicked, setIsSearchClicked] = useState(false); // State to track button click
  const [distanceFilter, setDistanceFilter] = useState(0); // State for distance filter
  const [filteredItems, setFilteredItems] = useState([]); // State for filtered item list

  // Get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location', error);
          setError('Unable to retrieve your location.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  // Fetch locations from Firestore based on search query
  const fetchLocations = async () => {
    setLoading(true);
    try {
      const locationsRef = collection(db, 'recycle_locations');
      const q = searchQuery
        ? query(
            locationsRef,
            where('item', '==', searchQuery) // Exact match query
          )
        : locationsRef;

      const querySnapshot = await getDocs(q);
      const locationsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // If user location is available, calculate distances
      if (userLocation) {
        const calculatedDistances = locationsData.map((location) => {
          const distance = haversine(
            userLocation.latitude,
            userLocation.longitude,
            location.latitude,
            location.longitude
          );
          return { ...location, distance };
        });

        // Filter based on distance
        const filteredLocations = calculatedDistances.filter((location) => {
          return (
            location.distance <= distanceFilter || distanceFilter === 0
          );
        });

        setMatchingLocations(filteredLocations);
      } else {
        setMatchingLocations(locationsData);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching locations: ', err);
      setError('Failed to load locations. Please try again later.');
      setLoading(false);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    if (!userLocation) {
      getUserLocation();
    }
    setIsSearchClicked(true);
    fetchLocations();
  };

  // Handle item selection from the dropdown
  const handleItemSelect = (item) => {
    setSearchQuery(item);
    setFilteredItems([]); // Clear the filtered items when an item is selected
  };

  // Filter the items as the user types
  const handleSearchQueryChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      // Filter items that start with the query (case-insensitive)
      const filtered = availableItems.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]); // Clear suggestions when input is empty
    }
  };

  return (
    <div className='flex flex-col items-center mt-32 min-h-[calc(100vh-10rem)]'>
      <h1 className='text-3xl mb-4 font-bold'>
        Find the nearest location to recycle your item
      </h1>

      {loading && <p>Loading locations...</p>}
      {error && <p className='text-red-500'>{error}</p>}

      <div className='flex justify-center w-full mb-4 relative'>
        <input
          type='text'
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder='Enter an item name (e.g., Magazines)'
          className='p-2 border rounded w-1/2'
        />
        {filteredItems.length > 0 && (
          <div className='absolute top-full left-0 w-full border bg-white shadow-lg'>
            <ul>
              {filteredItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleItemSelect(item)}
                  className='p-2 hover:bg-gray-200 cursor-pointer'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={handleSearch}
        className='p-2 mb-4 bg-blue-500 text-white rounded'
      >
        Search
      </button>

      <div className='mb-4'>
        <label htmlFor='distanceFilter' className='mr-2'>
          Filter by distance:
        </label>
        <select
          id='distanceFilter'
          value={distanceFilter}
          onChange={(e) => setDistanceFilter(Number(e.target.value))}
          className='p-2 border rounded'
        >
          <option value={0}>All</option>
          <option value={5}>5 miles</option>
          <option value={10}>10 miles</option>
          <option value={15}>15 miles</option>
        </select>
      </div>

      <div className='mt-4 w-full'>
        {isSearchClicked ? (
          matchingLocations.length > 0 ? (
            matchingLocations
              .sort((a, b) => a.distance - b.distance) // Sort by distance
              .map((location) => (
                <div
                  key={location.id}
                  className='p-4 mb-2 border rounded bg-gray-100 shadow-sm'
                >
                  <p>
                    <strong>Item:</strong> {location.item}
                  </p>
                  <p>
                    <strong>Location:</strong> {location.name}
                  </p>
                  <p>
                    <strong>Address:</strong> {location.street},{' '}
                    {location.city}, {location.state} {location.zip}
                  </p>
                  <p>
                    <strong>Distance:</strong>{' '}
                    {location.distance !== undefined ? location.distance.toFixed(2) : 'N/A'} miles
                  </p>
                </div>
              ))
          ) : (
            <p className='text-gray-500'>
              No matching locations found for "{searchQuery}".
            </p>
          )
        ) : (
          <p className='text-gray-500'>Press "Search" to find locations.</p>
        )}
      </div>
    </div>
  );
}

export default Items;