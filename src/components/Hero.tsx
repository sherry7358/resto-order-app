
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1721322800607-8c38375eef04)',
          filter: 'brightness(0.4)'
        }}
      ></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Exquisite Dining Experience</h1>
          <p className="text-lg md:text-xl mb-8">
            Indulge in our carefully crafted menu featuring the finest ingredients and flavors
          </p>
          <div className="space-x-4">
            <Link to="/book-table" className="btn-primary">
              Book a Table
            </Link>
            <Link to="/menu" className="btn-secondary">
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
