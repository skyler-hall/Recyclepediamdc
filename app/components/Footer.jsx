import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-darkGreen text-white p-4 text-center">
      <p>&copy; 2024 Recyclopedia™. All Rights Reserved.</p>
      <div className="mt-4">
        <ul className="flex justify-center space-x-8">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/curbside" className="hover:underline">Curbside</a></li>
          <li><a href="/items" className="hover:underline">Items</a></li>
          <li><a href="/learn" className="hover:underline">Learn</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
        </ul>
      </div>
      <div className="mt-4 flex justify-center space-x-1 items-center">
        <a href="https://www.facebook.com" className="text-white hover:text-gray-300">
          <Image src="/fb-icon.png" alt="Facebook" width={100} height={100} objectFit="contain" />
        </a>
        <a href="https://www.twitter.com" className="text-white hover:text-gray-300">
          <Image src="/x-icon.png" alt="Twitter" width={150} height={150} objectFit="contain" />
        </a>
        <a href="https://www.instagram.com" className="text-white hover:text-gray-300">
          <Image src="/Instagram-icon.png" alt="Instagram" width={100} height={100} objectFit="contain" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


