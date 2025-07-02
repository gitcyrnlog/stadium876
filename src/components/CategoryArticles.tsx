/**
 * CategoryArticles.tsx
 *
 * Displays all articles for a given category from Firestore.
 * Used in each main section (Football, Netball, Basketball, Track & Field, Gaming).
 */

import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  videoLinks?: string[];
  createdAt: Timestamp | { seconds: number; nanoseconds: number };
  category?: string;
}

/**
 * CategoryArticles component
 * - Fetches and displays articles for a specific category
 * - Shows preview and link to full article
 */
const CategoryArticles: React.FC<{ category: string }> = ({ category }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const allArticles: Article[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Article));
      setArticles(allArticles.filter(article => article.category === category));
      setLoading(false);
    };
    fetchArticles();
  }, [category]);

  if (loading) return <div className="text-center py-4">Loading articles...</div>;
  if (articles.length === 0) return <div className="text-center py-4 text-gray-500">No articles yet for this section.</div>;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Articles</h2>
      <div className="flex flex-col gap-6">
        {articles.map(article => {
          let preview = article.content.split('\n').slice(0, 2).join(' ');
          if (preview.length > 120) preview = preview.slice(0, 120) + '...';
          return (
            <div key={article.id} className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
              {article.imageUrl && <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover rounded mb-2" />}
              <h3 className="text-lg font-bold text-gray-900">{article.title}</h3>
              <div className="text-gray-700 mb-2 whitespace-pre-line">{preview}</div>
              <Link to={`/article/${article.id}`} className="text-green-700 font-semibold hover:underline">Read more</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryArticles;
