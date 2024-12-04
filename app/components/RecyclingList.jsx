'use client';

import React, { useState } from 'react';
import RecyclingItemCard from './RecyclingItemCard';
import CategoryCard from './curbside_components/CategoryCard';

const RecyclingList = ({ items, city, cityData }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Get unique categories and their first items
  const categoriesWithImages = [
    ...new Set(items.map((item) => item.category)),
  ].map((category) => {
    const firstItem = items.find((item) => item.category === category);
    return {
      name: category,
      image: firstItem?.image || '',
    };
  });

  // Filter items by selected category
  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : [];

  return (
    <div>
      {/* Categories */}
      {!selectedCategory && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          {categoriesWithImages.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              onSelect={setSelectedCategory}
            />
          ))}
        </div>
      )}

      {/* Back button when category is selected */}
      {selectedCategory && (
        <div className='mb-8'>
          <button
            onClick={() => setSelectedCategory(null)}
            className='group px-6 py-3 bg-[#234E13] text-white rounded-xl hover:bg-[#1a3b0e] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center gap-2'
          >
            <svg
              className='w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
            Back to Categories
          </button>
          <h2 className='text-2xl font-semibold mt-6 mb-6 text-[#234E13]'>
            {selectedCategory} Items
          </h2>
        </div>
      )}

      {/* Items List */}
      {selectedCategory && (
        <div className='overflow-auto max-h-[600px]'>
          <div className='grid grid-cols-1 gap-6 pt-4 pb-36'>
            {filteredItems.map((item, index) => {
              const canRecycle =
                city && cityData[city]
                  ? cityData[city].some(
                      (recyclableItem) =>
                        recyclableItem.name === item.name &&
                        recyclableItem.canRecycle
                    )
                  : false;

              return (
                <RecyclingItemCard
                  key={index}
                  item={item}
                  canRecycle={canRecycle}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecyclingList;
