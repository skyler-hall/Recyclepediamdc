import React from 'react';
import RecyclingItemCard from './RecyclingItemCard';

const RecyclingList = ({ items, city, cityData }) => {
  return (
    <div className="overflow-auto max-h-[400px] p-4">
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => {
          // Check if the item can be recycled in the selected city
          const canRecycle = city && cityData[city]
            ? cityData[city].some(recyclableItem => recyclableItem.name === item.name && recyclableItem.canRecycle)
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
  );
};

export default RecyclingList;
