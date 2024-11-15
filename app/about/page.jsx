'use client';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Partners from '../components/about_components/Partners';
import Mission from '../components/about_components/Mission';
import OurStory from '../components/about_components/OurStory';
const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='min-h-screen pt-3 pb-3 max-w-[1400px] mx-auto px-1 md:px-6 lg:px-8'>
      <OurStory />
      <Mission />
      <Partners />
    </div>
  );
};

export default About;
