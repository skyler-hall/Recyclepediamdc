"use client";

import { FaSearch } from "react-icons/fa"; 
import { useState } from "react";
import { cityData } from "../data/CityData";
import CitySelector from "../components/CitySelector";
import RecyclingList from "../components/RecyclingList";
import Link from "next/link"; // Import the Link component from Next.js

function Curbside() {
  const [city, setCity] = useState("");
  const [recyclingItems, setRecyclingItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  const handleCityChange = (city) => {
    setCity(city);
    setRecyclingItems(cityData[city] || []);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter items based on the search query
  const filteredItems = recyclingItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">
        Curbside Pickup Items in {city || "Your City"}
      </h1>
      
      {/* Flex container for the city selector */}
      <div className="flex items-center mb-4 space-x-2">
        <span className="mr-2 text-lg font-semibold text-black">You are in</span>
        <CitySelector onCityChange={handleCityChange} />
      </div>

      {/* Box for search bar and item cards with black border */}
      {city && (
        <div className="w-full max-w-3xl bg-white border-2 border-black rounded-lg shadow-lg p-6 mt-4">
          {/* Search Bar */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for recycling items..."
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Magnifying Glass Icon */}
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full" size={20} />
            </div>
          </div>

          {/* Items */}
          <RecyclingList items={filteredItems} />
        </div>
      )}
      
      {/* "Item not listed?" text and button */}
      <div className="mt-6 text-center">
        <p className="text-lg font-medium text-gray-700 mb-4">Item not listed?</p>
        <Link href="/items/page" passHref>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
            Find where you can recycle your item
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Curbside;
