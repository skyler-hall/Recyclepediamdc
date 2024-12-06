'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { LuInfo } from "react-icons/lu";
import { IconContext } from "react-icons";

const NavigationCard = ({navCardDetails}) => {

    const curbsideDropdownContents = [
        {
            type: 'Condo',
            text: 'Please contact your administrator for information on a private hauler in your area. Your condo should provide cardboard recycling at the least.',
        },
        {
            type: 'Business',
            text: 'Please contact a private hauler in your area.',
        },
    ]


    const [isOpen, setIsOpen] = useState(false) //controls the dropdown menu itself
    const [popupShown, setPopupShown] = useState(false) //shows popup when a dropdown menu item is clicked
    const [location, setLocation] = useState(null)

    const InfoPopup = () => {

        const handleClose = () => {
            setPopupShown(false)
        }

        if(!popupShown) return null

        //takes the location, returns the information corresponding to it
        return(
            <div className="md:w-[700px] h-fit flex flex-col md:flex-row items-center justify-center gap-4 py-6 px-6 m-2 rounded-2xl shadow-xl bg-[#a9def9] fixed inset-0 md:top-[calc(50vh-25%)] md:left-[calc(50vw-47%)] lg:left-[calc(50vw-35%)] xl:left-[calc(50vw-25%)]">
                <div className="md:w-1/5 px-4">
                    <IconContext.Provider value={{color: "gray", size: "5rem"}}>
                        <LuInfo />
                    </IconContext.Provider>
                </div>
                <div className="md:text-left">
                        {
                            Object.entries(curbsideDropdownContents).filter(loc => loc[1].type == location).map(info => (
                                    <div key={location}>
                                        <h1 className="text-3xl font-bold mb-2">
                                            {info[1].type}
                                        </h1>
                                        <p className="text-lg md:text-xl mb-4">
                                            {info[1].text}
                                        </p>
                                    </div>
                            ))
                        }
                    <button onClick={handleClose} className="text-2xl font-bold px-6 py-2 bg-white rounded-2xl">Close</button>
                </div>
            </div>
        )
    }

    const showInfoPopup = (location) => {
        setPopupShown(true)
    }

    return (
        <div className="border-2 rounded-lg shadow-lg">
            <div className="w-full h-8 md:h-12 object-cover bg-[#a9def9] rounded-md rounded-b-none border-b-8 border-[#DBF4D2]">{/*decor band*/}

            </div>
            <div className="self-center text-center p-7 pt-4 pb-10 my-auto">{/*contents*/}
                <h3 className="text-3xl m-2 mb-4 font-bold">{navCardDetails.pageName}</h3>
                <h6 className="text-l m-2 mb-8">{navCardDetails.pageDesc}</h6>
                {
                    navCardDetails.pageName == 'Curbside Pickup' ? (
                        <div className="-mt-2 relative">
                            <button onClick={() => setIsOpen(!isOpen)} className="bg-[#234E13] text-white font-bold rounded-2xl px-6 py-1">Select</button>
                            <ul className={`absolute inset-x-0 overflow-hidden transition-all duration-300 ease-in px-2 w-fit mx-auto mt-1 ${isOpen ? 'h-fit p-2 bg-[#234E13] rounded-2xl' : 'max-h-0'}`}>
                                <li>
                                    <Link href={navCardDetails.pageLink} onClick={() => setIsOpen(false)} className="text-white font-bold px-6 py-4 transition-colors">
                                        Single-Family
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={() => {setIsOpen(false); showInfoPopup("Condo"); setLocation("Condo")}} className="text-white font-bold px-6 py-2 transition-colors">
                                        Condo
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => {setIsOpen(false); showInfoPopup("Business"); setLocation("Business")}} className="text-white font-bold px-6 transition-colors">
                                        Business
                                    </button>
                                </li>
                            </ul>
                            <div className={`transition-all duration-300 ease-in-out ${popupShown ? 'fixed w-screen h-screen md:bg-gray-600/75 inset-0 z-50' : 'max-h-0'}`}>
                                {
                                    location && 
                                    <InfoPopup />
                                }
                            </div>
                        </div>
                    ) : (
                        <Link href={navCardDetails.pageLink} className="bg-[#234E13] text-white font-bold rounded-2xl px-6 py-2">
                            Explore
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default NavigationCard;

{/* <li>
                                    <Link href={navCardDetails.pageLink} onClick={setIsOpen(false)} className="bg-[#234E13] text-white font-bold rounded-2xl px-6 py-2">
                                        Single-Family
                                    </Link>
                                </li>
                                <li>
                                    <Link href={''} onClick={() => {setIsOpen(false); showInfoPopup("Condo")}} className="bg-[#234E13] text-white font-bold rounded-2xl px-6 py-2">
                                        Condo
                                    </Link>
                                </li>
                                <li>
                                    <Link href={''} onClick={() => {setIsOpen(false); showInfoPopup("Business")}} className="bg-[#234E13] text-white font-bold rounded-2xl px-6 py-2">
                                        Business
                                    </Link>
                                </li> */}