
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal-900/95 backdrop-blur-md shadow-xl border-b border-charcoal-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/dd46d21d-ffac-469b-b4e6-33b2aafec554.png" 
              alt="Fraternity Stay" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-200 hover:text-amber transition-colors">Home</Link>
            <Link to="/properties" className="font-medium text-gray-200 hover:text-amber transition-colors">Properties</Link>
            <Link to="/community" className="font-medium text-gray-200 hover:text-cobalt transition-colors">Community</Link>
            <Link to="/about" className="font-medium text-gray-200 hover:text-amber transition-colors">About Us</Link>
            <Link to="/apply" className="fs-btn fs-btn-primary font-bold">Find My Tribe</Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-200 hover:text-amber transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-charcoal-900/98 backdrop-blur-md pt-24">
          <nav className="flex flex-col items-center justify-center space-y-8 h-full">
            <Link 
              to="/" 
              className="text-2xl font-medium text-gray-200 hover:text-amber transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="text-2xl font-medium text-gray-200 hover:text-amber transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/community" 
              className="text-2xl font-medium text-gray-200 hover:text-cobalt transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <Link 
              to="/about" 
              className="text-2xl font-medium text-gray-200 hover:text-amber transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/apply" 
              className="fs-btn fs-btn-primary text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Find My Tribe
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
