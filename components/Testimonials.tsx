const testimonials = [
  {
    quote: "Travel Explorer helped me plan the perfect trip to Japan. Their guides were spot on!",
    author: "Sarah Johnson",
    role: "Frequent Traveler"
  },
  {
    quote: "I never would have discovered those hidden gems in Italy without this site.",
    author: "Michael Chen",
    role: "Food Blogger"
  },
  {
    quote: "The itinerary suggestions saved me weeks of research. Highly recommended!",
    author: "Emma Rodriguez",
    role: "Photographer"
  }
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow">
          <div className="text-blue-500 text-4xl mb-4">&quot;</div>
          <p className="text-gray-600 mb-4">{testimonial.quote}</p>
          <div className="font-medium text-gray-900">{testimonial.author}</div>
          <div className="text-sm text-blue-600">{testimonial.role}</div>
        </div>
      ))}
    </div>
  );
}