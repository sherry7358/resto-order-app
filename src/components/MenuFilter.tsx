
import React from 'react';
import { motion } from 'framer-motion';

interface MenuFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const MenuFilter: React.FC<MenuFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-8 backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-lg border border-white/20">
      <h3 className="text-lg font-medium mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`px-4 py-2 rounded-full border backdrop-blur-sm shadow-sm
            ${activeCategory === 'all' ? 'bg-primary text-white border-primary/50' : 'bg-white/50 text-text hover:bg-white/70 border-white/40'}`}
          onClick={() => onSelectCategory('all')}
        >
          All
        </motion.button>
        
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`px-4 py-2 rounded-full border backdrop-blur-sm shadow-sm capitalize
              ${activeCategory === category ? 'bg-primary text-white border-primary/50' : 'bg-white/50 text-text hover:bg-white/70 border-white/40'}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;
