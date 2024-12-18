import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

function Mission() {
  const t = useTranslations('AboutPage.ourStory.mission');

  const [isExpanded, setIsExpanded] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const imageRef2 = useRef(null);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === imageRef2.current) {
          setIsInView2(entry.isIntersecting);
        }
      });
    }, options);

    if (imageRef2.current) observer.observe(imageRef2.current);

    return () => {
      if (imageRef2.current) observer.unobserve(imageRef2.current);
    };
  }, []);

  return (
    <section className='flex flex-col lg:flex-row-reverse items-center p-8 lg:p-16 bg-white text-center'>
      <div className='lg:w-1/2 p-0 md:p-4'>
        <h2 className='text-2xl font-semibold text-darkGreen'>{t('title')}</h2>
        <p className='mt-4 text-gray-700 text-lg'>{t('mainContent')}</p>

        {isExpanded && (
          <div className='mt-4 text-gray-700'>
            <p>{t('expandedContent1')}</p>
            <br />
            <p>{t('expandedContent2')}</p>
          </div>
        )}

        <button
          onClick={toggleExpansion}
          className='mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700'
        >
          {isExpanded ? t('button.less') : t('button.more')}
        </button>
      </div>

      <div className='lg:w-1/2 p-4'>
        <Image
          ref={imageRef2}
          src='/OurMission.jpg'
          alt='Our Mission'
          width={400}
          height={300}
          className={`curved-image-left rounded-lg transition-transform duration-700 ease-out ${
            isInView2 ? 'animate-slideInFromLeft' : 'opacity-0'
          }`}
        />
      </div>
    </section>
  );
}

export default Mission;
