import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Travel Explorer',
  description: 'Discover stunning destinations around the globe',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
