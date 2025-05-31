import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-95"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-400 opacity-20 animate-float1"></div>
      <div className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-white opacity-15 animate-float2"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-blue-300 opacity-15 animate-float3"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            Explore the World
          </span>{" "}
          <span className="inline-block animate-bounce">🌍</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mb-8 mx-auto leading-relaxed">
          Your ultimate travel companion. Discover breathtaking destinations, curated travel guides, and inspiring stories from globetrotters like you.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          <Link
            href="/destinations"
            className="px-8 py-4 bg-white text-blue-700 rounded-full shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center"
          >
            Explore Destinations
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <Link
            href="/about"
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-700 hover:bg-opacity-10 transition-all duration-300 font-semibold text-lg"
          >
            Learn About Us
          </Link>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="flex items-center text-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>Scroll to discover</span>
          </div>
        </div>
      </div>
    </section>
  );
}