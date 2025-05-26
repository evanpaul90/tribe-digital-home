
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/50bf79a9-d2b9-4b8a-9c86-d87e80c3588f.png" 
                alt="Fraternity Stay" 
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">More than just a place to stay. A community to belong to.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-amber transition-colors">Home</Link></li>
              <li><Link to="/properties" className="text-gray-400 hover:text-amber transition-colors">Properties</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-amber transition-colors">Community</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber transition-colors">About Us</Link></li>
              <li><Link to="/apply" className="text-gray-400 hover:text-amber transition-colors">Apply Now</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Properties</h4>
            <ul className="space-y-2">
              <li><Link to="/properties" className="text-gray-400 hover:text-amber transition-colors">Echo Yard</Link></li>
              <li><Link to="/properties" className="text-gray-400 hover:text-amber transition-colors">Arcade House</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber transition-colors">Discord</a></li>
              <li><a href="mailto:community@fraternitystay.com" className="text-gray-400 hover:text-amber transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Fraternity Stay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</Link>
            <Link to="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms</Link>
            <Link to="#" className="text-gray-500 hover:text-gray-300 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
