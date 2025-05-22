
import React from 'react';

interface CommunityPostProps {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

const CommunityPost: React.FC<CommunityPostProps> = ({
  image,
  title,
  description,
  author,
  date
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
