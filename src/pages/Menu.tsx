
import React, { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import MenuSection from '../components/MenuSection';
import MenuFilter from '../components/MenuFilter';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { getMenuItems } from '../services/api';
import { menuItems as fallbackMenuItems } from '../data/mockData';
import { toast } from "sonner";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { data: menuItems, isLoading, isError } = useQuery({
    queryKey: ['menuItems'],
    queryFn: getMenuItems,
    onSettled: (data, error) => {
      if (error) {
        toast.error('Failed to load menu items. Using fallback data.');
      }
    }
  });
  
  const items = menuItems || fallbackMenuItems;
  
  const categories = useMemo(() => {
    return Array.from(new Set(items.map(item => item.category)));
  }, [items]);
  
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return items;
    return items.filter(item => item.category === activeCategory);
  }, [activeCategory, items]);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="py-12 min-h-screen bg-gradient-to-br from-background to-white/40">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="container-custom"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Our Menu
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg text-gray-600 mb-8"
        >
          Explore our carefully crafted dishes
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MenuFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2">Loading menu items...</span>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <MenuSection 
              title={activeCategory === 'all' ? 'All Items' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} 
              items={filteredItems}
              viewAll={true} 
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Menu;
