'use client';
import { useTranslations } from 'next-intl';

export default function GetInvolved() {
  const t = useTranslations('LearnPage.getInvolved');

  const involvementItems = [
    {
      title: t('items.volunteerCleanup.title'),
      image: '/img/involved1.png',
      imageAlt: t('items.volunteerCleanup.title'),
      link: 'https://volunteercleanup.org/',
      description: t('items.volunteerCleanup.description'),
    },
    {
      title: t('items.composting.title'),
      image: '/img/composting.webp',
      imageAlt: t('items.composting.title'),
      link: 'https://www.miamidade.gov/global/solidwaste/home-composting.page',
      description: t('items.composting.description'),
      additionalLinks: [
        {
          text: t('items.composting.links.homeComposting'),
          url: 'https://www.miamidade.gov/global/solidwaste/home-composting.page',
        },
        {
          text: t('items.composting.links.ufComposting'),
          url: 'https://sfyl.ifas.ufl.edu/sarasota/natural-resources/waste-reduction/composting/',
        },
      ],
    },
    {
      title: t('items.handsOnMiami.title'),
      image: '/img/handson.jpeg',
      imageAlt: t('items.handsOnMiami.title'),
      link: 'https://www.handsonmiami.org/about-membership?layoutViewMode=tablet',
      description: t('items.handsOnMiami.description'),
    },
  ];

  return (
    <div className='mt-12'>
      <h2 className='text-2xl font-semibold text-[#234E13] mb-6'>
        {t('title')}
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {involvementItems.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'
          >
            <a href={item.link} target='_blank' className='block'>
              <img
                className='w-full h-48 object-cover'
                src={item.image}
                alt={item.imageAlt}
              />
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-[#234E13] mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-700 mb-4'>{item.description}</p>
              </div>
            </a>
            {item.additionalLinks && (
              <div className='p-6 pt-0 space-y-2'>
                {item.additionalLinks.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    target='_blank'
                    href={link.url}
                    className='block text-[#234E13] hover:underline'
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
