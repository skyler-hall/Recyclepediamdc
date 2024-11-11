import Image from 'next/image';

const sections = ['Introduction', 'Section 1', 'Section 2', 'Conclusion'];

function BlogPost() {
  const postDetails = {
    title: 'Blog Post Title',
    author: 'Author Name',
    datePosted: 'November 11, 2024',
  };

  const blog = [
    {
      type: 'text',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    praesentium cumque officia ipsa quidem, eveniet laboriosam dicta
    ipsum repellendus dolorum architecto asperiores blanditiis fugit
    vitae! Sequi quis ad voluptate sit! Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Impedit sapiente inventore suscipit ut
    hic, cum ducimus at vel corporis illo sequi incidunt possimus! Vero
    error maxime et voluptates iure rerum. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quasi tempore, delectus exercitationem
    eius, eum omnis veritatis obcaecati impedit in deserunt non autem
    perferendis excepturi? Voluptatem quia sunt minima non hic? Lorem,
    ipsum dolor sit amet consectetur adipisicing elit. Officiis, aliquam
    animi nesciunt ex recusandae culpa ullam quisquam modi error facere
    fugiat aperiam saepe architecto totam reprehenderit porro
    consequuntur qui ratione?
  `,
    },
    {
      type: 'image',
      src: '/recycleSign.png',
      alt: 'image description',
    },
    {
      type: 'text',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    praesentium cumque officia ipsa quidem, eveniet laboriosam dicta
    ipsum repellendus dolorum architecto asperiores blanditiis fugit
    vitae! Sequi quis ad voluptate sit! Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Impedit sapiente inventore suscipit ut
    hic, cum ducimus at vel corporis illo sequi incidunt possimus! Vero
    error maxime et voluptates iure rerum. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quasi tempore, delectus exercitationem
    eius, eum omnis veritatis obcaecati impedit in deserunt non autem
    perferendis excepturi? Voluptatem quia sunt minima non hic? Lorem,
    ipsum dolor sit amet consectetur adipisicing elit. Officiis, aliquam
    animi nesciunt ex recusandae culpa ullam quisquam modi error facere
    fugiat aperiam saepe architecto totam reprehenderit porro
    consequuntur qui ratione?
  `,
    },
    {
      type: 'text',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    praesentium cumque officia ipsa quidem, eveniet laboriosam dicta
    ipsum repellendus dolorum architecto asperiores blanditiis fugit
    vitae! Sequi quis ad voluptate sit! Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Impedit sapiente inventore suscipit ut
    hic, cum ducimus at vel corporis illo sequi incidunt possimus! Vero
    error maxime et voluptates iure rerum. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quasi tempore, delectus exercitationem
    eius, eum omnis veritatis obcaecati impedit in deserunt non autem
    perferendis excepturi? Voluptatem quia sunt minima non hic? Lorem,
    ipsum dolor sit amet consectetur adipisicing elit. Officiis, aliquam
    animi nesciunt ex recusandae culpa ullam quisquam modi error facere
    fugiat aperiam saepe architecto totam reprehenderit porro
    consequuntur qui ratione?
  `,
    },
    {
      type: 'text',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    praesentium cumque officia ipsa quidem, eveniet laboriosam dicta
    ipsum repellendus dolorum architecto asperiores blanditiis fugit
    vitae! Sequi quis ad voluptate sit! Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Impedit sapiente inventore suscipit ut
    hic, cum ducimus at vel corporis illo sequi incidunt possimus! Vero
    error maxime et voluptates iure rerum. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quasi tempore, delectus exercitationem
    eius, eum omnis veritatis obcaecati impedit in deserunt non autem
    perferendis excepturi? Voluptatem quia sunt minima non hic? Lorem,
    ipsum dolor sit amet consectetur adipisicing elit. Officiis, aliquam
    animi nesciunt ex recusandae culpa ullam quisquam modi error facere
    fugiat aperiam saepe architecto totam reprehenderit porro
    consequuntur qui ratione?
  `,
    },
  ];

  return (
    <div className='pb-96'>
      <div className='mb-6 h-96 bg-gray-200 rounded-2xl'>
        <Image
          src='/'
          layout='fill'
          objectFit='cover'
          alt='main banner will go here'
        />
        image goes here
      </div>
      <main className='grid grid-cols-1 lg:grid-cols-7 gap-12'>
        <div id='first-col' className='lg:col-span-2'>
          <div>
            <div id='tableofcontents' className='ml-8 pt-12'>
              <h3 className='text-xl'>Table of Contents</h3>
              <ul className='pl-4 pr-24'>
                {sections.map((section, index) => (
                  <li key={index} className='pb-2 border-b'>
                    {section}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id='second-col' className='lg:col-span-4'>
          <h1 className='text-5xl pb-2 font-semibold'>{postDetails.title}</h1>
          <p className='ml-4 text-sm text-gray-500'>
            By {postDetails.author} on {postDetails.datePosted}
          </p>
          <div className='pt-10 ml-4 '>
            {blog.map((item, index) => {
              if (item.type == 'text') {
                return (
                  <p key={index} className='inline-block mb-5'>
                    {item.text}
                  </p>
                );
              } else if (item.type == 'image') {
                return (
                  <Image
                    key={index}
                    src={item.src}
                    layout='responsive'
                    objectFit='cover'
                    alt={item.alt}
                    width={250} // example width
                    height={250} // example height
                    className='px-24 py-8'
                  />
                );
              }
            })}
          </div>
        </div>

        <div id='third-col' className='lg:col-span-1'></div>
      </main>
    </div>
  );
}

export default BlogPost;
