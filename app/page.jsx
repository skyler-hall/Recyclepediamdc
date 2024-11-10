import Link from "next/link"
import Navbar from "./components/Navbar"
import NavigationCard from "./components/home_components/NavigationCard"
import NewsletterBar from "./components/home_components/NewsletterBar"
import Header from "./components/home_components/Header"
import PageCards from './components/home_components/PageCards'
import CommunitySection from './components/home_components/CommunitySection'
import Footer from "./components/Footer"
import Calendar from "./components/home_components/Calendar"

export default function Home() {
  const pages = [
    {
      pageName: "Curbside Pickup",
      pageDesc: "See your municipality's curbside pickup recycling.",
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


  return (
    <div className="bg-white px-2 py-10 mx-auto text-black max-w-7xl">
      <Header />
      <PageCards />
      <NewsletterBar />
      <CommunitySection />
      <Footer />
    </div>
  )
}
