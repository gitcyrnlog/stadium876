import React from 'react';
import { SearchIcon } from 'lucide-react';
export const Header = () => {
  return (
    <header className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center">
              {/* Branding or logo can go here if needed */}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
