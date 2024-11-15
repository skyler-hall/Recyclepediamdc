'use client';

import { useState, useEffect, useRef } from 'react';
import { homePopupData } from '@/data/popupData';

function HomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    // check if popup has been shown before
    const hasShownPopup = localStorage.getItem('hasShownHomePopup');

    // set timeout to check and display popup after 1 second
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setIsOpen(true);
      }
      setShouldRender(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasShownHomePopup', 'true');
  };

  if (!shouldRender || !isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div
        ref={popupRef}
        className='relative w-11/12 max-w-lg p-6 bg-white rounded-xl shadow-xl'
      >
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        <h2 className='text-2xl font-bold text-green-600 mb-4'>
          {homePopupData.title}
        </h2>
        <p className='text-gray-600 mb-6'>{homePopupData.description}</p>

        <button
          onClick={handleClose}
          className='w-full py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300'
        >
          {homePopupData.buttonText}
        </button>
      </div>
    </div>
  );
}

export default HomePopup;
