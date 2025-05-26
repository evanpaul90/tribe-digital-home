
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

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
    <div className="card-premium overflow-hidden group">
      <Link to={`/properties/${id}`} className="block">
        <div className="relative h-72 overflow-hidden">
          <img 
            src={image} 
            alt={`${name} - Student living space`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />
          
          {/* Price badge */}
          <div className="absolute top-6 right-6">
            <span className="bg-amber-400 text-zinc-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {priceRange}
            </span>
          </div>
          
          {/* Property info overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold mb-2 text-white">{name}</h3>
            <div className="flex items-center text-zinc-300 mb-4">
              <MapPin size={18} className="mr-2 text-blue-400" />
              <span className="text-sm font-medium">{location}</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-lg text-xs font-medium border border-zinc-700 hover:bg-zinc-700 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-zinc-400 text-sm font-medium">Explore this yard</span>
            <ArrowRight 
              size={20} 
              className="text-amber-400 group-hover:translate-x-2 transition-transform duration-300" 
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
