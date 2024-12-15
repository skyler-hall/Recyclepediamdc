'use client';
import { useState } from 'react';
import { recyclingTipsData } from '@/data/learn/recyclingTips';

export default function RecyclingTips() {
  const [selectedItem, setSelectedItem] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDetails(true);
  };

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6 mb-8'>
      <h2 className='text-2xl font-semibold text-[#234E13] mb-6'>
        Recycling Tips
      </h2>
      <div className='flex flex-col items-center'>
        <select
          onChange={(e) => handleItemClick(e.target.value)}
          className='w-full px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#234E13]'
        >
          <option value=''>Select an item to learn how to recycle</option>
          {Object.keys(recyclingTipsData).map((item) => (
            <option key={item} value={item}>
              {item.charAt(0).toUpperCase() +
                item.slice(1).replace(/([A-Z])/g, ' $1')}
            </option>
          ))}
        </select>
      </div>
      {showDetails && selectedItem && (
        <div className='mt-4 text-center'>
          <h3 className='font-bold text-2xl md:text-4xl text-black'>
            How to Recycle{' '}
            {selectedItem.charAt(0).toUpperCase() + selectedItem.slice(1)}
          </h3>
          <p className='mt-2 text-lg md:text-4xl text-black'>
            {recyclingTipsData[selectedItem]}
          </p>
        </div>
      )}
    </div>
  );
}
