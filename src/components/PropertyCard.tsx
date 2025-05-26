
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  priceRange: string;
  tags: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  name,
  image,
  location,
  priceRange,
  tags
}) => {
  return (
    <div className="card-hover bg-charcoal-800 rounded-lg overflow-hidden shadow-xl border border-charcoal-700">
      <Link to={`/properties/${id}`}>
        <div className="relative h-60 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-amber text-charcoal-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {priceRange}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-white">{name}</h3>
          <div className="flex items-center text-gray-300 mb-4">
            <MapPin size={16} className="mr-2 text-cobalt" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-charcoal-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium border border-charcoal-600 hover:bg-charcoal-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
