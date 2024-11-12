'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

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
      className='fixed top-2 md:top-1 left-2 md:left-1 right-2 md:right-1 flex flex-row justify-between items-center bg-[#DBF4D2] h-16 rounded-md px-6 shadow-md'
    >
      <Link href='/'>
        {/* Replace with new logo */}
        <h1 className='text-2xl font-bold'>Recyclepedia</h1>
      </Link>

      {/* Mobile menu button */}
      <div className='md:hidden h-full flex flex-col justify-center'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Menu for larger screens */}
      <ul className='hidden md:flex flex-row items-center gap-4'>
        <Link href='/curbside' className='hover:underline'>
          Curbside
        </Link>
        <Link href='/items' className='hover:underline'>
          Items
        </Link>
        <Link href='/learn' className='hover:underline'>
          Learn
        </Link>
        <Link href='/about' className='hover:underline'>
          About
        </Link>
        <Link href='/contact' className='hover:underline'>
          Contact
        </Link>
      </ul>

      {/* Dropwdown menu for mobile screens*/}
      <div
        className={`absolute top-16 left-0 right-0 bg-[#DBF4D2] overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[300px] py-4' : 'max-h-0'
        } md:hidden shadow-md`}
      >
        <ul className='flex flex-col items-center gap-4'>
          <Link
            href='/curbside'
            className='hover:underline'
            onClick={closeMenu}
          >
            Curbside
          </Link>
          <Link href='/items' className='hover:underline' onClick={closeMenu}>
            Items
          </Link>
          <Link href='/learn' className='hover:underline' onClick={closeMenu}>
            Learn
          </Link>
          <Link href='/about' className='hover:underline' onClick={closeMenu}>
            About
          </Link>
          <Link
            href='/#contact'
            className='p-2 px-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-all'
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
