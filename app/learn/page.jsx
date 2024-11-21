'use client';
import '../globals.css';
import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

function Learn() {
  const games = [
    {
      title: 'The United Nations Activities',
      imageSrc: '/img/un-logo.png',
      link: '',
    },
    { title: 'Climate Kids Game', imageSrc: '/img/ckids-logo.png', link: '' },
    {
      title: 'Environmental Protection Agency Games',
      imageSrc: '/img/EPA-logo.png',
      link: 'https://www.epa.gov/students/games-quizzes-and-videos-about-environment',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [isHovered, games.length]);

    // Recycling Tips
  const recyclingTips = {
    batteries: 'Batteries should not be thrown in the trash. Take them to a recycling center or battery drop-off location.',
    ceramics: 'Ceramics cannot be recycled with regular glass. Dispose of them in your regular trash.',
    christmasLights: 'Old Christmas lights can be recycled at designated e-waste recycling locations.',
    foodWaste: 'Food waste can be composted. Some cities also accept food scraps for recycling.',
    juicePouches: 'Juice pouches are not recyclable in most curbside programs. Check with local programs for special disposal.',
    keurigCup: 'Keurig cups (K-Cups) can be recycled if properly separated. Check for a recycling symbol and remove the foil lid.',
    miscellaneous: 'Check with your local recycling program for specific guidelines.',
    glass: 'Glass bottles and jars are usually recyclable, but check if your local recycling program accepts them.',
    medicine: 'Expired or unused medications should be taken to designated drop-off sites. Do not flush them.',
    bottles: 'Plastic bottles are recyclable. Make sure they are clean and free from residue.',
    packingPeanuts: 'Packing peanuts can sometimes be recycled, or you can reuse them.',
    pizzaBoxes: 'Pizza boxes with grease stains are generally not recyclable. Remove excess grease before recycling.',
    plasticBags: 'Plastic bags should not be placed in curbside recycling. Recycle them at designated collection points.',
    plasticButterContainers: 'Plastic butter containers are usually recyclable if clean.',
    plasticCups: 'Plastic cups are recyclable, but check with your local program for specific guidelines.',
    plasticPlates: 'Plastic plates are often not recyclable, but some programs may accept them.',
    plasticUtensils: 'Plastic utensils are generally not recyclable, but check your local recycling program.',
    rubberGloves: 'Rubber gloves should be discarded in the trash, as they are generally not recyclable.',
    styrofoam: 'Styrofoam is not widely recyclable. Some areas offer drop-off locations for recycling.',
    teaBags: 'Tea bags made from paper can be composted, but those with synthetic materials should be discarded in the trash.',
    waxPaper: 'Wax paper is not recyclable in most curbside programs.',
    wrappingPaper: 'Wrapping paper with glitter, foil, or tape is not recyclable. Plain wrapping paper can be recycled.',
    yogurtCup: 'Yogurt cups are usually recyclable if clean. Check with your local recycling program.',
  };

  const [selectedItem, setSelectedItem] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDetails(true);
  };


  return (
    <div className=''>
      <Navbar />

       {/* Recycling Dropdown Section */}
       <div className="recycling-dropdown p-4 bg-[#a9def9] text-white">
        <h2 className="text-4xl font-bold text-center mb-4">Recycling Tips</h2>
        <div className="flex justify-center items-center">
          <select
            onChange={(e) => handleItemClick(e.target.value)}
            className="p-2 border border-gray-300 rounded-md text-black  text-2xl"
          >
            <option value="">Select an item to learn how to recycle</option>
            {Object.keys(recyclingTips).map((item) => (
              <option key={item} value={item}>
                {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, ' $1')}
              </option>
            ))}
          </select>
        </div>
        {showDetails && selectedItem && (
          <div className="mt-4 text-center">
            <h3 className="font-bold text-4xl text-black">How to Recycle {selectedItem.charAt(0).toUpperCase() + selectedItem.slice(1)}</h3>
            <p className="mt-2 text-3xl text-black">{recyclingTips[selectedItem]}</p>
          </div>
        )}
      </div>
      {/* FIrst Section  */}
      <div className='relative mt-5'>
        <h1 className='text-4xl font-bold text-center w-full p-4 bg-[#a9def9] text-white'>
          Learn Page
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-5'>
          {/* left  */}
          <div className='learn-note text-center sm:text-left p-4 '>
            <p className=''>
              Recycling is an essential practice that helps reduce waste,
              conserve natural resources, and minimize the environmental impact
              of human activity. By turning materials like plastic, paper,
              glass, and metals into new products, recycling prevents these
              items from ending up in landfills, where they can take decades or,
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores obcaecati amet, dolore similique ratione nihil eaque
              velit modi sapiente corrupti pariatur, libero fugit iure, natus
              nulla repellat aut facilis nostrum?
            </p>
          </div>

          {/* right-games */}
          <div
            className='games-carousel relative overflow-hidden w-full flex justify-center items-center gap-4'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ height: '300px' }}
          >
            <div
              className='flex transition-transform duration-700 ease-in-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {games.map((game, index) => (
                <div
                  key={index}
                  className='card text-center p-4 min-w-full'
                  style={{
                    border: '2px solid grey',
                    borderRadius: '10px',
                    padding: 'auto 20px',
                    // width: '200px',
                    // minWidth: '200px',
                  }}
                >
                  <a
                    key={index}
                    href={game.link}
                    className='card text-center p-4 min-w-full'
                    style={{
                      // border: '2px solid grey',
                      borderRadius: '10px',
                      padding: 'auto 20px',
                      textDecoration: 'none',
                    }}
                  >
                    <img
                      src={game.imageSrc}
                      alt={game.title}
                      className='w-full h-48  object-center'
                    />
                    <div className='card-body'>
                      <p>{game.title}</p>
                      <hr />
                      {/* <button type="button" className="text-white bg-green-500 hover:bg-green-700 mt-2 font-medium rounded-lg text-sm px-5 py-2.5">
                    Play Games!
                  </button> */}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second section */}
        <div className='relative mt-10'>
          <h1 className='text-4xl font-bold text-center w-full p-4 bg-[#a9def9] text-white'>
            Get Involved
          </h1>
          <div className='grid md:grid-rows-1  sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-screen p-5'>
            <div className='max-w-full w-full rounded overflow-hidden shadow-lg'>
              <a href='https://volunteercleanup.org/' className=''>
                <img
                  className='w-full h-48 object-cover'
                  src='/img/involved1.png'
                  alt='Sunset in the mountains'
                />
              </a>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>Volunteer Clean Up</div>
                <p className='text-gray-700 text-base'>
                  VolunteerCleanup.Org engages volunteers to cleanup their
                  neighborhoods, shorelines, and waterways as a way to raise
                  awareness about marine debris and encourage people to reduce
                  their reliance on single-use plastics.
                </p>
              </div>
              <div className='px-6 pt-4 pb-2'>
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Volunteer</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Recycle</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HandsOn</span> */}
              </div>
            </div>

            {/* card 2 */}

            <div className='max-w-full w-full  rounded overflow-hidden shadow-lg'>
              <a
                href='https://www.handsonmiami.org/about-membership?layoutViewMode=tablet'
                className=''
              >
                <img
                  className='w-full h-48 object-cover'
                  src='/img/composting.webp'
                  alt='Sunset in the mountains'
                />
              </a>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>Composting</div>
                <p className='text-gray-700 text-base'>
                  Composting is the process of turning organic waste into
                  nutrient-rich soil through natural decomposition. It's an
                  eco-friendly way to reduce waste and enrich soil.
                  <br /> Get started with the resource below!{' '}
                </p>
                <a
                  target='_blank'
                  href='https://www.miamidade.gov/global/solidwaste/home-composting.page'
                  className='underline'
                >
                  Home Composting
                </a>{' '}
                <br></br>
                <a
                  target='_blank'
                  href='https://sfyl.ifas.ufl.edu/sarasota/natural-resources/waste-reduction/composting/'
                  className='underline'
                >
                  UF/IFAS Composting
                </a>
              </div>
              <div className='px-6 pt-4 pb-2'>
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Volunteer</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Compost</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HandsOn</span> */}
              </div>
            </div>

            {/* card 3 */}

            <div className='max-w-full w-full  rounded overflow-hidden shadow-lg'>
              <a
                href='https://www.handsonmiami.org/about-membership?layoutViewMode=tablet'
                className=''
              >
                <img
                  className='w-full h-48  object-center'
                  src='/img/handson.jpeg'
                  alt='Sunset in the mountains'
                />
              </a>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>Hands On Miami</div>
                <p className='text-gray-700 text-base'>
                  Become a volunteer & make difference in the community!
                </p>
              </div>
              <div className='px-6 pt-4 pb-2'>
                {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Volunteer</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Recycle</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HandsOn</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>


                    {/* test section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4 mt-10">
  {/* Watch and Learn Section */}
  <div className="flex flex-col justify-start">
    <h1 className="text-4xl font-bold text-center w-full p-4 bg-[#a9def9] text-white">
      Watch and Learn
    </h1>
    <div className="flex flex-col gap-6 justify-center mt-6 w-full">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/Fex-wvrOZf4?si=nfK5j6JH8LKNTeic"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/cNPEH0GOhRw?si=5REcFjBYd5PPpjms"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>

  {/* Join the Green Schools Challenge Section */}
  <div className="flex flex-col justify-between items-center">
    <h1 className="text-4xl font-bold text-center w-full p-4 bg-[#a9def9] text-white">
      Join the Green Schools Challenge
    </h1>
    <div className="flex flex-row items-stretch h-[100%] gap-4 mt-6">
      {/* Image */}
      <div className="flex flex-1">
        <img
          className="w-full h-full object-cove rounded-lg shadow-lg"
          src="/img/green.png"
          alt="Green Schools Challenge"
        />
      </div>
      {/* Text */}
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-3xl text-gray-700 p-4 m-1">
         K-12 students and teachers looking to learn more about waste reduction, energy efficiency, water conservation and more, 
         join the Green Schools Challenge to have access to full lesson plans to promote environmental stewardship.
          <br/>This is an initiative to inspire students and
          teachers to adopt sustainable practices within their schools.<br/>By
          participating, schools can make a lasting impact on their communities
          and the planet. Join us today and be part of the change!
        </p>
      </div>
    </div>
  </div>
</div>

      {/* section 3 */}
      {/* <div className='grid grid-cols-2 w-[80%]'>
        <div className='relative mt-10 '>
          <h1 className='text-4xl font-bold text-center w-[100%] p-4 bg-[#a9def9] text-white'>
            Watch and Learn
          </h1>

          <div className='video-grid flex flex-col gap-6 justify-center mt-6 w-100%] px-4'>
            <div className='video flex justify-content-center w-full rounded-lg overflow-hidden shadow-lg'>
              <iframe
                width='100%'
                height='315'
                src='https://www.youtube.com/embed/Fex-wvrOZf4?si=nfK5j6JH8LKNTeic'
                title='YouTube video player'
                frameBorder={0}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>

            <div className='video flex justify-center w-full rounded-lg overflow-hidden shadow-lg'>
              <iframe
                width='100%'
                height='315'
                src='https://www.youtube.com/embed/cNPEH0GOhRw?si=5REcFjBYd5PPpjms'
                title='YouTube video player'
                frameBorder={0}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>{' '}
            </div>
          </div>
        </div>

  <div className="relative mt-10 flex flex-col items-center ">
    <h1 className="text-4xl font-bold text-center w-[100%] p-4 bg-[#a9def9] text-white">
      Join the Green Schools Challenge
    </h1>
    <div className="flex items-center gap-4 mt-4">
      <img
        src="/img/green.png"
        alt="Green Schools Challenge"
        className="w-1/2 h-auto rounded-lg shadow-lg"
      />
      <p className="text-gray-700 text-base">
        The Green Schools Challenge inspires students and educators to create a
        more sustainable future. Participate in activities that promote
        recycling, energy conservation, and community awareness. Join now and
        help make a difference for generations to come!
      </p> 
    </div>
  </div> */}

      {/* </div> */}
      {/* <Footer/> */}
    </div>
  );
}


export default Learn;
