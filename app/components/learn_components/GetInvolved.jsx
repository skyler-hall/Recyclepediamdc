import { involvementItems } from '@/data/learn/getInvolvedData';

export default function GetInvolved() {
  return (
    <div className='mt-12'>
      <h2 className='text-2xl font-semibold text-[#234E13] mb-6'>
        Get Involved
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {involvementItems.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'
          >
            <a href={item.link} target='_blank' className='block'>
              <img
                className='w-full h-48 object-cover'
                src={item.image}
                alt={item.imageAlt}
              />
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-[#234E13] mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-700 mb-4'>{item.description}</p>
              </div>
            </a>
            {item.additionalLinks && (
              <div className='p-6 pt-0 space-y-2'>
                {item.additionalLinks.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    target='_blank'
                    href={link.url}
                    className='block text-[#234E13] hover:underline'
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
