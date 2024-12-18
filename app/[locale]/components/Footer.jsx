import React from 'react';
import { Link } from '@/i18n/routing';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className='w-full bg-[#234E13] text-white py-2'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        {/* Copyright Text */}
        <div className='text-center md:text-left mb-4 md:mb-0'>
          <p>© 2024 Recyclepedia | INIT Build 2024</p>
        </div>

        {/* Navigation Links */}
        <div className='flex space-x-4 mb-4 md:mb-0'>
          <Link href='/curbside' className='hover:underline'>
            {t('nav.curbside')}
          </Link>
          <Link href='/items' className='hover:underline'>
            {t('nav.items')}
          </Link>
          <Link href='/learn' className='hover:underline'>
            {t('nav.learn')}
          </Link>
          <Link href='/about' className='hover:underline'>
            {t('nav.about')}
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className='flex space-x-4'>
          <Link
            href='https://www.facebook.com/dreamingreen'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            <FaFacebook size={20} />
          </Link>
          <Link
            href='https://www.instagram.com/dreamingreenmia/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href='https://www.linkedin.com/company/dream-in-green/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href='https://x.com/Dream_in_Green'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <FaXTwitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
