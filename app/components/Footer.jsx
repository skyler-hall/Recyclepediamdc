import React from "react";
import Link from "next/link"
import Image from "next/image";


function Footer () {
    return (
      <footer className="bg-[#234E13] text-white py-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Copyright Text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>© 2024 Recyclepedia</p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="/curbside" className="hover:underline">Curbside</Link>
          <Link href="/items" className="hover:underline">Items</Link>
          <Link href="/learn" className="hover:underline">Learn</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/dreamingreen" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Image src="/FacebookLogo.png" alt="Facebook Logo" width={18} height={18} />
          </a>
          <a href="https://www.instagram.com/dreamingreenmia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Image src="/InstagramLogo.png" alt="Instagram Logo" width={18} height={18} />
          </a>
          <a href="https://www.linkedin.com/company/dream-in-green/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Image src="/LinkedInLogo.png" alt="LinkedIn Logo" width={18} height={18} />
          </a>
          <a href="https://x.com/Dream_in_Green" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Image src="/XLogo.png" alt="Twitter Logo" width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
    );
  };
  
  export default Footer;
  