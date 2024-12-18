import Image from 'next/image';
import Link from 'next/link';

function Partners() {
  return (
    <section className='flex flex-col items-center justify-center p-8 lg:p-16 rounded-lg text-center bg-lightGreen'>
      <h2 className='text-2xl font-semibold text-darkGreen mb-4'>
        Our Partners
      </h2>
      <p className='mt-4 text-gray-700 text-center text-lg'>
        DIG was honored to receive the 2021 Innovation Grant from The Children's
        Trust, which supported the creation of Recyclepedia. This initiative
        aims to improve recycling, reduce pollution, and enhance community
        health in Miami-Dade County. DIG collaborates closely with various
        municipalities, non-profits, and community partners to spread awareness
        and provide accurate data.
      </p>
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
