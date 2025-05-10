
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Menu, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Restaurantly
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-text hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/menu" className="text-text hover:text-primary transition-colors">
            Menu
          </Link>
          <Link to="/book-table" className="text-text hover:text-primary transition-colors">
            Reservations
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-text hover:text-primary transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
        
        <div className="md:hidden flex items-center">
          <Link to="/cart" className="relative mr-4">
            <ShoppingCart className="text-text" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text focus:outline-none"
          >
            <Menu />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/book-table" 
              className="text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservations
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
