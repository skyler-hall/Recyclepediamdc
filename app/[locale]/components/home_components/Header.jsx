'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const Header = () => {
  const t = useTranslations('HomePage');
  const [expand, setExpand] = useState(false);

  const handleCick = () => {
    setExpand(!expand);
  };

  const dropdownItems = [
    {
      link: '/learn',
      text: t('getStarted.options.learn'),
    },
    {
      link: '#newsletter',
      text: t('getStarted.options.newsletter'),
    },
    {
      link: '/items',
      text: t('getStarted.options.items'),
    },
    {
      link: '/curbside',
      text: t('getStarted.options.curbside'),
    },
    {
      link: '#community',
      text: t('getStarted.options.community'),
    },
    {
      link: '/about',
      text: t('getStarted.options.about'),
    },
    {
      link: '/contact',
      text: t('getStarted.options.contact'),
    },
  ];

  const linkStyle = {
    marginBottom: '0.7rem',
    fontWeight: 600,
  };

  const GetStartedNav = () => {
    return (
      <div
        className={`absolute inset-x-0 lg:inset-x-auto flex flex-col overflow-hidden transition-colors duration-300 ${
          expand
            ? 'h-max max-h-max p-4 px-6 rounded-2xl bg-gray-100 border-2 shadow-lg'
            : 'max-h-0'
        }`}
      >
        <ul className='flex flex-col'>
          {dropdownItems.map((option, index) => (
            <li
              key={index}
              className='transition-all duration-300 ease-in-out hover:text-[#234E13]'
            >
              <Link href={option.link} style={linkStyle}>
                {option.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className='lg:flex justify-between items-center mx-auto mb-24'>
      <div className='text-center lg:text-left lg:w-3/5 md:ml-4 mt-4'>
        <h1 className='text-4xl mb-4 sm:text-6xl xl:text-7xl font-bold text-[#234E13] drop-shadow-md'>
          {t('title')}
        </h1>
        <h3 className='text-2xl mb-4 sm:text-3xl xl:text-4xl font-medium'>
          {t('subtitle')}
        </h3>
        <p className='text-l lg:text-left mb-8 lg:border-l-8 border-solid border-[#a9def9] lg:pl-4'>
          {t('purpose.start')}
          <span className='text-[#234E13] font-bold'>
            {' '}
            {t('purpose.highlight1')}
          </span>
          {t('purpose.middle')}
          <span className='text-[#234E13] font-bold'>
            {' '}
            {t('purpose.highlight2')}
          </span>
          <br></br>
          {t('purpose.description')}{' '}
          <span className='text-[#234E13] font-bold'>
            {' '}
            {t('purpose.highlight3')}
          </span>
        </p>
        <div className='lg:hidden lg:w-2/5 p-2 mb-8'>
          <img
            src='home_img.png'
            alt='Recycling sign with recyclables in the background'
          />
        </div>
        <button
          onClick={handleCick}
          className={`py-2 px-12 rounded-2xl text-l md:text-xl bg-[#234E13] font-bold transition-color duration-200 ${
            expand
              ? 'bg-white border-4 border-[#234E13] text-black'
              : 'bg-[#234E13] text-white'
          }`}
        >
          {expand ? t('getStarted.expanded') : t('getStarted.button')}
        </button>
        <GetStartedNav />
      </div>
      <div className='hidden lg:block lg:w-2/5 p-2'>
        <img
          src='home_img.png'
          alt='Recycling sign with recyclables in the background'
        />
      </div>
    </div>
  );
};

export default Header;
