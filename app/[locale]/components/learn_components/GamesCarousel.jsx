'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function GamesCarousel() {
  const t = useTranslations('LearnPage.games');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const games = [
    {
      title: t('game1.title'),
      imageSrc: '/img/un-ep.png',
      link: '',
    },
    {
      title: t('game2.title'),
      imageSrc: '/img/climate-kids.png',
      link: '',
    },
    {
      title: t('game3.title'),
      imageSrc: '/img/epa.png',
      link: 'https://www.epa.gov/students/games-quizzes-and-videos-about-environment',
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [isHovered]);

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6 h-full'>
      <h2 className='text-2xl font-semibold text-[#234E13] mb-4'>
        {t('title')}
      </h2>
      <div
        className='relative overflow-hidden rounded-lg h-[calc(100%-4rem)]'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className='flex transition-transform duration-700 ease-in-out h-full'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {games.map((game, index) => (
            <div key={index} className='card min-w-full h-full'>
              <a
                href={game.link}
                className='flex flex-col items-center h-full'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={game.imageSrc}
                  alt={game.title}
                  className='w-full flex-1 object-cover rounded-lg'
                />
                <div className='mt-4'>
                  <p className='text-gray-700 text-lg font-medium'>
                    {game.title}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
