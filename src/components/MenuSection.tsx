
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  viewAll?: boolean;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, viewAll = false }) => {
  const { addToCart } = useCart();
  
  return (
    <section className="py-12">
      <div className="container-custom">
        <h2 className="section-heading">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, viewAll ? items.length : 3).map((item) => (
            <div key={item.id} className="menu-card">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="bg-secondary text-text px-2 py-1 rounded font-medium">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="btn-primary w-full"
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {!viewAll && (
          <div className="mt-8 text-center">
            <Link to="/menu" className="btn-secondary">
              View Full Menu
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
