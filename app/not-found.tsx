'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Compass Illustration */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <Image
            src="/compass-404.png" // Replace with your own compass image or use an icon
            alt="Lost Traveler"
            fill
            className="object-contain animate-pulse"
          />
        </div>

        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! You&apos;re Lost</h2>
        
        <p className="text-lg text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track to exploring amazing destinations!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
          >
            Go Back
          </button>
          
          <Link
            href="/"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300 font-medium"
          >
            Return Home
          </Link>
        </div>

        {/* Popular Destinations */}
        <div className="mt-12">
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            Popular Destinations You Might Like
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Zanzibar', href: '/destinations/zanzibar' },
              { name: 'Serengeti', href: '/destinations/serengeti' },
              { name: 'Kilimanjaro', href: '/destinations/kilimanjaro' },
              { name: 'Dar es Salaam', href: '/destinations/dar-es-salaam' },
            ].map((destination) => (
              <Link
                key={destination.name}
                href={destination.href}
                className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition hover:text-blue-600"
              >
                {destination.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for destinations..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}