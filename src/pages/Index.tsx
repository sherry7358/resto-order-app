
import React from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import TestimonialSection from '../components/TestimonialSection';
import { menuItems } from '../data/mockData';
import { Link } from 'react-router-dom';

const featuredItems = menuItems.slice(0, 3);

const Index = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Exquisite Cuisine</h3>
              <p>Experience the artistry of our award-winning chefs, creating dishes that delight all senses.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Perfect Atmosphere</h3>
              <p>Elegant ambiance designed for comfort, perfect for intimate dinners or special celebrations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-4">Impeccable Service</h3>
              <p>Our attentive staff ensures every detail is taken care of for an unforgettable dining experience.</p>
            </div>
          </div>
        </div>
      </section>
      
      <AboutSection />
      
      <section className="py-16 bg-accent/10">
        <div className="container-custom text-center">
          <h2 className="section-heading mx-auto">Reserve Your Table</h2>
          <p className="text-lg mb-8">
            Join us for an extraordinary dining experience. Reserve your table now to avoid disappointment.
          </p>
          <Link to="/book-table" className="btn-primary">
            Book a Table
          </Link>
        </div>
      </section>
      
      <MenuSection title="Featured Dishes" items={featuredItems} />
      
      <TestimonialSection />
    </div>
  );
};

export default Index;
