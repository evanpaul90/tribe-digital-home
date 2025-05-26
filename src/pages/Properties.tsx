
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import PropertyCard from '@/components/PropertyCard';

const propertiesData = [
  {
    id: 'echo-yard',
    name: 'Echo Yard',
    image: '/images/echo-yard.jpg',
    location: 'Koramangala, Bangalore',
    priceRange: '₹14K - 18K / month',
    tags: ['Girls Only', 'Rooftop Lounge', 'Co-working']
  },
  {
    id: 'arcade-house',
    name: 'Arcade House',
    image: '/images/arcade-house.jpg',
    location: 'Indiranagar, Bangalore',
    priceRange: '₹15K - 20K / month',
    tags: ['Co-Ed', 'Game Room', 'Music Studio']
  }
];

const Properties = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-700 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/texture.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-white">Our Yards</h1>
            <p className="text-xl text-gray-200">
              Each of our properties is uniquely designed around community, comfort, and creativity.
              Find the one that feels like home.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mb-10">
              <h2 className="mb-2 text-charcoal-900">Available Properties</h2>
              <p className="text-gray-700">
                Explore our currently available Fraternity Stay locations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {propertiesData.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  name={property.name}
                  image={property.image}
                  location={property.location}
                  priceRange={property.priceRange}
                  tags={property.tags}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4 text-charcoal-900">Coming Soon</h3>
            <p className="text-gray-700 mb-8">
              We're expanding to new neighborhoods and cities.
              Join our waitlist to be the first to know.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 border-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber text-charcoal-900"
                />
                <button className="fs-btn fs-btn-primary rounded-l-none">
                  Join Waitlist
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 text-charcoal-900">What's Included</h2>
            <p className="text-lg text-gray-700">
              All Fraternity Stay properties include these standard amenities,
              with each location offering unique additional features.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100} className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-charcoal-900">Living Spaces</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Fully furnished rooms</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Community lounges</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Study spaces</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Community kitchen</span>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200} className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-charcoal-900">Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Housekeeping</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">High-speed WiFi</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">24/7 security</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Maintenance</span>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={300} className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-charcoal-900">Community</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Weekly events</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Community app</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Skill workshops</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Resident manager</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 text-charcoal-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Everything you need to know about living at Fraternity Stay.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={100} className="mb-6">
              <details className="group bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-charcoal-900">
                  <span>What's included in the rent?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p>Your rent includes fully furnished accommodation, utilities (water, electricity up to a limit, gas), high-speed WiFi, housekeeping, security, and access to all community spaces and events. Some properties include additional amenities like laundry or meal plans.</p>
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection delay={200} className="mb-6">
              <details className="group bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-charcoal-900">
                  <span>What's the minimum lease duration?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p>Our standard lease is for 11 months, though we offer semester options at some locations. We prioritize students who can stay for the full academic year as it helps build a more stable community.</p>
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection delay={300} className="mb-6">
              <details className="group bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-charcoal-900">
                  <span>How does the application process work?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p>Our application process is simple: fill out the form, have a quick virtual or in-person interview, and if we feel you'd be a good fit for our community, we'll send you an offer. We don't just look at your ability to pay – we're building a community of like-minded students.</p>
                </div>
              </details>
            </AnimatedSection>

            <AnimatedSection delay={400} className="mb-6">
              <details className="group bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <summary className="flex justify-between items-center font-bold cursor-pointer list-none text-charcoal-900">
                  <span>Can I choose my roommates?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700">
                  <p>Yes! You can apply with friends to share a room or unit. If you're coming solo, our community team will match you with compatible roommates based on your living preferences, interests, and habits.</p>
                </div>
              </details>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={500} className="text-center mt-10">
            <a href="#" className="text-cobalt font-medium hover:underline">
              View all FAQs
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-cobalt to-cobalt-600 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h2 className="mb-6 text-white">Found Your Perfect Yard?</h2>
            <p className="text-xl mb-10 text-gray-100">
              Take the next step towards becoming part of our tribe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/apply" className="fs-btn bg-white text-cobalt hover:bg-gray-100">
                Apply Now
              </a>
              <a href="/about" className="fs-btn border-2 border-white text-white hover:bg-white/10">
                Learn More
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Properties;
