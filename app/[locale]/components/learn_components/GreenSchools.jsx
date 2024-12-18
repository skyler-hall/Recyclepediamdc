import { useTranslations } from 'next-intl';

export default function GreenSchools() {
  const t = useTranslations('LearnPage.greenSchools');

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6'>
      <h2 className='text-2xl font-semibold text-darkGreen mb-4'>
        {t('title')}
      </h2>
      <div className='flex flex-col gap-6'>
        <div className='prose prose-lg text-gray-700'>
          {t.raw('paragraphs').map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg leading-relaxed ${index > 0 ? 'mt-4' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className='rounded-lg overflow-hidden shadow-md'>
          <img
            className='w-full h-auto object-cover'
            src='/img/green.png'
            alt={t('image.alt')}
          />
        </div>
        <a
          href='https://dreamingreen.org/the-dream-in-green-academy/'
          target='_blank'
          className='bg-darkGreen text-white font-semibold py-3 px-6 rounded-lg text-center hover:bg-opacity-90 transition-colors duration-200'
        >
          {t('button')}
        </a>
      </div>
    </div>
  );
}
