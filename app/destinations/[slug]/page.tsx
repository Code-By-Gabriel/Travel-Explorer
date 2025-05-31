import { notFound } from 'next/navigation';
import Image from 'next/image';

const destinations = [
  { 
    slug: 'paris', 
    name: 'Paris, France', 
    description: 'The City of Light, where romance, art, and history come together along the Seine River. From the iconic Eiffel Tower to the charming streets of Montmartre, Paris offers endless wonders at every turn.',
    image: 'https://img.freepik.com/free-photo/eiffel-tower-paris-france_181624-13258.jpg',
    highlights: [
      'Eiffel Tower & Champ de Mars',
      'Louvre Museum & Mona Lisa',
      'Notre-Dame Cathedral',
      'Champs-Élysées',
      'Seine River Cruises'
    ],
    bestTime: 'April-June or September-October',
    gettingAround: 'Excellent metro system, walkable center, Velib bikes'
  },
  { 
    slug: 'tokyo', 
    name: 'Tokyo, Japan', 
    description: 'A dazzling metropolis where cutting-edge technology and ancient traditions coexist. From serene temples to neon-lit streets, Tokyo offers an unforgettable cultural experience.',
    image: 'https://img.freepik.com/free-photo/tokyo-tower-japan_335224-234.jpg',
    highlights: [
      'Shibuya Crossing',
      'Senso-ji Temple',
      'Tsukiji Outer Market',
      'Shinjuku Gyoen National Garden',
      'Akihabara District'
    ],
    bestTime: 'March-May (cherry blossoms) or October-November',
    gettingAround: 'Efficient JR trains and subway, taxis are expensive'
  },
  { 
    slug: 'cape-town', 
    name: 'Cape Town, South Africa', 
    description: 'Where mountains meet oceans, Cape Town boasts breathtaking landscapes, diverse wildlife, and a rich cultural heritage that makes it one of the world\'s most beautiful cities.',
    image: 'https://img.freepik.com/free-photo/table-mountain-cape-town-south-africa_335224-355.jpg',
    highlights: [
      'Table Mountain',
      'Cape of Good Hope',
      'Robben Island',
      'Kirstenbosch Gardens',
      'Boulders Beach Penguins'
    ],
    bestTime: 'November-February (summer)',
    gettingAround: 'Rental car recommended, limited public transport'
  },
  { 
    slug: 'new-york', 
    name: 'New York City, USA', 
    description: 'The city that never sleeps, where towering skyscrapers, world-class museums, and diverse neighborhoods create an energy unlike anywhere else on Earth.',
    image: 'https://img.freepik.com/free-photo/statue-liberty-new-york-city-usa_335224-351.jpg',
    highlights: [
      'Statue of Liberty',
      'Central Park',
      'Times Square',
      'Metropolitan Museum of Art',
      'Broadway Shows'
    ],
    bestTime: 'April-June and September-October',
    gettingAround: 'Subway is fastest, iconic yellow cabs, walkable'
  },
  { 
    slug: 'santorini', 
    name: 'Santorini, Greece', 
    description: 'Famous for its whitewashed buildings with blue domes overlooking the caldera, Santorini offers stunning sunsets, volcanic beaches, and world-class cuisine.',
    image: 'https://img.freepik.com/free-photo/view-oia-village-santorini-island-greece_53876-140200.jpg',
    highlights: [
      'Oia Village',
      'Fira Town',
      'Red Beach',
      'Santorini Wineries',
      'Caldera Sunset Cruise'
    ],
    bestTime: 'May-June or September-October',
    gettingAround: 'ATVs popular, local buses, donkeys in some areas'
  },
  { 
    slug: 'bali', 
    name: 'Bali, Indonesia', 
    description: 'The Island of the Gods offers lush jungles, terraced rice fields, spiritual temples, and some of the world\'s most beautiful beaches and resorts.',
    image: 'https://img.freepik.com/free-photo/temple-gates-bali-indonesia_335224-409.jpg',
    highlights: [
      'Ubud Monkey Forest',
      'Tegallalang Rice Terraces',
      'Uluwatu Temple',
      'Seminyak Beach',
      'Mount Batur Sunrise Hike'
    ],
    bestTime: 'April-October (dry season)',
    gettingAround: 'Private drivers affordable, scooters common'
  },
  { 
    slug: 'rio', 
    name: 'Rio de Janeiro, Brazil', 
    description: 'Vibrant and colorful, Rio is known for its Carnival celebrations, samba music, stunning beaches like Copacabana, and the iconic Christ the Redeemer statue.',
    image: 'https://img.freepik.com/free-photo/christ-redeemer-rio-de-janeiro-brazil_181624-41093.jpg',
    highlights: [
      'Christ the Redeemer',
      'Sugarloaf Mountain',
      'Copacabana Beach',
      'Selarón Steps',
      'Tijuca Forest'
    ],
    bestTime: 'December-March (summer and Carnival)',
    gettingAround: 'Metro in center, buses, taxis recommended at night'
  },
  { 
    slug: 'sydney', 
    name: 'Sydney, Australia', 
    description: 'Australia\'s most famous city boasts the iconic Opera House, Harbour Bridge, spectacular beaches, and a laid-back outdoor lifestyle.',
    image: 'https://img.freepik.com/free-photo/opera-house-sydney-harbour-australia_335224-355.jpg',
    highlights: [
      'Sydney Opera House',
      'Bondi Beach',
      'Harbour Bridge Climb',
      'Taronga Zoo',
      'Blue Mountains Day Trip'
    ],
    bestTime: 'September-November and March-May',
    gettingAround: 'Opal card for trains/ferries/buses, walkable CBD'
  }
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);
  return {
    title: `${destination?.name || 'Destination'} | Travel Explorer`,
    description: destination?.description || 'Discover amazing travel destinations',
    openGraph: {
      images: destination?.image ? [destination.image] : [],
    },
  };
}

export async function generateStaticParams() {
  return destinations.map((dest) => ({ slug: dest.slug }));
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) return notFound();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {destination.name}
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            {destination.description.split('.')[0]}.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About {destination.name.split(',')[0]}
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>{destination.description}</p>
              
              <h3 className="text-xl font-semibold mt-8 text-gray-900">
                Why Visit {destination.name.split(',')[0]}?
              </h3>
              <p className="mt-4">
                {destination.name.split(',')[0]} offers a unique blend of experiences that cater to every type of traveler. 
                Whether you&apos;re seeking cultural immersion, breathtaking natural beauty, or urban adventures, 
                this destination promises memories that will last a lifetime.
              </p>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-blue-50 rounded-xl p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Top Highlights
              </h3>
              <ul className="space-y-3">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300">
                  Plan Your Trip
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Tips Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Travel Tips for {destination.name.split(',')[0]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Time to Visit</h3>
              <p className="text-gray-700">
                {destination.bestTime}
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Around</h3>
              <p className="text-gray-700">
                {destination.gettingAround}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Discover {destination.name.split(',')[0]}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={destination.image}
                  alt={`${destination.name} view ${i+1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}