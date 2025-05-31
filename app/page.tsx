'use client';

import Hero from '@/components/Hero';
import DestinationGrid from '@/components/DestinationGrid';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Discover Your Next Adventure
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Explore our most popular destinations around the globe
            </p>
          </div>
          <DestinationGrid />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Travel With Us?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              We make travel planning effortless and memorable
            </p>
          </div>
          <Features />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Traveler Stories
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Don&apos;t just take our word for it
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </>
  );
}