"use client";

import Navbar from "../components/Navbar";
import React, {useEffect, useState} from 'react';



function Learn() {
  const games = [
    { title: "The United Nations Activities", imageSrc: "..." },
    { title: "Climate Kids Game", imageSrc: "..." },
    { title: "Environmental Protection Agency Quiz", imageSrc: "..." }
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
      <div className="grid  grid-cols-1 sm:grid-cols-2 flex gap-5 justify-center items-center mt-5" >
        {/* left  */}
        <div  className="learn-note text-center sm:text-left p-4 " >
        <strong><h1 className="text-xl"> Learn Page</h1></strong>
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
                <img src={game.imageSrc} alt={game.title} className="w-full h-48 object-cover" />
                <div className="card-body">
                  <p>{game.title}</p>
                  <hr />
                  <button type="button" className="text-white bg-green-500 hover:bg-green-700 mt-2 font-medium rounded-lg text-sm px-5 py-2.5">
                    Play Game!
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;