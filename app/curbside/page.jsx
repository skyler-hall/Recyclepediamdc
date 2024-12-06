'use client';

import { useState } from 'react';
import { cityData } from '../../data/CityData';
import CitySelector from '../components/CitySelector';
import RecyclingList from '../components/RecyclingList';
import Link from 'next/link';
import Image from 'next/image';

function Curbside() {
  const [city, setCity] = useState('');
  const [recyclingItems, setRecyclingItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCityChange = (city) => {
    setCity(city);
    setRecyclingItems(cityData[city] || []);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = recyclingItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-[#DBF4D2]/20'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#234E13] mb-4'>
            Curbside Pickup Items
          </h1>
          <p className='text-gray-600 text-lg md:text-xl'>
            Find out what you can recycle in {city || 'your municipality'}
          </p>
        </div>

        {/* City selector container */}
        <div className='max-w-xl mx-auto mb-8'>
          <div className='flex flex-col md:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg'>
            <span className='text-lg font-medium text-gray-700 whitespace-nowrap'>
              Select your city:
            </span>
            <div className='w-full md:flex-1'>
              <CitySelector onCityChange={handleCityChange} />
            </div>
          </div>
        </div>

        {/* Search and results container */}
        {city && (
          <div className='max-w-3xl mx-auto'>
            <div className='bg-white rounded-2xl shadow-lg p-6 mb-8'>
              <div className='mb-6'>
                <div className='relative'>
                  <input
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder='Search for recycling items...'
                    className='w-full px-6 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#234E13] focus:border-transparent transition-all duration-200'
                  />
                  <div className='absolute right-4 top-1/2 -translate-y-1/2'>
                    <Image
                      src='/magnifyingGlass.png'
                      alt='Magnifying Glass'
                      width={20}
                      height={20}
                      className='text-gray-400'
                    />
                  </div>
                </div>
              </div>

              {/* Items List */}
              <RecyclingList
                items={filteredItems}
                city={city}
                cityData={cityData}
              />
            </div>

                        {/* Curbside Pickup Do's and Don'ts Section */}
                        <div className='text-center bg-white p-8 rounded-2xl shadow-lg mb-8'>
              <h2 className='text-2xl font-bold text-[#234E13] mb-4'>
                Curbside Pickup Do’s and Don’t’s
              </h2>

              <div className='space-y-6'>
                <div>
                  <h3 className='text-xl font-medium text-[#234E13]'>Paper</h3>
                  <p className='text-gray-700'>
                    Clean and dry newspaper, magazines, catalogs, telephone books, printer paper, copier paper, mail, and all other office paper without wax liners.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-medium text-[#234E13]'>Cardboard</h3>
                  <p className='text-gray-700'>
                    Packing boxes, cereal boxes, pizza boxes, gift boxes, and corrugated cardboard. Flatten all boxes before placing them in your cart.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-medium text-[#234E13]'>Cans</h3>
                  <p className='text-gray-700'>
                    Steel and aluminum food and beverage cans. Aluminum bottles are also accepted.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-medium text-[#234E13]'>Cartons</h3>
                  <p className='text-gray-700'>
                    Aseptic poly-coated drink boxes, juice cartons, and milk cartons.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-medium text-[#234E13]'>Bottles (plastic & glass)</h3>
                  <p className='text-gray-700'>
                    Plastic bottles such as milk, water, detergent, soda, and shampoo bottles (flatten and replace the cap); glass bottles.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-medium text-[#234E13]'>Plastic tubs and jugs</h3>
                  <p className='text-gray-700'>
                    Plastic tubs, such as butter or yogurt tubs, and plastic jugs, such as milk or detergent jugs.
                  </p>
                </div>
              </div>
            </div>

            {/* Item not listed section */}
            <div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
              <p className='text-xl font-medium text-gray-700 mb-4'>
                Can't find what you're looking for?
              </p>
              <Link href='/items' passHref>
                <button className='px-8 py-3 bg-[#234E13] text-white rounded-xl hover:bg-[#1a3b0e] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'>
                  Find Alternative Recycling Options
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Curbside;
