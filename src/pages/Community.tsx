import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import CommunityPost from '@/components/CommunityPost';
import { Calendar, Users, MapPin } from 'lucide-react';

const communityPosts = [
  {
    image: '/images/community-1.jpg',
    title: 'Weekend Cookout',
    description: 'Our monthly cookout brought together residents from both properties for food, music, and connections. The rooftop was alive with energy as new friendships formed.',
    author: 'Community Team',
    date: 'August 15, 2023'
  },
  {
    image: '/images/community-2.jpg',
    title: 'Skill Workshop: Digital Art',
    description: 'Resident Priya led an amazing workshop on digital illustration, sharing her expertise with 15 other tribe members. Everyone left with new skills and inspiration.',
    author: 'Events Team',
    date: 'July 28, 2023'
  },
  {
    image: '/images/community-3.jpg',
    title: 'Weekend Trek to Nandi Hills',
    description: 'Early morning adventure with 20 residents from Echo Yard and Arcade House. We caught the sunrise and enjoyed breakfast at the top - an unforgettable bonding experience.',
    author: 'Adventure Club',
    date: 'July 10, 2023'
  }
];

const upcomingEvents = [
  {
    title: 'Open Mic Night',
    date: 'May 27, 2023',
    time: '7:00 PM',
    location: 'Arcade House Rooftop',
    description: 'Share your talent, poetry, music, or just come watch!'
  },
  {
    title: 'Career Networking Mixer',
    date: 'June 2, 2023',
    time: '6:00 PM',
    location: 'Echo Yard Common Area',
    description: 'Connect with professionals and fellow students in tech and design.'
  },
  {
    title: 'Sunday Brunch Club',
    date: 'June 4, 2023',
    time: '11:00 AM',
    location: 'Arcade House Kitchen',
    description: 'Potluck-style brunch where everyone brings a dish to share.'
  }
];

const Community = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/texture.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6">Our Community</h1>
            <p className="text-xl text-gray-300">
              Life at Fraternity Stay is about more than just a place to sleep. It's about building connections,
              growing together, and creating memories that last beyond college.
            </p>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16">
            <h2 className="text-center mb-16">Community Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityPosts.map((post, index) => (
                <CommunityPost
                  key={index}
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  author={post.author}
                  date={post.date}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Our Community Values</h2>
            <p className="text-lg text-gray-600">
              These are the principles that guide life in our tribe.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={100} className="flex">
              <div className="mr-6">
                <div className="bg-amber/10 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Belonging</h3>
                <p className="text-gray-600">
                  Everyone deserves to feel at home. We create spaces and experiences that foster genuine connection
                  and make every resident feel like they're part of something bigger.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="flex">
              <div className="mr-6">
                <div className="bg-cobalt/10 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cobalt" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Growth</h3>
                <p className="text-gray-600">
                  College is about becoming who you're meant to be. We encourage personal and collective development
                  through skill-sharing, challenges, and supportive accountability.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} className="flex">
              <div className="mr-6">
                <div className="bg-amber/10 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20h2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We're stronger together. Our community thrives when residents share their skills, knowledge,
                  and resources to create something greater than the sum of its parts.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400} className="flex">
              <div className="mr-6">
                <div className="bg-cobalt/10 p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cobalt" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Joy</h3>
                <p className="text-gray-600">
                  The college years should be memorable. We create moments of delight, adventure, and
                  celebration that make everyday life extraordinary.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
              <div>
                <h2 className="mb-3">Upcoming Events</h2>
                <p className="text-gray-600">
                  Join us for these community gatherings and activities
                </p>
              </div>
              <a href="#" className="text-cobalt font-medium hover:underline mt-4 md:mt-0">
                View Full Calendar
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <AnimatedSection key={index} delay={index * 100} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <span className="bg-amber/10 text-amber px-3 py-1 rounded-full text-xs font-semibold">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <button className="text-cobalt font-medium hover:underline flex items-center">
                      RSVP
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Community Leaders */}
      <section className="section bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Meet Our Community Leaders</h2>
            <p className="text-lg text-gray-600">
              Our resident managers and community organizers who make Fraternity Stay feel like home.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={100} className="text-center">
              <div className="relative mb-6 mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img src="/images/team-1.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Meera Sharma</h3>
              <p className="text-cobalt font-medium mb-2">Echo Yard Manager</p>
              <p className="text-gray-600 text-sm">
                Former resident who knows every corner of the community. Event organizer extraordinaire.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200} className="text-center">
              <div className="relative mb-6 mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img src="/images/team-2.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Arjun Mathur</h3>
              <p className="text-cobalt font-medium mb-2">Arcade House Manager</p>
              <p className="text-gray-600 text-sm">
                Music producer and community builder who brings creative energy to everything he does.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="text-center">
              <div className="relative mb-6 mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img src="/images/team-3.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Zara Khan</h3>
              <p className="text-amber font-medium mb-2">Events Coordinator</p>
              <p className="text-gray-600 text-sm">
                Psychology student with a passion for creating meaningful community experiences.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400} className="text-center">
              <div className="relative mb-6 mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img src="/images/team-4.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Dhruv Patel</h3>
              <p className="text-amber font-medium mb-2">Skill Workshop Lead</p>
              <p className="text-gray-600 text-sm">
                Engineering student who organizes our skill-sharing sessions and peer learning groups.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="section bg-gradient-to-br from-cobalt to-cobalt-400 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Tribe?</h2>
              <p className="text-xl mb-8">
                Apply now to become part of our vibrant community of students who learn, grow,
                and thrive together.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/apply" className="fs-btn bg-white text-cobalt hover:bg-gray-100">
                  Apply Now
                </a>
                <a href="/properties" className="fs-btn border-2 border-white text-white hover:bg-white/10">
                  Tour a Property
                </a>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
                <p className="mb-6">
                  Get updates on community events, new properties, and Fraternity Stay news.
                </p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-amber text-white placeholder:text-white/50"
                  />
                  <button className="w-full fs-btn bg-amber text-charcoal-900 hover:bg-amber-400">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Community;
