import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

function OurStory() {
  const t = useTranslations('AboutPage.ourStory');
  const [isInView1, setIsInView1] = useState(false);
  const imageRef1 = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === imageRef1.current) {
          setIsInView1(entry.isIntersecting);
        }
      });
    }, options);

    if (imageRef1.current) observer.observe(imageRef1.current);

    return () => {
      if (imageRef1.current) observer.unobserve(imageRef1.current);
    };
  }, []);

  return (
    <section className='flex flex-col lg:flex-row-reverse items-center p-4 sm:p-8 lg:p-16 rounded-lg text-center bg-lightGreen'>
      <div className='lg:w-1/2 p-2 sm:p-4'>
        <Image
          ref={imageRef1}
          src='/OurStory.jpg'
          alt={t('title')}
          width={400}
          height={300}
          className={`curved-image-right rounded-lg transition-transform duration-700 ease-out ${
            isInView1 ? 'animate-slideInFromRight' : 'opacity-0'
          }`}
        />
      </div>

      <div className='lg:w-1/2 p-2 sm:p-4'>
        <h1 className='text-3xl font-bold text-darkGreen'>{t('title')}</h1>
        <p className='mt-4 text-gray-700 text-lg'>{t('content')}</p>
        <Link href='/learn'>
          <button className='mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700'>
            {t('learnMore')}
          </button>
        </Link>
      </div>
    </section>
  );
}

export default OurStory;
