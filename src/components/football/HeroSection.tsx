import React from 'react';

export const HeroSection = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-[#1a1a1a] border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-4 text-white overflow-x-auto mb-6">
          {children}
        </div>
      </div>
    </div>
  );
};
