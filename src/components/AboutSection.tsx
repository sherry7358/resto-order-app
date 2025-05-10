
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">Our Story</h2>
            <p className="mb-4 text-lg">
              Founded in 2010, Restaurantly has been serving exceptional cuisine and providing memorable dining experiences for over a decade.
            </p>
            <p className="mb-4">
              Our passionate team of chefs draws inspiration from global culinary traditions while emphasizing locally-sourced, seasonal ingredients to create dishes that delight the senses.
            </p>
            <p>
              Whether you're celebrating a special occasion or simply enjoying a night out, we strive to make every visit to Restaurantly remarkable.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Restaurant interior" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
