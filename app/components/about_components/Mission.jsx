import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

function Mission() {
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
        <h2 className='text-2xl font-semibold text-darkGreen'>Our Mission</h2>
        <p className='mt-4 text-gray-700 text-lg'>
          At Dream in Green (DIG), we recognize that contamination is one of the
          biggest challenges in recycling, occurring when non-recyclable items
          enter the recycling system. This not only diminishes recycling success
          rates but also creates confusion among residents regarding acceptable
          materials in their local programs.
        </p>

        {/* Conditionally render additional content */}
        {isExpanded && (
          <div className='mt-4 text-gray-700'>
            <p>
              To address these challenges, our mission is to provide Miami-Dade
              County residents with accessible and up-to-date recycling
              information. By offering clear guidance on proper recycling
              practices, we empower individuals to participate effectively in
              their community's recycling efforts, ultimately increasing the
              recovery of recyclables.
            </p>
            <p>
              <br />
              Our platform, <strong>Recyclepedia</strong>, serves as a
              comprehensive resource for accurate information on what can be
              recycled. It helps users understand acceptable items in their
              municipalities and provides alternative disposal options for those
              not accepted in their recycling programs. By facilitating proper
              recycling practices, Recyclepedia contributes to higher recycling
              rates, reduced pollution, and improved community health.
            </p>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={toggleExpansion}
          className='mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700'
        >
          {isExpanded ? 'Show Less' : 'Read More'}
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
