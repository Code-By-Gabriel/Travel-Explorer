const features = [
  {
    name: 'Expert Guides',
    description: 'Our team of travel experts provides insider tips and curated recommendations.',
    icon: '🌍'
  },
  {
    name: 'Personalized Itineraries',
    description: 'Get custom travel plans tailored to your interests and budget.',
    icon: '✏️'
  },
  {
    name: '24/7 Support',
    description: 'Access our support team anytime during your travels.',
    icon: '🛟'
  },
  {
    name: 'Best Price Guarantee',
    description: 'We guarantee the best rates for flights and hotels.',
    icon: '💰'
  }
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <div key={feature.name} className="pt-6">
          <div className="flow-root bg-white px-6 pb-8 rounded-lg shadow h-full">
            <div className="-mt-6">
              <div className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg text-white text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}