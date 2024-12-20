import NavigationCard from './NavigationCard';
import { useTranslations } from 'next-intl';

const PageCards = () => {
  const t = useTranslations('HomePage.pageCards');

  return (
    <div className='my-14 mb-20'>
      <div className='mb-4 flex items-center justify-center'>
        <hr className='border-4 border-[#234E13] w-1/3 h-full' />
        <h3 className='text-3xl md:text-4xl mx-6 text-center font-bold uppercase'>
          {t('title')}
        </h3>
        <hr className=' border-4 border-[#234E13] w-1/3 h-full' />
      </div>
      <div className='w-full'>
        <ul className='flex justify-between flex-wrap md:flex-nowrap'>
          {t.raw('cards').map((page, index) => (
            <li key={index} className='p-4 m-2 w-full'>
              <NavigationCard navCardDetails={page} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageCards;
