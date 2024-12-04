'use client';

import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { availableItems } from '@/data/availableItems';
import Image from 'next/image';

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
  const [selectedFromDropdown, setSelectedFromDropdown] = useState(false); // Track if item was selected from dropdown

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
          return location.distance <= distanceFilter || distanceFilter === 0;
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
    setSelectedFromDropdown(true);
  };

  // Filter the items as the user types
  const handleSearchQueryChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSelectedFromDropdown(false);

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

  // Handle key press for search input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (selectedFromDropdown) {
        // If item is already selected from dropdown, fetch locations
        setIsSearchClicked(true);
        fetchLocations();
      } else if (filteredItems.length > 0) {
        // If first enter press with dropdown items, select first item
        const selectedItem = filteredItems[0];
        setSearchQuery(selectedItem);
        setFilteredItems([]);
        setSelectedFromDropdown(true);
      }
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-[#DBF4D2]/20'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#234E13] mb-4'>
            Find Recycling Locations
          </h1>
          <p className='text-gray-600 text-lg md:text-xl'>
            Discover where to recycle specific items in your area
          </p>
        </div>

        <div className='max-w-xl mx-auto mb-8'>
          <div className='flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-lg'>
            <div className='relative'>
              <input
                type='text'
                value={searchQuery}
                onChange={handleSearchQueryChange}
                onKeyPress={handleKeyPress}
                placeholder='Enter an item name (e.g., Magazines)'
                className='w-full px-6 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#234E13] focus:border-transparent transition-all duration-200'
              />
              <div className='absolute right-4 top-1/2 -translate-y-1/2'>
                <Image
                  src='/magnifyingGlass.png'
                  alt='Search'
                  width={20}
                  height={20}
                  className='text-gray-400'
                />
              </div>
            </div>

            {filteredItems.length > 0 && (
              <div className='bg-white rounded-xl border border-gray-200 shadow-lg'>
                <ul>
                  {filteredItems.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleItemSelect(item)}
                      className='p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 transition-colors'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={handleSearch}
              className='px-8 py-3 bg-[#234E13] text-white rounded-xl hover:bg-[#1a3b0e] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'
            >
              Search Locations
            </button>

            <div className='flex items-center gap-2'>
              <label htmlFor='distanceFilter' className='text-gray-700'>
                Filter by distance:
              </label>
              <select
                id='distanceFilter'
                value={distanceFilter}
                onChange={(e) => setDistanceFilter(Number(e.target.value))}
                className='px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#234E13] focus:border-transparent'
              >
                <option value={0}>All</option>
                <option value={5}>5 miles</option>
                <option value={10}>10 miles</option>
                <option value={15}>15 miles</option>
              </select>
            </div>
          </div>
        </div>

        {loading && (
          <div className='text-center text-gray-600'>Loading locations...</div>
        )}
        {error && <div className='text-center text-red-500'>{error}</div>}

        <div className='max-w-3xl mx-auto'>
          {isSearchClicked ? (
            matchingLocations.length > 0 ? (
              <div className='space-y-4'>
                {matchingLocations
                  .sort((a, b) => a.distance - b.distance)
                  .map((location) => (
                    <div
                      key={location.id}
                      className='bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl'
                    >
                      <h3 className='text-xl font-semibold text-[#234E13] mb-2'>
                        {location.name}
                      </h3>
                      <p className='text-gray-600 mb-2'>
                        <strong>Item:</strong> {location.item}
                      </p>
                      <p className='text-gray-600 mb-2'>
                        <strong>Address:</strong> {location.street},{' '}
                        {location.city}, {location.state} {location.zip}
                      </p>
                      <p className='text-gray-600'>
                        <strong>Distance:</strong>{' '}
                        {location.distance !== undefined
                          ? `${location.distance.toFixed(2)} miles`
                          : 'N/A'}
                      </p>
                    </div>
                  ))}
              </div>
            ) : (
              <p className='text-center text-gray-600 text-lg'>
                No matching locations found for "{searchQuery}".
              </p>
            )
          ) : (
            <p className='text-center text-gray-600 text-lg'>
              Enter an item and press "Search" to find recycling locations.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Items;
