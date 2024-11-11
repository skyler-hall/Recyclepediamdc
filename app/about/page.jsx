"use client"; 
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useState } from 'react';
import Link from 'next/link';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white"> 
      <div className="sticky top-0 z-50 shadow-md">
        <Header />
      </div>

      {/* Our Story Section */}
      <section className="flex flex-col lg:flex-row items-center p-8 lg:p-16 rounded-lg text-center bg-lightGreen">
        <div className="lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold text-darkGreen">Our Story</h1>
          <p className="mt-4 text-gray-700">
            Since 2006, Dream in Green (DIG) has empowered individuals, especially youth, to take a leading role in addressing climate change and other environmental challenges facing South Florida. By assisting schools, households, local governments, and businesses, DIG helps reduce their environmental footprint. Through partnerships within our community, we develop, implement, and oversee educational programs and workshops that promote environmentally sustainable behaviors among all age groups, with a particular emphasis on K-12 students.
          </p>
          <Link href="/learn">
            <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Learn More
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 p-4">
        <Image src="/OurStory.jpg" alt="Our Story" width={400} height={300} className="rounded-lg curved-image-right animate-slideInFromLeft" />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="flex flex-col lg:flex-row-reverse items-center p-8 lg:p-16 bg-white text-center">
        <div className="lg:w-1/2 p-4">
          <h2 className="text-2xl font-semibold text-darkGreen">Our Mission</h2>
          <p className="mt-4 text-gray-700">
          At Dream in Green (DIG), we recognize that contamination is one of the biggest challenges in recycling, occurring when non-recyclable items enter the recycling system. This not only diminishes recycling success rates but also creates confusion among residents regarding acceptable materials in their local programs.
          </p>

          {/* Conditionally render additional content */}
          {isExpanded && (
            <div className="mt-4 text-gray-700">
              <p>
              To address these challenges, our mission is to provide Miami-Dade County residents with accessible and up-to-date recycling information. By offering clear guidance on proper recycling practices, we empower individuals to participate effectively in their community’s recycling efforts, ultimately increasing the recovery of recyclables.
              </p>
              <p>
              <br />Our platform, <strong>Recyclepedia</strong>, serves as a comprehensive resource for accurate information on what can be recycled. It helps users understand acceptable items in their municipalities and provides alternative disposal options for those not accepted in their recycling programs. By facilitating proper recycling practices, Recyclepedia contributes to higher recycling rates, reduced pollution, and improved community health.
              </p>
            </div>
          )}

          {/* Toggle button */}
          <button
            onClick={toggleExpansion}
            className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>

        <div className="lg:w-1/2 p-4">
        <Image src="/OurMission.jpg" alt="Our Mission" width={400} height={300} className="rounded-lg curved-image-left animate-slideInFromLeft" />
        </div>
      </section>

{/* Our Partners Section */}
<section className="flex flex-col items-center justify-center p-8 lg:p-16 rounded-lg text-center bg-lightGreen">
  <h2 className="text-2xl font-semibold text-darkGreen mb-4">Our Partners</h2>
  <p className="mt-4 text-gray-700 text-center">
    DIG was honored to receive the 2021 Innovation Grant from The Children's Trust, which supported the creation of Recyclepedia. This initiative aims to improve recycling, reduce pollution, and enhance community health in Miami-Dade County. DIG collaborates closely with various municipalities, non-profits, and community partners to spread awareness and provide accurate data.
  </p>
  <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
    {/* Logos */}
    <Image src="/MDLogo.png" alt="MD" width={120} height={50} className="rounded-lg" />
    <Image src="/trustlogo.png" alt="Children's Trust" width={120} height={50} className="rounded-lg" />
    <Image src="/FIULogo.png" alt="FIU" width={120} height={50} className="rounded-lg" />
    <Image src="/DIGLogo.png" alt="DiG" width={120} height={50} className="rounded-lg" />
  </div>
</section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
