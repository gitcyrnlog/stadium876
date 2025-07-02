import React from 'react';

const Subscribe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-yellow-100 to-green-200 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="bg-white dark:bg-black p-10 rounded-lg shadow-md w-full max-w-md border border-green-200 dark:border-yellow-600 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-500 to-black dark:from-green-400 dark:via-yellow-400 dark:to-white">
          Feature Coming Soon
        </h1>
        <p className="text-lg text-gray-700 dark:text-yellow-200 text-center mt-2">
          The subscribe feature is on its way. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default Subscribe;
