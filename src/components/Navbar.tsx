
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zinc-950/95 backdrop-blur-xl shadow-2xl border-b border-zinc-800' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/dd46d21d-ffac-469b-b4e6-33b2aafec554.png" 
              alt="Fraternity Stay - Where You Belong" 
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-semibold text-zinc-300 hover:text-amber-400 transition-colors duration-300 text-lg"
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="font-semibold text-zinc-300 hover:text-amber-400 transition-colors duration-300 text-lg"
            >
              Our Yards
            </Link>
            <Link 
              to="/community" 
              className="font-semibold text-zinc-300 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              The Tribe
            </Link>
            <Link 
              to="/about" 
              className="font-semibold text-zinc-300 hover:text-amber-400 transition-colors duration-300 text-lg"
            >
              Our Story
            </Link>
            <Link 
              to="/apply" 
              className="btn-primary text-base px-6 py-3"
            >
              Join The Tribe
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-zinc-300 hover:text-amber-400 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              to="/" 
              className="text-3xl font-bold text-zinc-300 hover:text-amber-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="text-3xl font-bold text-zinc-300 hover:text-amber-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Yards
            </Link>
            <Link 
              to="/community" 
              className="text-3xl font-bold text-zinc-300 hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              The Tribe
            </Link>
            <Link 
              to="/about" 
              className="text-3xl font-bold text-zinc-300 hover:text-amber-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </Link>
            <Link 
              to="/apply" 
              className="btn-primary text-xl px-8 py-4 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Join The Tribe
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
