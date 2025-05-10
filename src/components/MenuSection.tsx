
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  viewAll?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, viewAll = false }) => {
  const { addToCart } = useCart();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="py-12">
      <div className="container-custom">
        <h2 className="section-heading">{title}</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {items.slice(0, viewAll ? items.length : 3).map((menuItem) => (
            <motion.div 
              key={menuItem.id} 
              className="menu-card backdrop-blur-md bg-white/40 border border-white/20 hover:bg-white/50 transition-all duration-300"
              variants={item}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={menuItem.image}
                  alt={menuItem.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{menuItem.name}</h3>
                  <span className="bg-secondary/80 backdrop-blur-sm text-text px-2 py-1 rounded-full font-medium">
                    ${menuItem.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{menuItem.description}</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => addToCart(menuItem)}
                  className="btn-primary w-full shadow-md"
                >
                  Add to Order
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {!viewAll && (
          <div className="mt-8 text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/menu" className="btn-secondary inline-block">
                View Full Menu
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
