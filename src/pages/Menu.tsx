
import React, { useState, useMemo } from 'react';
import { menuItems } from '../data/mockData';
import MenuSection from '../components/MenuSection';
import MenuFilter from '../components/MenuFilter';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = useMemo(() => {
    return Array.from(new Set(menuItems.map(item => item.category)));
  }, []);
  
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return menuItems;
    return menuItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Menu</h1>
        <p className="text-lg text-gray-600 mb-8">Explore our carefully crafted dishes</p>
        
        <MenuFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        
        <MenuSection 
          title={activeCategory === 'all' ? 'All Items' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} 
          items={filteredItems}
          viewAll={true} 
        />
      </div>
    </div>
  );
};

export default Menu;
