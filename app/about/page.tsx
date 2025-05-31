import Image from 'next/image';
import TeamCard from '@/components/TeamCard'; // You'll need to create this component

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'World traveler with 15+ years of exploration experience across 60+ countries.',
      image: 'https://img.freepik.com/free-photo/portrait-young-happy-businessman_171337-7278.jpg'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Content',
      bio: 'Travel writer and photographer with a passion for authentic cultural experiences.',
      image: 'https://img.freepik.com/free-photo/beautiful-woman-with-backpack-smiling-holding-binoculars_176420-4266.jpg?uid=R181527595&ga=GA1.1.1308830825.1746020619&semt=ais_items_boosted&w=740'
    },
    {
      name: 'James Wilson',
      role: 'Destination Expert',
      bio: 'Former tour guide specializing in adventure travel and off-the-beaten-path experiences.',
      image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg"
          alt="World landmarks collage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Our Travel Story
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Connecting travelers with unforgettable experiences since 2015
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-16">
          <div className="prose prose-lg max-w-3xl mx-auto text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed">
              At Travel Explorer, we believe that travel has the power to change lives. What began as a passion project among friends has grown into a trusted resource for millions of travelers worldwide.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Our mission is simple: to inspire and empower people to explore the world with confidence. We combine local expertise with cutting-edge technology to create travel guides that go beyond the typical tourist experience.
            </p>
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Authenticity:</strong> We showcase the real essence of each destination</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Sustainability:</strong> Promoting responsible travel practices</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Innovation:</strong> Constantly improving how you discover the world</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">8M+</div>
              <div className="text-sm">Annual Visitors</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm">Destinations Covered</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">15K+</div>
              <div className="text-sm">Travel Tips</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm">Countries Reached</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join millions of travelers who trust us to plan their perfect trips.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 font-medium">
              Browse Destinations
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition duration-300 font-medium">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}