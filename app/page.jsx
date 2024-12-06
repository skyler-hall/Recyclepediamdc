import Link from 'next/link';
import Navbar from './components/Navbar';
import NavigationCard from './components/home_components/NavigationCard';
import NewsletterBar from './components/home_components/NewsletterBar';
import Header from './components/home_components/Header';
import PageCards from './components/home_components/PageCards';
import CommunitySection from './components/home_components/CommunitySection';
import Footer from './components/Footer';
import Calendar from './components/home_components/CalendarView';
import HomePopup from './components/home_components/home_popup/HomePopup';
import NewsletterPopup from './components/home_components/home_popup/NewsletterPopup';
import NewsletterBanner from './components/home_components/NewsletterBanner';

export default function Home() {
  return (
      <div className='bg-white px-2 py-7 mx-auto text-black max-w-7xl'>
        <HomePopup />
        <NewsletterPopup />
        <Header />
        <div id='pagecards'><PageCards /></div>
        <div id='newsletter'><NewsletterBanner /></div>
        <div id='community'><CommunitySection /></div>
      </div>
  );
}
