
import React from 'react';

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
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-full border border-gray-300 
            ${activeCategory === 'all' ? 'bg-primary text-white' : 'bg-white text-text hover:bg-gray-100'}`}
          onClick={() => onSelectCategory('all')}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border border-gray-300 capitalize
              ${activeCategory === category ? 'bg-primary text-white' : 'bg-white text-text hover:bg-gray-100'}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;
