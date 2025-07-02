/**
 * FeaturedCarousel.tsx
 *
 * Displays a carousel of the 3 newest articles from Firestore.
 * Used on the homepage to highlight featured content.
 */

import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';

/**
 * FeaturedCarousel component
 * - Fetches and cycles through the newest articles
 * - Shows preview, image, and link to full article
 */
const FeaturedCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [featured, setFeatured] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      // Get the 3 newest articles
      const articles = snapshot.docs.slice(0, 3).map(doc => ({ id: doc.id, ...doc.data() }));
      setFeatured(articles);
      setLoading(false);
    };
    fetchFeatured();
  }, []);

  useEffect(() => {
    if (!featured.length) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length);
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [featured.length]);

  if (loading) return <div className="w-full bg-white py-8 text-center">Loading featured articles...</div>;

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
                <p className="text-gray-800 text-sm mb-2">{item.content ? item.content.split('\n').slice(0,2).join(' ').slice(0,120) + (item.content.length > 120 ? '...' : '') : ''}</p>
                <Link to={`/article/${item.id}`} className="text-green-700 font-semibold hover:underline">Read more</Link>
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
