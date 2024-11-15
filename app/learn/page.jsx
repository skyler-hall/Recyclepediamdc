"use client";
import '../globals.css';
import Navbar from "../components/Navbar";
import React, {useEffect, useState} from 'react';
import Footer from '../components/Footer';



function Learn() {
  const games = [
    { title: "The United Nations Activities", imageSrc: "/img/un-logo.png", link: "" },
    { title: "Climate Kids Game", imageSrc: "/img/ckids-logo.png" , link: ""},
    { title: "Environmental Protection Agency Games", imageSrc: "/img/EPA-logo.png", link: "https://www.epa.gov/students/games-quizzes-and-videos-about-environment" }
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

  return (<div className="">
    <Navbar/>
    {/* FIrst Section  */}
    <div className="relative mt-5">
        <h1 className="text-4xl font-bold text-center w-full p-4 bg-[#234E13] text-white">
          Learn Page
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 flex flex-1 justify-center items-center mt-5" >
        {/* left  */}
        <div  className="learn-note text-center sm:text-left p-4 " >
          <p className="">
          Recycling is an essential practice that helps reduce waste, conserve natural resources,
           and minimize the environmental impact of human activity. By turning materials like plastic, 
           paper, glass, and metals into new products, recycling prevents these items from ending up in
            landfills, where they can take decades or, Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Asperiores obcaecati amet, dolore similique ratione nihil eaque velit modi sapiente corrupti pariatur,
             libero fugit iure, natus nulla repellat aut facilis nostrum?</p>
        </div>

        {/* right-games */}
        <div 
          className="games-carousel relative overflow-hidden w-full flex justify-center items-center gap-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ height: '300px' }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
            {games.map((game, index) => (
              <div
                key={index}
                className="card text-center p-4 min-w-full" 
                style={{
                  border: '2px solid grey',
                  borderRadius: '10px',
                  padding: 'auto 20px'
                  // width: '200px',
                  // minWidth: '200px',
                }}
              >
                 <a 
               key={index} 
                href={game.link} 
                className="card text-center p-4 min-w-full"
                style={{
                  // border: '2px solid grey',
                  borderRadius: '10px',
                  padding: 'auto 20px',
                  textDecoration: 'none' 
               }}
                >
                <img src={game.imageSrc} alt={game.title} className="w-full h-48  object-center" />
                <div className="card-body">
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
              <div className="relative mt-10">
        <h1 className="text-4xl font-bold text-center w-full p-4 bg-[#234E13] text-white">
          Get Involved
        </h1>
              <div className="grid md:grid-rows-1  sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-screen p-5">

                <div className="max-w-full w-full rounded overflow-hidden shadow-lg">
                <a href="https://volunteercleanup.org/" className="">

                  <img className="w-full h-48 object-cover" src="/img/involved1.png" alt="Sunset in the mountains"/></a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Volunteer Clean Up</div>
                    <p className="text-gray-700 text-base">
                    VolunteerCleanup.Org engages volunteers to cleanup their neighborhoods, shorelines, and waterways as a way to raise awareness about marine debris and encourage people to reduce their reliance on single-use plastics.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Volunteer</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Recycle</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HandsOn</span> */}
                  </div>
                </div>


                {/* card 2 */}

                <div className="max-w-full w-full  rounded overflow-hidden shadow-lg">
                <a href="https://www.handsonmiami.org/about-membership?layoutViewMode=tablet" className="">

                  <img className="w-full h-48 object-cover" src="/img/composting.webp" alt="Sunset in the mountains"/></a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Composting</div>
                    <p className="text-gray-700 text-base">
                    Composting is the process of turning organic waste into nutrient-rich soil through natural decomposition. It's an eco-friendly way to reduce waste and enrich soil.
                  <br/> Get started with the resource below! </p>
                    <a  target="_blank" href="https://www.miamidade.gov/global/solidwaste/home-composting.page" className="underline">Home Composting</a> <br></br>
                    <a  target="_blank" href="https://sfyl.ifas.ufl.edu/sarasota/natural-resources/waste-reduction/composting/" className="underline">UF/IFAS Composting</a>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Volunteer</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Compost</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HandsOn</span> */}
                  </div>
                </div>

                {/* card 3 */}

                <div className="max-w-full w-full  rounded overflow-hidden shadow-lg">
                <a href="https://www.handsonmiami.org/about-membership?layoutViewMode=tablet" className="">

                  <img className="w-full h-48  object-center" src="/img/handson.jpeg" alt="Sunset in the mountains"/></a>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Hands On Miami</div>
                    <p className="text-gray-700 text-base">
                     Become a volunteer & make difference in the community!
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Volunteer</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Recycle</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HandsOn</span> */}
                  </div>
                </div>
              
         </div>
        </div>
        </div>

       {/* section 3 */}
       <div className='grid grid-cols-2 w-[80%]'>
      <div className="relative mt-10 ">
          <h1 className="text-4xl font-bold text-center w-[100%] p-4 bg-[#234E13] text-white">
             Watch and Learn
           </h1>
  
      <div className="video-grid flex flex-col gap-6 justify-center mt-6 w-100%] px-4">
          <div className="video flex justify-content-center w-full rounded-lg overflow-hidden shadow-lg">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Fex-wvrOZf4?si=nfK5j6JH8LKNTeic" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy='strict-origin-when-cross-origin' allowFullScreen></iframe>
          </div>

          <div className="video flex justify-center w-full rounded-lg overflow-hidden shadow-lg">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/cNPEH0GOhRw?si=5REcFjBYd5PPpjms" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy='strict-origin-when-cross-origin' allowFullScreen></iframe>     </div>
      
          </div>

      </div>


      {/* <div className="relative mt-10 w-[100%]">
        <img src="/img/challenge.png" alt="" />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel repellendus reprehenderit error dolorum! Voluptatum quis, velit maiores, quo sed repellendus qui deleniti asperiores exercitationem ipsum tempore dignissimos ratione deserunt.</p>
      </div> */}

      </div>
      {/* <Footer/> */}
    </div>
    
  );
}

export default Learn;