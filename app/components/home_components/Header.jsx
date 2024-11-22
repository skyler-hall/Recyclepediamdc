"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

const Header = () => {

    const [expand, setExpand] = useState(false)
    const handleCick = (e) => {
        setExpand(!expand)
    }

    const dropdownItems = [
        {
            link: '/learn',
            text: "Recycle something, but I'm not sure of it.",
        },
        {
            link: '#newsletter',
            text: 'Join the newsletter',
        },
        {
            link: '/items',
            text: 'Drop off recyclable items',
        },
        {
            link: '/curbside',
            text: 'Put something in my recycling bin',
        },
        {
            link: '#community',
            text: 'Make a change',
        },
        {
            link: '/about',
            text: 'Learn about Recyclepedia',
        },
        {
            link: '/contact',
            text: 'Get in touch',
        },
    ]

    const linkStyle = {
        marginBottom: '0.7rem',
        fontWeight: 600,
    }

    const GetStartedNav = () => {
        return(
            <div className={`absolute flex flex-col overflow-hidden transition-colors duration-300 ${expand ? 'h-max max-h-max p-4 px-6 rounded-2xl bg-gray-100 border-2 shadow-lg' : 'max-h-0'}`}>
                <ul className="flex flex-col">
                    {
                        dropdownItems && dropdownItems.map((option, index) => (
                            <li key={index} className="transition-all duration-300 ease-in-out hover:text-[#234E13]">
                                <Link href={option.link} style={linkStyle}>{option.text}</Link>

                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }


    return (
        <div className="lg:flex justify-between items-center mx-auto mb-24">
            <div className="text-center lg:text-left lg:w-3/5 md:ml-4 mt-4">
                <h1 className="text-4xl mb-4 sm:text-6xl xl:text-7xl font-bold text-[#234E13] drop-shadow-md">Waste Made Simple</h1>
                <h3 className="text-2xl mb-4 sm:text-3xl xl:text-4xl font-medium">Empowering Miami's Youth in Climate Action</h3>
                <p className="text-l lg:text-left mb-8 lg:border-l-8 border-solid border-[#a9def9] lg:pl-4">
                    The purpose of Recyclepedia is to 
                    <span className="text-[#234E13] font-bold"> educate and empower youth</span>, 
                    particularly in Miami, about 
                    <span className="text-[#234E13] font-bold"> climate action and sustainable practices. </span>

                    <br></br>

                    Through engaging content and interactive lessons, Recyclepedia likely aims
                    to inspire younger generations to understand recycling, waste management, and environmental stewardship, making
                    climate-friendly practices <span className="text-[#234E13] font-bold"> accessible and interesting for students. </span>
                </p>
                <div className="lg:hidden lg:w-2/5 p-2 mb-8"> {/*Image display for smaller screens, tablets*/}
                    <img src='home_img.png' alt='Recycling sign with recyclables in the background'/>
                </div>
                <button onClick={handleCick} className={`py-2 px-12 rounded-2xl text-l md:text-xl bg-[#234E13] font-bold transition-color duration-200 ${expand ? 'bg-white border-4 border-[#234E13] text-black' : 'bg-[#234E13] text-white'}`}>{expand ? 'I want to...' : 'Get Started'}</button>
                <GetStartedNav />
            </div>
            <div className="hidden lg:block lg:w-2/5 p-2"> {/*Image display for larger screens, desktops*/}
                <img src='home_img.png' alt='Recycling sign with recyclables in the background'/>
            </div>
         </div>
    )
}

export default Header