import localFont from 'next/font/local';
import '../globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Recyclepedia',
  description: 'Recyclepedia Miami-Dade County',
};

export default async function RootLayout({ children, params }) {
  const locale = params.locale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>Recyclepedia</title>
        <meta name='description' content='Recyclepedia Miami-Dade County' />
        <link rel='icon' href='../../public/favicon.ico' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} mt-20 mx-2`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
