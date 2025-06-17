import React from 'react';

const CustomLoader: React.FC = () => (
  <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70">
    <svg className="animate-spin w-16 h-16 text-yellow-500" viewBox="0 0 50 50">
      <circle
        className="opacity-20"
        cx="25"
        cy="25"
        r="20"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
      />
      <path
        className="opacity-80"
        fill="currentColor"
        d="M25 5a20 20 0 0 1 20 20h-5a15 15 0 0 0-15-15V5z"
      />
    </svg>
    <span className="ml-4 text-yellow-500 font-bold text-xl">Loading...</span>
  </div>
);

export default CustomLoader;
