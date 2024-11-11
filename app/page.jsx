
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
  return (
    <div className="bg-white px-2 py-10 mx-auto text-black max-w-7xl">
      <Navbar />
      <Header />
      <PageCards />
      <NewsletterBar />
      <CommunitySection />
      <Footer />
    </div>
  )
}