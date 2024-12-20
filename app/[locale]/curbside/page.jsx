'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { cityData } from '../../../data/CityData';
import CitySelector from '../components/CitySelector';
import RecyclingList from '../components/RecyclingList';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

function Curbside() {
  const t = useTranslations('CurbsidePage');
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
            {t('title')}
          </h1>
          <p className='text-gray-600 text-lg md:text-xl'>
            {t('subtitle', { city: city || t('subtitleDefault') })}
          </p>
        </div>

        <div className='max-w-xl mx-auto mb-8'>
          <div className='flex flex-col md:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg'>
            <span className='text-lg font-medium text-gray-700 whitespace-nowrap'>
              {t('citySelector.label')}
            </span>
            <div className='w-full md:flex-1'>
              <CitySelector onCityChange={handleCityChange} />
            </div>
          </div>
        </div>

        {city && (
          <div className='max-w-3xl mx-auto'>
            <div className='bg-white rounded-2xl shadow-lg p-6 mb-8'>
              <div className='mb-6'>
                <div className='relative'>
                  <input
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder={t('search.placeholder')}
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

              <RecyclingList
                items={filteredItems}
                city={city}
                cityData={cityData}
              />
            </div>

            <div className='text-center bg-white p-8 rounded-2xl shadow-lg mb-8'>
              <h2 className='text-2xl font-bold text-[#234E13] mb-4'>
                {t('guidelines.title')}
              </h2>

              <div className='space-y-6'>
                {Object.entries(t.raw('guidelines.categories')).map(
                  ([key, category]) => (
                    <div key={key}>
                      <h3 className='text-xl font-medium text-[#234E13]'>
                        {category.title}
                      </h3>
                      <p className='text-gray-700'>{category.description}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
              <p className='text-xl font-medium text-gray-700 mb-4'>
                {t('notListed.message')}
              </p>
              <Link href='/items' passHref>
                <button className='px-8 py-3 bg-[#234E13] text-white rounded-xl hover:bg-[#1a3b0e] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'>
                  {t('notListed.button')}
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
