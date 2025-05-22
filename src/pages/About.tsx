
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/texture.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6">Our Story</h1>
            <p className="text-xl text-gray-300">
              Fraternity Stay was born from a simple idea: student housing should be more than just four walls.
              It should be a foundation for growth, connection, and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img src="/images/mission.jpg" alt="Our Mission" className="rounded-lg shadow-lg" />
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're creating a new model of student housing that prioritizes community, growth, and belonging.
                A place where students can develop their full potential supported by others on the same journey.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our spaces are designed to spark connection, creativity, and collaboration. Where shared experiences
                form bonds that last well beyond college years.
              </p>
              <p className="text-lg text-gray-600">
                We believe that the right environment changes everything — and we're building that environment
                one yard at a time.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              These core principles guide everything we do at Fraternity Stay.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-amber/10 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in the power of belonging. Our spaces and programs are designed to foster genuine
                connection and the formation of lifelong bonds.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-cobalt/10 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cobalt" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Growth</h3>
              <p className="text-gray-600">
                College years should be transformative. We create environments where students
                are challenged and supported to become their best selves.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-amber/10 p-4 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We value genuine expression and diversity of thought. Our spaces are free from judgment,
                allowing students to discover and embrace their true selves.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Origin Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fraternity Stay began in 2021 when our founders, Vikram and Nisha, reflected on their own
                college housing experiences. They realized that despite attending top universities, their most
                valuable education happened in the spaces between classes — in late-night discussions, creative
                collaborations, and community support.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                But too often, student housing works against these connections. Sterile dorms, isolating apartments,
                or housing too far from campus can all inhibit the community that makes college transformative.
              </p>
              <p className="text-lg text-gray-600">
                We started with a single house in Koramangala, creating a space where 12 students could live, learn,
                and grow together. The results were remarkable — and Fraternity Stay was born.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="order-1 lg:order-2">
              <img src="/images/founders.jpg" alt="Our Founders" className="rounded-lg shadow-lg" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Our Team</h2>
            <p className="text-lg text-gray-600">
              Meet the passionate people behind Fraternity Stay.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={100} className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img src="/images/founder-1.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Vikram Mehta</h3>
              <p className="text-cobalt font-medium mb-2">Co-Founder & CEO</p>
              <p className="text-gray-600">
                Former community manager with a background in architecture and urban planning.
                Passionate about creating spaces that foster belonging.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200} className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img src="/images/founder-2.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Nisha Sharma</h3>
              <p className="text-cobalt font-medium mb-2">Co-Founder & COO</p>
              <p className="text-gray-600">
                Education specialist who believes in learning beyond the classroom.
                Expert in building developmental communities for young adults.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img src="/images/team-lead.jpg" alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Aryan Kapoor</h3>
              <p className="text-cobalt font-medium mb-2">Community Director</p>
              <p className="text-gray-600">
                Former resident advisor and event producer who oversees our community-building
                initiatives across all properties.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400} className="text-center mt-16">
            <Link to="/careers" className="inline-flex items-center font-medium text-cobalt hover:text-cobalt-600">
              Join our team <ArrowRight size={16} className="ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Our Impact</h2>
            <p className="text-lg text-gray-600">
              We're building more than just housing—we're creating the foundation for the next generation
              of leaders, creators, and changemakers.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100} className="text-center">
              <div className="text-5xl font-bold text-amber mb-4">200+</div>
              <h3 className="text-xl font-bold mb-2">Students Housed</h3>
              <p className="text-gray-600">
                Students who've called Fraternity Stay home since our founding in 2021.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200} className="text-center">
              <div className="text-5xl font-bold text-cobalt mb-4">40+</div>
              <h3 className="text-xl font-bold mb-2">Community Events</h3>
              <p className="text-gray-600">
                From skill workshops to dinners, adventures, and creative collaborations each year.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="text-center">
              <div className="text-5xl font-bold text-amber mb-4">85%</div>
              <h3 className="text-xl font-bold mb-2">Renewal Rate</h3>
              <p className="text-gray-600">
                Students who choose to stay with us for another term after their first experience.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h2 className="mb-6">Join Our Movement</h2>
            <p className="text-xl mb-10">
              Be part of the Fraternity Stay community and experience student life as it should be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="fs-btn fs-btn-primary">
                Apply Now
              </Link>
              <Link to="/community" className="fs-btn fs-btn-outline">
                See Community Life
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;
