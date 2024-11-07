import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-darkGreen text-white">
      <div className="font-bold text-lg">
        <Link href="/">
          <Image src="/recycleLogo.webp" alt="Recycle Logo" width={40} height={40} />
        </Link>
      </div>
      <ul className="flex space-x-12">
        <li><Link href="/curbside">Curbside</Link></li>
        <li><Link href="/items">Items</Link></li>
        <li><Link href="/learn">Learn</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Header;

