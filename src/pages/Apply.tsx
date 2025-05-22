
import React, { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { useToast } from "@/hooks/use-toast";

const properties = [
  { id: 'echo-yard', name: 'Echo Yard', location: 'Koramangala, Bangalore' },
  { id: 'arcade-house', name: 'Arcade House', location: 'Indiranagar, Bangalore' }
];

const Apply = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    property: '',
    moveInDate: '',
    stayDuration: '',
    college: '',
    course: '',
    year: '',
    about: '',
    referral: '',
    interests: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    setFormData(prev => ({
      ...prev,
      interests: isChecked 
        ? [...prev.interests, value] 
        : prev.interests.filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: "We'll be in touch soon to schedule your interview.",
    });
    // In a real application, you would send the data to your backend here
    console.log("Form submitted:", formData);
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/texture.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6">Apply to Join Our Tribe</h1>
            <p className="text-xl text-gray-300">
              Finding your tribe is just a few steps away. Fill out the form below and we'll be in touch soon.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              {/* Progress Steps */}
              <div className="mb-16">
                <div className="flex justify-between items-center relative">
                  <div className="w-full absolute top-1/2 h-0.5 bg-gray-200"></div>
                  <div className={`relative z-10 flex flex-col items-center ${step >= 1 ? 'text-amber' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-amber text-white' : 'bg-gray-200'}`}>
                      1
                    </div>
                    <span className="mt-2">Property</span>
                  </div>
                  <div className={`relative z-10 flex flex-col items-center ${step >= 2 ? 'text-amber' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-amber text-white' : 'bg-gray-200'}`}>
                      2
                    </div>
                    <span className="mt-2">Personal Info</span>
                  </div>
                  <div className={`relative z-10 flex flex-col items-center ${step >= 3 ? 'text-amber' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-amber text-white' : 'bg-gray-200'}`}>
                      3
                    </div>
                    <span className="mt-2">About You</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Property Selection */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-8">Choose Your Property</h2>
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2 font-medium">Which property are you interested in?</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {properties.map(property => (
                          <div 
                            key={property.id} 
                            className={`p-6 border rounded-md cursor-pointer transition-all ${formData.property === property.id ? 'border-amber bg-amber/5' : 'border-gray-200 hover:border-amber/50'}`}
                            onClick={() => setFormData({ ...formData, property: property.id })}
                          >
                            <h3 className="font-bold text-lg">{property.name}</h3>
                            <p className="text-gray-600">{property.location}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="moveInDate" className="block text-gray-700 mb-2 font-medium">
                          When would you like to move in?
                        </label>
                        <input
                          type="date"
                          id="moveInDate"
                          name="moveInDate"
                          value={formData.moveInDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="stayDuration" className="block text-gray-700 mb-2 font-medium">
                          How long do you plan to stay?
                        </label>
                        <select
                          id="stayDuration"
                          name="stayDuration"
                          value={formData.stayDuration}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                          required
                        >
                          <option value="">Select duration</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="6-12 months">6-12 months</option>
                          <option value="1+ year">1+ year</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-10">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.property || !formData.moveInDate || !formData.stayDuration}
                        className="fs-btn fs-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Personal Information */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-8">Your Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 mb-2 font-medium">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 mb-2 font-medium">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="college" className="block text-gray-700 mb-2 font-medium">
                          College/University
                        </label>
                        <input
                          type="text"
                          id="college"
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="course" className="block text-gray-700 mb-2 font-medium">
                          Course/Major
                        </label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="year" className="block text-gray-700 mb-2 font-medium">
                        Year of Study
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                        required
                      >
                        <option value="">Select year</option>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Fourth Year">Fourth Year</option>
                        <option value="Graduate">Graduate</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-between mt-10">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="fs-btn border-2 border-gray-300 text-gray-600 hover:bg-gray-100"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.college || !formData.year}
                        className="fs-btn fs-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: About You */}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-8">Tell Us About Yourself</h2>
                    
                    <div className="mb-6">
                      <label htmlFor="about" className="block text-gray-700 mb-2 font-medium">
                        A little about yourself (hobbies, interests, what you're looking for in a community)
                      </label>
                      <textarea
                        id="about"
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-8">
                      <label className="block text-gray-700 mb-3 font-medium">
                        What interests you? (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {['Music', 'Art', 'Sports', 'Technology', 'Reading', 'Cooking', 'Film', 'Gaming', 'Fitness', 'Photography', 'Travel', 'Writing'].map(interest => (
                          <div key={interest} className="flex items-center">
                            <input
                              type="checkbox"
                              id={interest}
                              name="interests"
                              value={interest}
                              checked={formData.interests.includes(interest)}
                              onChange={handleInterestChange}
                              className="mr-2 h-4 w-4 text-amber"
                            />
                            <label htmlFor={interest}>{interest}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="referral" className="block text-gray-700 mb-2 font-medium">
                        How did you hear about us?
                      </label>
                      <select
                        id="referral"
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="Friend">Friend or Current Resident</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="College">College/University</option>
                        <option value="Event">Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mt-8 p-4 bg-gray-50 rounded-md border border-gray-200">
                      <p className="text-sm text-gray-600">
                        By submitting this application, you agree to our <a href="#" className="text-cobalt underline">Privacy Policy</a> and <a href="#" className="text-cobalt underline">Terms of Service</a>. We'll reach out to schedule an interview within 48 hours.
                      </p>
                    </div>
                    
                    <div className="flex justify-between mt-10">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="fs-btn border-2 border-gray-300 text-gray-600 hover:bg-gray-100"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="fs-btn fs-btn-primary"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Application Review</h3>
                    <p className="text-gray-600">
                      We'll review your application within 48 hours and reach out via email or phone.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Virtual or In-Person Interview</h3>
                    <p className="text-gray-600">
                      A casual conversation to get to know you better and answer any questions you have.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Property Tour</h3>
                    <p className="text-gray-600">
                      If possible, we'll arrange a tour of your chosen property so you can see it in person.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-amber text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Offer & Welcome!</h3>
                    <p className="text-gray-600">
                      If we're a mutual fit, we'll send an offer with all the details to secure your spot.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                We're here to help you find your perfect community. Reach out with any questions
                or schedule a call with our team.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-amber mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:hello@fraternitystay.com" className="hover:text-cobalt">
                    hello@fraternitystay.com
                  </a>
                </div>
                
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
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>
                    Echo Yard: 123 Koramangala, Bangalore<br />
                    Arcade House: 456 Indiranagar, Bangalore
                  </span>
                </div>
              </div>
              
              <button className="fs-btn border-2 border-cobalt text-cobalt hover:bg-cobalt/5 w-full">
                Schedule a Call
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apply;
