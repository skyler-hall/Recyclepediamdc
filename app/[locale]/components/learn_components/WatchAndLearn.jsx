import { learnVideos } from '@/data/learn/learnVideos';

export default function WatchAndLearn() {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-6'>
      <h2 className='text-2xl font-semibold text-[#234E13] mb-4'>
        Watch and Learn
      </h2>
      <div className='flex flex-col gap-6'>
        {learnVideos.map((video, index) => (
          <VideoCard key={index} title={video.title} videoId={video.videoId} />
        ))}
      </div>
    </div>
  );
}

const VideoCard = ({ title, videoId }) => {
  return (
    <div>
      <h3 className='text-xl font-medium text-[#234E13] mb-3'>{title}</h3>
      <div className='rounded-lg overflow-hidden shadow-md'>
        <iframe
          width='100%'
          height='300'
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
