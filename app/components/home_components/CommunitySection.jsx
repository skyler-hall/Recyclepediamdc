import  CalendarView from './CalendarView'

const CommunitySection = () => {
    return (
        <div className="mt-24 mb-6">
            <div className="mb-14 flex items-center justify-center">
                <hr className=" border-4 border-[#DBF4D2] w-1/3 h-full" />
                <h3 className="text-3xl md:text-4xl mx-6 text-center uppercase font-bold">In the Community</h3>
                <hr className=" border-4 border-[#DBF4D2] w-1/3 h-full" />
            </div>
            <div className="md:flex justify-center items-center">
                <div className="md:w-1/2 p-8 lg:border-r-8 border-solid border-[#a9def9] bg-white">
                    <h3 className="text-5xl font-bold text-center md:text-5xl md:text-left mb-8 md:mb-4">Community Calendar</h3>
                    <p className="text-center md:text-left">
                        Get involved with your community and make a difference by exploring local events, activities, and more!</p>
                </div>
                <div className="md:w-1/2">
                    <CalendarView />
                    {/* <p className='text-center'>No events at the moment!</p> */}
                </div>
            </div>

            {/* <div className='absolute w-screen -z-10 left-[calc(0%)] bottom-0 max-w-fit'>
                <img src='mountains_bkg.jpg' className='-z-9999'></img>
            </div> */}
        </div>
    )
}

export default CommunitySection