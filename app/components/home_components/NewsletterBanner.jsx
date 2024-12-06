'use client'
import NewsletterPopup from "./home_popup/NewsletterPopup"
import { LuRecycle } from "react-icons/lu";
import { IconContext } from "react-icons";
import Link from "next/link";

const NewsletterBanner = () => {
    return(
        <div className="bg-[#234E13] rounded-3xl shadow-2xl sm:flex items-center w-screen relative left-[calc(-50vw+50%)] xl:left-0 py-8 my-30 2xl:mt-20 max-w-7xl">
            <div className="sm:w-4/12 mb-6 sm:mb-0">
                <img src='Diggy.png' className=" scale-110 md:scale-125" alt="Diggy"/>
            </div>
            <div className="mx-8 p-4 sm:w-8/12 justify-self-end sm:p-0 sm:pr-8">
                <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-left text-white mb-4">Subscribe to our Newsletter</h2>
                <p className="sm:text-xl md:text-3xl text-left text-white mb-6">Stay up to date with the latest news in sustainability, initiatives, and events from Dream in Green!</p>
                <Link href={"https://dreamingreen.org/latest-news/"} rel="noopener noreferrer" target="_blank" className={`m-auto text-lg md:text-xl font-bold rounded-2xl border-none bg-[#a9def9] p-1 px-3 md:px-8`}> Sign Up</Link>
            </div>
            <div className="hidden md:block absolute opacity-10 right-0">
                <IconContext.Provider value={{color: "white", size: "22rem"}}>
                    <LuRecycle />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default NewsletterBanner