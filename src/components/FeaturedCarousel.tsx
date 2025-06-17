import React, { useEffect, useRef, useState } from 'react';
// Placeholder for featured articles carousel
const FeaturedCarousel = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  // This will later fetch featured articles from Firestore or props
  const featured = [
    {
      title: 'Featured Article 1',
      imageUrl: '',
      summary: 'Summary for featured article 1',
    },
    {
      title: 'Featured Article 2',
      imageUrl: '',
      summary: 'Summary for featured article 2',
    },
    {
      title: 'Featured Article 3',
      imageUrl: '',
      summary: 'Summary for featured article 3',
    },
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length);
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [featured.length]);

  return (
    <div className="w-full bg-white py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-64 flex items-center justify-center">
          {featured.map((item, idx) => (
            <div
              key={idx}
              className={`absolute transition-all duration-700 w-full ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="min-w-[300px] bg-white rounded-lg shadow-md p-4 mx-auto">
                <div className="h-40 bg-gray-200 rounded mb-2 flex items-center justify-center">
                  {item.imageUrl ? <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover rounded" /> : <span className="text-gray-400">Image</span>}
                </div>
                <h3 className="font-bold text-lg mb-1 text-black">{item.title}</h3>
                <p className="text-gray-800 text-sm">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-2">
          {featured.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full bg-yellow-500 inline-block transition-opacity duration-300 ${current === idx ? 'opacity-100' : 'opacity-40'}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeaturedCarousel;
