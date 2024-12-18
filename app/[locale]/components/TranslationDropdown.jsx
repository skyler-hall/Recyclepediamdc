'use client';

import { useState, useTransition, useRef, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useParams, usePathname, useRouter } from 'next/navigation';

function TranslationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const dropdownRef = useRef(null);

  // Define available locales
  const locales = ['en', 'es'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageSelect = (locale) => {
    startTransition(() => {
      // Create new pathname by replacing the current locale
      const newPathname = pathname.replace(`/${params.locale}`, `/${locale}`);
      router.replace(newPathname);
    });
    setIsOpen(false);
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors ${
          isPending ? 'opacity-50' : ''
        }`}
        disabled={isPending}
      >
        <span className='text-lg'>{params.locale?.toUpperCase() || 'EN'}</span>
        <HiChevronDown
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`absolute right-0 mt-2 w-24 bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 ease-in-out shadow-lg border border-gray-200 ${
          isOpen ? 'max-h-[100px] py-2' : 'max-h-0 hidden'
        }`}
      >
        <ul className='flex flex-col'>
          <li>
            <button
              onClick={() => handleLanguageSelect('en')}
              className='w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors'
            >
              English
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLanguageSelect('es')}
              className='w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors'
            >
              Español
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TranslationDropdown;
