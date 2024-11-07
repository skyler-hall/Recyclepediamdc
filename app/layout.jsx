import localFont from 'next/font/local';
import './globals.css';
import Footer from './components/Footer';

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
      <head>
      <title>Recyclepedia</title>
        <meta name="description" content="Recyclepedia Miami-Dade County" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-grow">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
