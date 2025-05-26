import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, Users, Home, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/texture.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">
              More Than A Place To Stay.
              <br />
              <span className="tribal-text">A Tribe To Belong To.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">
              Student co-living spaces designed for connection, growth, and belonging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/properties" className="fs-btn fs-btn-primary">
                Find My Tribe
              </Link>
              <Link to="/community" className="fs-btn fs-btn-outline">
                Explore Community
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-charcoal-800">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6 text-white">What is Fraternity Stay?</h2>
            <p className="text-lg text-gray-300">
              We're building a new kind of student housing community —<br />
              where belonging comes first, ambition is collective, and growth happens together.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={200} className="bg-charcoal-700 p-8 rounded-lg">
              <div className="bg-amber/10 p-4 rounded-full inline-block mb-4">
                <Users size={32} className="text-amber" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Tribal Living</h3>
              <p className="text-gray-300">
                Find your people in shared spaces designed for connection. From
                community kitchens to study zones and jam rooms.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="bg-charcoal-700 p-8 rounded-lg">
              <div className="bg-cobalt/10 p-4 rounded-full inline-block mb-4">
                <Home size={32} className="text-cobalt" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Comfort + Style</h3>
              <p className="text-gray-300">
                Fully furnished spaces that feel like home, with design that inspires.
                Safe, clean, and everything you need to thrive.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400} className="bg-charcoal-700 p-8 rounded-lg">
              <div className="bg-charcoal/10 p-4 rounded-full inline-block mb-4">
                <MapPin size={32} className="text-charcoal-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Prime Locations</h3>
              <p className="text-gray-300">
                Positioned near campuses in vibrant neighborhoods.
                Easy access to transportation, food, and city life.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={500} className="text-center mt-16">
            <Link to="/about" className="inline-flex items-center font-medium text-cobalt hover:text-cobalt-400">
              Learn more about our mission <ArrowRight size={16} className="ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Properties Preview Section */}
      <section className="section bg-charcoal-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div>
                <h2 className="mb-3 text-white">Our Yards</h2>
                <p className="text-gray-300">
                  Discover our uniquely designed co-living spaces
                </p>
              </div>
              <Link to="/properties" className="fs-btn fs-btn-secondary mt-4 md:mt-0">
                View All Properties
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Echo Yard Property */}
              <div className="bg-charcoal-800 rounded-lg overflow-hidden shadow-md card-hover">
                <div className="relative h-80">
                  <img
                    src="/images/echo-yard.jpg"
                    alt="Echo Yard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Echo Yard</h3>
                    <div className="flex items-center text-white/90">
                      <MapPin size={16} className="mr-1" />
                      <span>Koramangala, Bangalore</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-charcoal-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      Girls Only
                    </span>
                    <span className="bg-charcoal-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      Rooftop Lounge
                    </span>
                    <span className="bg-charcoal-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      Co-working
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    A vibrant girls-only community with stylish rooms, creative common spaces,
                    and a rooftop lounge perfect for sunset hangouts.
                  </p>
                  <Link
                    to="/properties/echo-yard"
                    className="inline-flex items-center font-medium text-cobalt hover:text-cobalt-400"
                  >
                    Explore Echo Yard <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Arcade House Property */}
              <div className="bg-charcoal-800 rounded-lg overflow-hidden shadow-md card-hover">
                <div className="relative h-80">
                  <img
                    src="/images/arcade-house.jpg"
                    alt="Arcade House"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Arcade House</h3>
                    <div className="flex items-center text-white/90">
                      <MapPin size={16} className="mr-1" />
                      <span>Indiranagar, Bangalore</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-charcoal-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      Co-Ed
                    </span>
                    <span className="bg-charcoal-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      Game Room
                    </span>
                    <span className="bg-charcoal-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      Music Studio
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Our flagship co-ed property featuring a game room, music studio,
                    and community spaces designed for creativity and connection.
                  </p>
                  <Link
                    to="/properties/arcade-house"
                    className="inline-flex items-center font-medium text-cobalt hover:text-cobalt-400"
                  >
                    Explore Arcade House <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Community Section */}
      <section className="section bg-charcoal-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="mb-6">Join The Tribe</h2>
            <p className="text-lg text-gray-300">
              Fraternity Stay is more than just housing—it's a community of like-minded students
              building connections that last beyond college.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection delay={200} className="bg-charcoal-800 p-6 rounded-lg">
              <img
                src="/images/community-1.jpg"
                alt="Community dinner"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Weekly Dinners</h3>
              <p className="text-gray-400">
                Community-style dinners where everyone contributes and connects.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="bg-charcoal-800 p-6 rounded-lg">
              <img
                src="/images/community-2.jpg"
                alt="Skill workshops"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Skill Workshops</h3>
              <p className="text-gray-400">
                Learn from each other through regular skill-sharing sessions and workshops.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400} className="bg-charcoal-800 p-6 rounded-lg">
              <img
                src="/images/community-3.jpg"
                alt="Weekend trips"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Weekend Adventures</h3>
              <p className="text-gray-400">
                From city explorations to weekend getaways, adventure is better together.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={500} className="text-center">
            <Link to="/community" className="fs-btn fs-btn-primary">
              Explore Our Community
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-charcoal-800">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="mb-6 text-white">The Tribe Speaks</h2>
            <p className="text-lg text-gray-300">
              Hear what our community members have to say about life at Fraternity Stay.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={200} className="bg-charcoal-700 p-8 rounded-lg">
              <div className="mb-6">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V12.5C2.5 13.8807 3.61929 15 5 15H12.5C13.8807 15 15 13.8807 15 12.5V5C15 3.61929 13.8807 2.5 12.5 2.5Z" fill="#F5B919"/>
                  <path d="M27.5 2.5H20C18.6193 2.5 17.5 3.61929 17.5 5V12.5C17.5 13.8807 18.6193 15 20 15H27.5C28.8807 15 30 13.8807 30 12.5V5C30 3.61929 28.8807 2.5 27.5 2.5Z" fill="#F5B919"/>
                </svg>
              </div>
              <p className="text-lg mb-6 italic text-gray-300">
                "I never thought student housing could feel like actual community. The events, the 
                people, the spaces - it's all designed for us to connect. Found my best friends here."
              </p>
              <div className="flex items-center">
                <img
                  src="/images/testimonial-1.jpg"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Ananya S.</h4>
                  <p className="text-sm text-gray-500">Echo Yard Resident</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} className="bg-charcoal-700 p-8 rounded-lg">
              <div className="mb-6">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V12.5C2.5 13.8807 3.61929 15 5 15H12.5C13.8807 15 15 13.8807 15 12.5V5C15 3.61929 13.8807 2.5 12.5 2.5Z" fill="#468DCB"/>
                  <path d="M27.5 2.5H20C18.6193 2.5 17.5 3.61929 17.5 5V12.5C17.5 13.8807 18.6193 15 20 15H27.5C28.8807 15 30 13.8807 30 12.5V5C30 3.61929 28.8807 2.5 27.5 2.5Z" fill="#468DCB"/>
                </svg>
              </div>
              <p className="text-lg mb-6 italic text-gray-300">
                "Moving to Arcade House was the best decision I made for college. The music studio 
                has become my second home, and I've collaborated with people I would never have met otherwise."
              </p>
              <div className="flex items-center">
                <img
                  src="/images/testimonial-2.jpg"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Rohan K.</h4>
                  <p className="text-sm text-gray-500">Arcade House Resident</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-amber to-amber-400 text-charcoal-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h2 className="mb-6">Ready to Find Your Tribe?</h2>
            <p className="text-xl mb-10">
              Join Fraternity Stay and become part of a community that grows together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="fs-btn bg-charcoal-900 text-white hover:bg-charcoal-800">
                Apply Now
              </Link>
              <Link to="/properties" className="fs-btn border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900/10">
                Explore Properties
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
