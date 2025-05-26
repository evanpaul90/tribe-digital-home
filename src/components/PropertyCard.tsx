
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
    <div className="card-hover bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <Link to={`/properties/${id}`}>
        <div className="relative h-60 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-amber text-charcoal-900 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            {priceRange}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-charcoal-900">{name}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-charcoal-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200"
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
