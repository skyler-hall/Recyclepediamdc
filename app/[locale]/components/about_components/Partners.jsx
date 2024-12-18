import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

function Partners() {
  const t = useTranslations('AboutPage.ourStory.partners');

  return (
    <section className='flex flex-col items-center justify-center p-8 lg:p-16 rounded-lg text-center bg-lightGreen'>
      <h2 className='text-2xl font-semibold text-darkGreen mb-4'>
        {t('title')}
      </h2>
      <p className='mt-4 text-gray-700 text-center text-lg'>{t('content')}</p>
      <div className='flex flex-wrap justify-center items-center gap-8 mt-8'>
        {/* Logos */}
        <Link
          href='https://www.miamidade.gov/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src='/MDLogo.png' alt='MD' width={120} height={50} />
        </Link>
        <Link
          href='https://www.thechildrenstrust.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/trustlogo.png'
            alt="Children's Trust"
            width={120}
            height={50}
          />
        </Link>
        <Link
          href='https://www.fiu.edu/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src='/FIULogo.png' alt='FIU' width={120} height={50} />
        </Link>
        <Link
          href='https://dreamingreen.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src='/DIGLogo.png' alt='DiG' width={120} height={50} />
        </Link>
      </div>
    </section>
  );
}

export default Partners;
