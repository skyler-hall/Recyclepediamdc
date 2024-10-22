import localFont from 'next/font/local';
import './globals.css';
import Navbar from './components/Navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Recyclepedia',
  description: 'Recyclepedia Miami-Dade County',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} mt-20 mx-2`}
      >
        <Navbar />
        {children}
        {/* Footer goes here */}
      </body>
    </html>
  );
}
