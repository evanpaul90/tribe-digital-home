
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import ImageGallery from '@/components/ImageGallery';

// Mock data for properties
const propertiesData = {
  'echo-yard': {
    name: 'Echo Yard',
    tagline: 'A vibrant girls-only community in the heart of Koramangala',
    description: 'Echo Yard is our flagship girls-only community designed for connection, creativity, and growth. With stylish rooms, creative common spaces, and a rooftop lounge perfect for sunset hangouts, Echo Yard offers the ideal balance of privacy and community.',
    location: 'Koramangala, Bangalore',
    priceRange: '₹14K - 18K / month',
    images: [
      '/images/echo-yard.jpg',
      '/images/echo-yard-room.jpg',
      '/images/echo-yard-common.jpg',
      '/images/echo-yard-rooftop.jpg',
    ],
    amenities: [
      'Fully furnished private & shared rooms',
      'High-speed WiFi',
      'Rooftop lounge',
      'Study spaces',
      'Community kitchen',
      '24/7 security',
      'Weekly cleaning',
      'Laundry facilities'
    ],
    features: ['Girls Only', 'Rooftop Lounge', 'Co-working', 'Community Kitchen'],
    roomTypes: [
      {
        name: 'Private Studio',
        price: '₹18,000/month',
        description: 'A fully furnished private room with attached bathroom and workspace.'
      },
      {
        name: 'Twin Share',
        price: '₹14,000/month',
        description: 'A comfortable shared room with two beds, shared bathroom, and common workspace.'
      }
    ],
    nearbyLandmarks: [
      'Forum Mall (5 min walk)',
      'Multiple cafes & restaurants (2-10 min walk)',
      'Parks & fitness centers (10 min walk)',
      'Bus stops (5 min walk)'
    ]
  },
  'arcade-house': {
    name: 'Arcade House',
    tagline: 'A creative co-ed community in vibrant Indiranagar',
    description: 'Arcade House is our co-ed flagship property featuring a game room, music studio, and community spaces designed for creativity and connection. From impromptu jam sessions to weekend events, Arcade House is where memories are made.',
    location: 'Indiranagar, Bangalore',
    priceRange: '₹15K - 20K / month',
    images: [
      '/images/arcade-house.jpg',
      '/images/arcade-house-room.jpg',
      '/images/arcade-house-common.jpg',
      '/images/arcade-house-studio.jpg',
    ],
    amenities: [
      'Fully furnished private & shared rooms',
      'High-speed WiFi',
      'Music & recording studio',
      'Game room',
      'Co-working space',
      'Community kitchen',
      '24/7 security',
      'Weekly cleaning'
    ],
    features: ['Co-Ed', 'Game Room', 'Music Studio', 'Co-working'],
    roomTypes: [
      {
        name: 'Private Room',
        price: '₹20,000/month',
        description: 'A fully furnished private room with attached bathroom and workspace.'
      },
      {
        name: 'Twin Share',
        price: '₹15,000/month',
        description: 'A comfortable shared room with two beds, shared bathroom, and common workspace.'
      },
      {
        name: 'Triple Share',
        price: '₹12,000/month',
        description: 'An affordable option with three beds in a larger room, shared bathroom.'
      }
    ],
    nearbyLandmarks: [
      'Indiranagar Metro Station (8 min walk)',
      '100 Feet Road shops & cafes (5 min walk)',
      'Multiple restaurants & pubs (5-10 min walk)',
      'Parks & fitness centers (10 min walk)'
    ]
  }
};

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = id ? propertiesData[id as keyof typeof propertiesData] : null;

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <p className="mb-6">Sorry, the property you're looking for doesn't exist.</p>
          <Link to="/properties" className="fs-btn fs-btn-primary">
            View All Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/texture.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-3">{property.name}</h1>
            <p className="text-xl text-gray-300 mb-4">
              {property.tagline}
            </p>
            <div className="flex justify-center items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{property.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <ImageGallery images={property.images} />
          </AnimatedSection>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-2">
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-6">About {property.name}</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {property.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {property.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-charcoal-700 px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">Room Types</h3>
                <div className="space-y-6">
                  {property.roomTypes.map((room, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-md">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h4 className="text-xl font-bold">{room.name}</h4>
                        <span className="text-amber font-bold">{room.price}</span>
                      </div>
                      <p className="text-gray-600">{room.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Location</h3>
                <div className="bg-gray-200 h-64 rounded-md mb-4">
                  {/* Map placeholder - in a real app, you would integrate Google Maps or similar */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-600">Map View of {property.name}</p>
                  </div>
                </div>
                <h4 className="font-bold mb-2">Nearby</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {property.nearbyLandmarks.map((landmark, index) => (
                    <li key={index}>{landmark}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} className="lg:col-span-1">
              <div className="sticky top-24 bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Interested in {property.name}?</h3>
                <p className="text-gray-600 mb-6">
                  Starting from {property.priceRange}
                </p>

                <div className="space-y-4 mb-8">
                  <Link to="/apply" className="w-full fs-btn fs-btn-primary block text-center">
                    Apply Now
                  </Link>
                  <button className="w-full fs-btn border-2 border-cobalt text-cobalt hover:bg-cobalt/5">
                    Schedule a Tour
                  </button>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h4 className="font-bold mb-3">Have questions?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a href="tel:+919876543210" className="hover:text-cobalt">
                        +91 98765 43210
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href="mailto:hello@fraternitystay.com" className="hover:text-cobalt">
                        hello@fraternitystay.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-6">What Residents Say</h2>
            <p className="text-lg text-gray-600">
              Hear from current and past residents of {property.name}.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={100} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V12.5C2.5 13.8807 3.61929 15 5 15H12.5C13.8807 15 15 13.8807 15 12.5V5C15 3.61929 13.8807 2.5 12.5 2.5Z" fill="#F5B919"/>
                  <path d="M27.5 2.5H20C18.6193 2.5 17.5 3.61929 17.5 5V12.5C17.5 13.8807 18.6193 15 20 15H27.5C28.8807 15 30 13.8807 30 12.5V5C30 3.61929 28.8807 2.5 27.5 2.5Z" fill="#F5B919"/>
                </svg>
              </div>
              <p className="text-lg mb-6 italic">
                "The community at {property.name} has transformed my college experience. I've made lifelong friends
                and found the perfect balance between social life and academics."
              </p>
              <div className="flex items-center">
                <img
                  src="/images/testimonial-1.jpg"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Priya K.</h4>
                  <p className="text-sm text-gray-500">Design Student, 2 Years at {property.name}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V12.5C2.5 13.8807 3.61929 15 5 15H12.5C13.8807 15 15 13.8807 15 12.5V5C15 3.61929 13.8807 2.5 12.5 2.5Z" fill="#468DCB"/>
                  <path d="M27.5 2.5H20C18.6193 2.5 17.5 3.61929 17.5 5V12.5C17.5 13.8807 18.6193 15 20 15H27.5C28.8807 15 30 13.8807 30 12.5V5C30 3.61929 28.8807 2.5 27.5 2.5Z" fill="#468DCB"/>
                </svg>
              </div>
              <p className="text-lg mb-6 italic">
                "The amenities are great, but it's the people that make this place special. The community managers
                organize events that really help everyone connect and grow together."
              </p>
              <div className="flex items-center">
                <img
                  src="/images/testimonial-2.jpg"
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Rahul S.</h4>
                  <p className="text-sm text-gray-500">Engineering Student, 1.5 Years at {property.name}</p>
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
            <h2 className="mb-6">Ready to Join {property.name}?</h2>
            <p className="text-xl mb-10">
              Take the first step towards joining our vibrant community of students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="fs-btn bg-charcoal-900 text-white hover:bg-charcoal-800">
                Apply Now
              </Link>
              <Link to="/properties" className="fs-btn border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900/10">
                View More Properties
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default PropertyDetail;
