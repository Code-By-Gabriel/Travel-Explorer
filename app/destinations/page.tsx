'use client';

import Link from 'next/link';
import Image from 'next/image';

const destinations = [
  {
    name: 'Paris, France',
    image: 'https://img.freepik.com/free-photo/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky_181624-5118.jpg',
    slug: 'paris',
    highlight: 'City of Love & Lights'
  },
  {
    name: 'Tokyo, Japan',
    image: 'https://img.freepik.com/free-photo/chureito-pagoda-fuji-mountain-sunset-japan_335224-200.jpg',
    slug: 'tokyo',
    highlight: 'Where Tradition Meets Future'
  },
  {
    name: 'Cape Town, South Africa',
    image: 'https://img.freepik.com/free-photo/chapman-s-peak-by-ocean-captured-south-africa_181624-9019.jpg',
    slug: 'cape-town',
    highlight: 'Where Oceans & Mountains Meet'
  },
  {
    name: 'New York, USA',
    image: 'https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg',
    slug: 'new-york',
    highlight: 'The City That Never Sleeps'
  },
  {
    name: 'Santorini, Greece',
    image: 'https://img.freepik.com/free-photo/view-oia-village-santorini-island-greece_53876-140200.jpg',
    slug: 'santorini',
    highlight: 'Whitewashed Beauty'
  },
  {
    name: 'Bali, Indonesia',
    image: 'https://img.freepik.com/free-photo/temple-gates-bali-indonesia_335224-409.jpg',
    slug: 'bali',
    highlight: 'Island of the Gods'
  },
  {
    name: 'Rio de Janeiro, Brazil',
    image: 'https://img.freepik.com/free-photo/christ-redeemer-rio-de-janeiro-brazil_181624-41093.jpg',
    slug: 'rio',
    highlight: 'Carnival Capital'
  },
  {
    name: 'Sydney, Australia',
    image: 'https://img.freepik.com/free-photo/opera-house-sydney-harbour-australia_335224-355.jpg',
    slug: 'sydney',
    highlight: 'Harbor City'
  },
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Discover <span className="text-blue-600">Your Next Adventure</span> 🌎
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated selection of breathtaking destinations around the globe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <Link
              href={`/destinations/${dest.slug}`}
              key={dest.slug}
              className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={destinations.indexOf(dest) < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {dest.name}
                  </h2>
                  <p className="text-blue-200 text-sm mt-1">{dest.highlight}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-sm font-medium text-white">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Need Help Choosing?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}