import NavigationCard from "./NavigationCard"
//import pages from './constants'

export const pages = [
    {
      pageName: "Curbside Pickup",
      pageDesc: "See curbside pickup recycling options by municipality for your single family home, or alternatives for other buildings.",
      pageLink: "/curbside",
    },
    {
      pageName: "Recyclable Items",
      pageDesc: "Check where you can recycle various items.",
      pageLink: "/items",
    },
    {
      pageName: "Learn",
      pageDesc: "Explore recycling and get involved.",
      pageLink: "/learn",
    },
    {
      pageName: 'About',
      pageDesc: '',
      pageLink: '/about',
    }
  ]

const PageCards = () => {
    return(
        <div className="my-14 mb-20">
            <div className="mb-4 flex items-center justify-center">
                <hr className="border-4 border-[#234E13] w-1/3 h-full" />
                <h3 className="text-3xl md:text-4xl mx-6 text-center font-bold uppercase">Take Action</h3>
                <hr className=" border-4 border-[#234E13] w-1/3 h-full" />
            </div>
            <div className="w-full">
                <ul className="flex justify-between flex-wrap md:flex-nowrap">
                    {
                        pages.slice(0, 3).map((page, index) => (

                            <li key={index} className="p-4 m-2 w-full">
                                <NavigationCard navCardDetails={page}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default PageCards