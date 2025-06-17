import React from 'react';

const categories = [
  { name: 'Football', id: 'football' },
  { name: 'Netball', id: 'netball' },
  { name: 'Basketball', id: 'basketball' },
  { name: 'Track & Field', id: 'track-field' },
  { name: 'Gaming', id: 'gaming' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const CategorySwitcher: React.FC = () => (
  <div className="w-full overflow-x-auto py-3 bg-white border-b border-gray-200 flex gap-3 px-4">
    {categories.map(cat => (
      <button
        key={cat.id}
        onClick={() => scrollToSection(cat.id)}
        className="px-4 py-2 rounded-full font-medium text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-yellow-500 hover:text-black transition"
      >
        {cat.name}
      </button>
    ))}
  </div>
);

export default CategorySwitcher;
