'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      ref={navbarRef}
      className='fixed z-50 top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 flex flex-row justify-between items-center bg-white/90 backdrop-blur-sm h-16 rounded-xl pl-6 pr-4 md:pl-6 md:pr-6 shadow-lg border border-gray-200'
    >
      <Link
        href='/'
        className='flex items-center space-x-2'
        onClick={closeMenu}
      >
        {/* Replace with new logo */}
        <h1 className='text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent'>
          Recyclepedia
        </h1>
      </Link>

      {/* Mobile menu button */}
      <div className='md:hidden h-full flex flex-col justify-center'>
        <button
          onClick={toggleMenu}
          className='focus:outline-none hover:bg-gray-100 p-2 rounded-lg transition-colors'
        >
          {isOpen ? (
            <HiX size={24} className='text-gray-700' />
          ) : (
            <HiMenu size={24} className='text-gray-700' />
          )}
        </button>
      </div>

      {/* Menu for larger screens */}
      <ul className='hidden md:flex flex-row items-center gap-6'>
        <Link
          href='/curbside'
          className={`text-lg transition-colors relative ${
            pathname === '/curbside'
              ? 'text-green-600 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-green-600'
              : 'text-gray-700 hover:text-green-600'
          }`}
        >
          Curbside
        </Link>
        <Link
          href='/items'
          className={`text-lg transition-colors relative ${
            pathname === '/items'
              ? 'text-green-600 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-green-600'
              : 'text-gray-700 hover:text-green-600'
          }`}
        >
          Items
        </Link>
        <Link
          href='/learn'
          className={`text-lg transition-colors relative ${
            pathname === '/learn'
              ? 'text-green-600 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-green-600'
              : 'text-gray-700 hover:text-green-600'
          }`}
        >
          Learn
        </Link>
        <Link
          href='/about'
          className={`text-lg transition-colors relative ${
            pathname === '/about'
              ? 'text-green-600 after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-green-600'
              : 'text-gray-700 hover:text-green-600'
          }`}
        >
          About
        </Link>
        <Link
          href='/contact'
          className='text-lg px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
        >
          Contact
        </Link>
      </ul>

      {/* Dropwdown menu for mobile screens*/}
      <div
        className={`absolute top-[calc(100%+0.75rem)] left-0 right-0 bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] py-4 border border-gray-200' : 'max-h-0'
        } md:hidden shadow-lg`}
      >
        <ul className='flex flex-col items-center gap-4'>
          <Link
            href='/curbside'
            className={`text-lg transition-colors relative ${
              pathname === '/curbside'
                ? 'text-green-600'
                : 'text-gray-700 hover:text-green-600'
            }`}
            onClick={closeMenu}
          >
            Curbside
          </Link>
          <Link
            href='/items'
            className={`text-lg transition-colors relative ${
              pathname === '/items'
                ? 'text-green-600'
                : 'text-gray-700 hover:text-green-600'
            }`}
            onClick={closeMenu}
          >
            Items
          </Link>
          <Link
            href='/learn'
            className={`text-lg transition-colors relative ${
              pathname === '/learn'
                ? 'text-green-600'
                : 'text-gray-700 hover:text-green-600'
            }`}
            onClick={closeMenu}
          >
            Learn
          </Link>
          <Link
            href='/about'
            className={`text-lg transition-colors relative ${
              pathname === '/about'
                ? 'text-green-600'
                : 'text-gray-700 hover:text-green-600'
            }`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href='/#contact'
            className='text-lg px-6 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
            onClick={closeMenu}
          >
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
