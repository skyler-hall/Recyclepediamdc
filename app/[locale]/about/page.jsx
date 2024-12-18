'use client';

import { useState } from 'react';
import Partners from '../components/about_components/Partners';
import Mission from '../components/about_components/Mission';
import OurStory from '../components/about_components/OurStory';

const About = () => {
  return (
    <div className='min-h-screen pt-3 pb-3 max-w-[1400px] mx-auto px-1 md:px-6 lg:px-8'>
      <OurStory />
      <Mission />
      <Partners />
    </div>
  );
};

export default About;
