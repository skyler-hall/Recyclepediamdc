import React from 'react';

const CategoryCard = ({ category, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(category.name)}
      className='group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden'
    >
      <div className='relative'>
        <div className='aspect-[4/3] w-full'>
          <img
            src={category.image}
            alt={category.name}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
      </div>
      <div className='p-6'>
        <h3 className='text-2xl font-semibold text-[#234E13] mb-2'>
          {category.name}
        </h3>
        <p className='text-gray-600 flex items-center gap-2'>
          View all {category.name.toLowerCase()} items
          <svg
            className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </p>
      </div>
    </button>
  );
};

export default CategoryCard;
