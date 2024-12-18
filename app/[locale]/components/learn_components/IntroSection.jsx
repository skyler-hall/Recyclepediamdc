import { learnIntroData } from '@/data/learn/learnIntroSection';

export default function IntroSection() {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-6'>
      <h2 className='text-2xl font-semibold text-[#234E13] mb-4'>
        {learnIntroData.title}
      </h2>
      <p className='text-gray-700 text-lg leading-relaxed'>
        {learnIntroData.content.map((paragraph, index) => (
          <span key={index}>
            {paragraph}
            {index < learnIntroData.content.length - 1 && (
              <span key={`break-${index}`}>
                <br /> <br />
              </span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
