import Link from 'next/link';
import Image from 'next/image';

const featuredDestinations = [
  {
    name: 'Paris, France',
    image: 'https://img.freepik.com/free-photo/eiffel-tower-paris-france_181624-13258.jpg',
    slug: 'paris',
    highlight: 'City of Love & Lights'
  },
  {
    name: 'Tokyo, Japan',
    image: 'https://img.freepik.com/free-photo/tokyo-tower-japan_335224-234.jpg',
    slug: 'tokyo',
    highlight: 'Tradition Meets Future'
  },
  {
    name: 'Bali, Indonesia',
    image: 'https://img.freepik.com/free-photo/temple-gates-bali-indonesia_335224-409.jpg',
    slug: 'bali',
    highlight: 'Island of the Gods'
  },
  {
    name: 'New York, USA',
    image: 'https://img.freepik.com/free-photo/statue-liberty-new-york-city-usa_335224-351.jpg',
    slug: 'new-york',
    highlight: 'The City That Never Sleeps'
  }
];

export default function DestinationGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {featuredDestinations.map((destination) => (
        <Link
          href={`/destinations/${destination.slug}`}
          key={destination.slug}
          className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative h-64 w-full">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                {destination.name}
              </h3>
              <p className="text-blue-200 text-sm mt-1">{destination.highlight}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}