
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, Users, Home, MapPin, Star, ChevronDown } from 'lucide-react';

const Index = () => {
  return (
    <>
      {/* Hero Section - Bold & Authentic */}
      <section className="hero-section relative overflow-hidden">
        {/* Background texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f5b919" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
        
        {/* Floating elements for depth */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-6xl mx-auto">
            {/* Rally cry headline */}
            <h1 className="mb-8 animate-slide-up">
              Where you live changes
              <br />
              <span className="tribal-text text-glow">who you become.</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-zinc-400 max-w-4xl mx-auto animate-fade-in-delay font-medium">
              This isn't just housing. It's your tribe, your growth, your story. 
              <br className="hidden md:block" />
              Welcome to India's boldest student living community.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-delay">
              <Link to="/apply" className="btn-primary group">
                Start Your Fraternity Journey
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link to="/properties" className="btn-outline">
                Explore Our Yards
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-amber-400" size={32} />
        </div>
      </section>

      {/* The Vibe Section */}
      <section className="section bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-20">
            <h2 className="mb-8">
              More than a place to crash.
              <br />
              <span className="brand-gradient">A vibe to live by.</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              We get it. You're not looking for your parents' idea of a hostel. 
              You want freedom, community, and something that actually gets your generation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={200} className="card-premium p-8 text-center">
              <div className="w-16 h-16 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-amber-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Your Tribe Awaits</h3>
              <p className="text-zinc-400 text-lg">
                Late-night chai circles, spontaneous jam sessions, and inside jokes that become legends. 
                Find your people here.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="card-premium p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Home className="text-blue-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Spaces That Inspire</h3>
              <p className="text-zinc-400 text-lg">
                Think exposed brick meets neon lights. Study nooks, creative corners, 
                and rooms that actually look like you'd want to live in them.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400} className="card-premium p-8 text-center">
              <div className="w-16 h-16 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="text-amber-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Growth Mode On</h3>
              <p className="text-zinc-400 text-lg">
                Skill swaps, startup ideas over midnight snacks, and a community 
                that pushes you to level up every single day.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Yards */}
      <section className="section bg-gradient-to-br from-zinc-950 to-zinc-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="mb-6">Our Yards</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Each space has its own personality, its own vibe. 
              Find the one that matches your energy.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Echo Yard */}
            <AnimatedSection delay={200} className="group">
              <div className="card-premium overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="/lovable-uploads/50bf79a9-d2b9-4b8a-9c86-d87e80c3588f.png"
                    alt="Echo Yard - Bold community living"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <span className="bg-amber-400 text-zinc-900 px-4 py-2 rounded-full font-bold text-sm">
                      Girls Only
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold mb-2">Echo Yard</h3>
                    <div className="flex items-center text-zinc-300">
                      <MapPin size={18} className="mr-2 text-blue-400" />
                      <span>Koramangala, Bangalore</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {['Creative Hub', 'Rooftop Vibes', 'Study Pods'].map((tag) => (
                      <span key={tag} className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg text-sm font-medium border border-zinc-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                    Where bold ideas meet bolder friendships. Echo Yard isn't just girls-only housing — 
                    it's a creative sanctuary with rooftop hangouts and spaces designed for connection.
                  </p>
                  
                  <Link 
                    to="/properties/echo-yard" 
                    className="inline-flex items-center text-amber-400 font-semibold text-lg hover:text-amber-300 transition-colors group"
                  >
                    Explore Echo Yard 
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Arcade House */}
            <AnimatedSection delay={300} className="group">
              <div className="card-premium overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="/lovable-uploads/50bf79a9-d2b9-4b8a-9c86-d87e80c3588f.png"
                    alt="Arcade House - Co-ed creativity"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-6">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                      Co-Ed
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-bold mb-2">Arcade House</h3>
                    <div className="flex items-center text-zinc-300">
                      <MapPin size={18} className="mr-2 text-blue-400" />
                      <span>Indiranagar, Bangalore</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {['Music Studio', 'Game Zone', 'Co-working'].map((tag) => (
                      <span key={tag} className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg text-sm font-medium border border-zinc-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                    Our flagship space where music meets code and creativity has no limits. 
                    Game rooms, recording studios, and co-working spaces that fuel late-night breakthroughs.
                  </p>
                  
                  <Link 
                    to="/properties/arcade-house" 
                    className="inline-flex items-center text-blue-400 font-semibold text-lg hover:text-blue-300 transition-colors group"
                  >
                    Explore Arcade House 
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={500} className="text-center mt-16">
            <Link to="/properties" className="btn-secondary">
              See All Our Yards
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="section bg-zinc-950">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="mb-6">Real Stories, Real Growth</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what happens when you find your tribe.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={200} className="glass-card p-8">
              <div className="flex items-center mb-6">
                <img
                  src="/lovable-uploads/50bf79a9-d2b9-4b8a-9c86-d87e80c3588f.png"
                  alt="Ananya's story"
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-amber-400"
                />
                <div>
                  <h4 className="font-bold text-lg">Ananya S.</h4>
                  <p className="text-zinc-400">Echo Yard • Computer Science</p>
                </div>
              </div>
              <blockquote className="text-lg text-zinc-300 leading-relaxed italic">
                "I came here thinking I just needed a place to stay. I found my co-founder, 
                my best friends, and honestly? The confidence to build something I never 
                thought I could. This place doesn't just house you — it changes you."
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={300} className="glass-card p-8">
              <div className="flex items-center mb-6">
                <img
                  src="/lovable-uploads/50bf79a9-d2b9-4b8a-9c86-d87e80c3588f.png"
                  alt="Rohan's story"
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-400"
                />
                <div>
                  <h4 className="font-bold text-lg">Rohan K.</h4>
                  <p className="text-zinc-400">Arcade House • Music Production</p>
                </div>
              </div>
              <blockquote className="text-lg text-zinc-300 leading-relaxed italic">
                "The music studio here became my second home. I've collaborated with people 
                from completely different fields and it's opened doors I didn't even know existed. 
                Plus, where else can you record at 2 AM without complaints?"
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold and Direct */}
      <section className="section bg-gradient-to-br from-amber-400 to-amber-500 text-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="mb-8 text-zinc-900">Your Chapter Awaits</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto font-medium text-zinc-800">
              Stop scrolling. Start living. Your tribe is waiting, your story is calling, 
              and your best college years are one application away.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link to="/apply" className="bg-zinc-900 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 hover:bg-zinc-800 hover:scale-105 hover:shadow-2xl shadow-zinc-900/20">
                Begin My Stay
              </Link>
              <Link to="/community" className="border-3 border-zinc-900 text-zinc-900 px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:scale-105">
                Meet The Tribe
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
