
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/50bf79a9-d2b9-4b8a-9c86-d87e80c3588f.png" 
              alt="Fraternity Stay" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-gray-200 hover:text-amber transition-colors">Home</Link>
            <Link to="/properties" className="font-medium text-gray-200 hover:text-amber transition-colors">Properties</Link>
            <Link to="/community" className="font-medium text-gray-200 hover:text-amber transition-colors">Community</Link>
            <Link to="/about" className="font-medium text-gray-200 hover:text-amber transition-colors">About Us</Link>
            <Link to="/apply" className="fs-btn fs-btn-primary">Find My Tribe</Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-charcoal-900 pt-20">
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
              className="text-2xl font-medium text-gray-200 hover:text-amber transition-colors"
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
              className="fs-btn fs-btn-primary text-xl"
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
