import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 w-full bg-blue-600">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Have questions about your next adventure? We&apos;re here to help!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Gabriel Gilbert"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your travel plans..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">Monday-Friday, 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">info@travelexplorer.com</p>
                    <p className="text-gray-500 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Office</h3>
                    <p className="text-gray-600">123 Travel Street</p>
                    <p className="text-gray-600">Adventure City, AC 12345</p>
                    <p className="text-gray-500 text-sm mt-1">Come visit us!</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-600">
                    <FaClock className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
           <div className="bg-white p-4 rounded-xl shadow-lg">
  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
    <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8065124403406!2d39.08643967449438!3d-6.793382366438408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c446b08c974ed%3A0xdaf0a5819ad42d1!2sSt.%20Joseph%20University%20in%20Tanzania!5e0!3m2!1sen!2stz!4v1748696952344!5m2!1sen!2stz"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="w-full h-64"
      title="Dar es Salaam Central Map"
    ></iframe>
  </div>
  <p className="text-center text-gray-500 mt-2">
    Our headquarters in Dar es Salaam, Tanzania
  </p>
</div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "How do I book a trip through Travel Explorer?",
              answer: "You can either book directly through our website or contact our travel consultants for personalized assistance."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and bank transfers. Payment plans available for certain packages."
            },
            {
              question: "Can I customize my travel itinerary?",
              answer: "Absolutely! Our travel experts can tailor any package to your specific needs and preferences."
            },
            {
              question: "What's your cancellation policy?",
              answer: "Cancellation policies vary by package. Most bookings offer free cancellation up to 30 days before departure."
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-medium text-blue-600 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}