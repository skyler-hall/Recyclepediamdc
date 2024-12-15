'use client';

import RecyclingTips from '../components/learn_components/RecyclingTips';
import IntroSection from '../components/learn_components/IntroSection';
import GamesCarousel from '../components/learn_components/GamesCarousel';
import GetInvolved from '../components/learn_components/GetInvolved';
import WatchAndLearn from '../components/learn_components/WatchAndLearn';
import GreenSchools from '../components/learn_components/GreenSchools';
import { learnPageData } from '../../data/learn/learnPageData';

export default function Learn() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-[#DBF4D2]/20'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#234E13] mb-4'>
            {learnPageData.title}
          </h1>
          <p className='text-gray-600 text-lg md:text-xl'>
            {learnPageData.subtitle}
          </p>
        </div>

        <RecyclingTips />

        <div className='mt-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <IntroSection />
            <GamesCarousel />
          </div>
        </div>

        <GetInvolved />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
          <WatchAndLearn />
          <GreenSchools />
        </div>
      </div>
    </div>
  );
}
