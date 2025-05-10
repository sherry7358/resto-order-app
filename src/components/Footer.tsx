
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-text text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Restaurantly</h3>
            <p className="mb-4">Experience exquisite dining in a warm and inviting atmosphere.</p>
            <p>© {new Date().getFullYear()} Restaurantly. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <p className="mb-2">Monday-Friday: 12pm - 10pm</p>
            <p className="mb-2">Saturday: 11am - 11pm</p>
            <p>Sunday: 11am - 9pm</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="mb-2">123 Restaurant St, Foodville</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@restaurantly.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
