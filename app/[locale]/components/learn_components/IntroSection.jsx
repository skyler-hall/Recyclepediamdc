import { useTranslations } from 'next-intl';

export default function IntroSection() {
  const t = useTranslations('LearnPage.intro');

  return (
    <div className='bg-white rounded-2xl shadow-lg p-6'>
      <h2 className='text-2xl font-semibold text-[#234E13] mb-4'>
        {t('title')}
      </h2>
      <p className='text-gray-700 text-lg leading-relaxed'>
        {t.raw('content').map((paragraph, index) => (
          <span key={index}>
            {paragraph}
            {index < t.raw('content').length - 1 && (
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
