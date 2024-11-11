
const Header = () => {
    return (
        <div className="lg:flex justify-between items-center mx-auto mb-24">
            <div className="text-center lg:text-left lg:w-3/5 md:ml-4">
                <h1 className="text-4xl mb-4 sm:text-6xl xl:text-7xl">Waste Made Simple</h1>
                <h3 className="text-2xl mb-4 sm:text-3xl xl:text-4xl">Empowering Miami's Youth in Climate Action</h3>
                <p className="text-l mb-8 lg:text-left">The purpose of Recyclopedia is to educate and empower youth, particularly in Miami,
                    about climate action and sustainable practices. Through engaging content and interactive lessons, Recyclopedia likely aims
                    to inspire younger generations to understand recycling, waste management, and environmental stewardship, making
                    climate-friendly practices accessible and interesting for students.
                </p>
                <div className="lg:hidden lg:w-2/5 p-2 mb-8"> {/*Image display for smaller screens, tablets*/}
                    <img src='placeholder.png' alt='placeholder'/>
                </div>
                <button className="py-2 px-12 rounded-2xl text-l md:text-xl text-white bg-[#234E13]">Get Started</button>
            </div>
            <div className="hidden lg:block lg:w-2/5 p-2"> {/*Image display for larger screens, desktops*/}
                <img src='placeholder.png' alt='placeholder'/>
            </div>
         </div>
    )
}

export default Header