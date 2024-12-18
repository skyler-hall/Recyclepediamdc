'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function RecyclingTips() {
  const [selectedItem, setSelectedItem] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const t = useTranslations('LearnPage.recyclingTips');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDetails(true);
  };

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6 mb-8'>
      <h2 className='text-2xl font-semibold text-[#234E13] mb-6'>
        {t('title')}
      </h2>
      <div className='flex flex-col items-center'>
        <select
          onChange={(e) => handleItemClick(e.target.value)}
          className='w-full px-6 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#234E13]'
        >
          <option value=''>{t('selectPrompt')}</option>
          {Object.keys(t.raw('items')).map((item) => (
            <option key={item} value={item}>
              {t(`items.${item}.name`)}
            </option>
          ))}
        </select>
      </div>
      {showDetails && selectedItem && (
        <div className='mt-4 text-center'>
          <h3 className='font-bold text-2xl md:text-4xl text-black'>
            {t('howToRecycle', { item: t(`items.${selectedItem}.name`) })}
          </h3>
          <p className='mt-2 text-lg md:text-4xl text-black'>
            {t(`items.${selectedItem}.tip`)}
          </p>
        </div>
      )}
    </div>
  );
}
