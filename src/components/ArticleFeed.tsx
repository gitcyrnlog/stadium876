/**
 * ArticleFeed.tsx
 *
 * Displays a feed of articles from Firestore.
 * - Shows a 'New' section for articles from the last 2 days
 * - Shows all other articles in the main feed
 * - Supports preview and full article navigation
 * - Used on homepage and can be filtered via props
 */

import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useUserInterests } from '../utils/useUserInterests';
import { scoreArticles } from '../utils/feed';
import { Article } from '../types/Article';

const getYouTubeId = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)?)([\w-]{11})/);
  return match ? match[1] : null;
};

interface ArticleFeedProps {
  showOnlyNew?: boolean;
}

/**
 * ArticleFeed component
 * - Fetches and displays articles from Firestore
 * - Optionally shows only new articles (showOnlyNew)
 */
const ArticleFeed: React.FC<ArticleFeedProps> = ({ showOnlyNew = false }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [newArticles, setNewArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const userInterests = useUserInterests();

  useEffect(() => {
    const fetchArticles = async () => {
      const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const allArticles: Article[] = snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title || '',
        content: doc.data().content || '',
        imageUrl: doc.data().imageUrl || '',
        videoLinks: doc.data().videoLinks || [],
        createdAt: doc.data().createdAt,
        category: doc.data().category || '',
        author: doc.data().author || 'Unknown',
        authorImageUrl: doc.data().authorImageUrl || '',
        readTime: doc.data().readTime || '2',
        clicks: doc.data().clicks || 0,
      }));
      const now = Date.now();
      const twoDaysMs = 2 * 24 * 60 * 60 * 1000;
      // Use the original mapped allArticles for both new and filtered articles
      setNewArticles(scoreArticles(
        allArticles.filter(article => {
          if (!article.createdAt) return false;
          let ts = 0;
          if (article.createdAt instanceof Timestamp) {
            ts = article.createdAt.toDate().getTime();
          } else if ('seconds' in article.createdAt) {
            ts = article.createdAt.seconds * 1000;
          }
          return now - ts <= twoDaysMs;
        }),
        userInterests || []
      ));
      setArticles(scoreArticles(
        allArticles.filter(a => {
          let ts = 0;
          if (a.createdAt instanceof Timestamp) {
            ts = a.createdAt.toDate().getTime();
          } else if ('seconds' in a.createdAt) {
            ts = a.createdAt.seconds * 1000;
          }
          return now - ts > twoDaysMs;
        }),
        userInterests || []
      ));
      setLoading(false);
    };
    fetchArticles();
  }, [userInterests]);

  if (loading) return <div className="text-center py-10">Loading articles...</div>;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-10">
      {newArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-700">New</h2>
          <div className="flex flex-col gap-6">
            {newArticles.map(article => {
              // Get preview: first 2 lines or 120 chars
              let preview = article.content.split('\n').slice(0, 2).join(' ');
              if (preview.length > 120) preview = preview.slice(0, 120) + '...';
              return (
                <div key={article.id} className="bg-yellow-50 rounded-xl shadow-lg overflow-hidden flex flex-col gap-4 p-6 border-l-4 border-yellow-500">
                  {article.imageUrl && (
                    <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-2" />
                  )}
                  <div className="flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h2>
                    <div className="text-gray-700 mb-4 whitespace-pre-line">{preview}</div>
                    <Link to={`/article/${article.id}`} className="text-green-700 font-semibold hover:underline mt-auto">Read more</Link>
                    {article.videoLinks && article.videoLinks.length > 0 && (
                      <div className="flex flex-wrap gap-4 mt-2">
                        {article.videoLinks.filter(Boolean).map((link: string, idx: number) => {
                          const ytId = getYouTubeId(link);
                          return ytId ? (
                            <a
                              key={idx}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative group w-48 h-28 block rounded-lg overflow-hidden shadow"
                            >
                              <img
                                src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                                alt="YouTube thumbnail"
                                className="w-full h-full object-cover group-hover:brightness-75 transition"
                              />
                              <span className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                                  <circle cx="12" cy="12" r="12" fill="black" fillOpacity="0.6" />
                                  <polygon points="10,8 16,12 10,16" fill="white" />
                                </svg>
                              </span>
                            </a>
                          ) : null;
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
      {!showOnlyNew && articles.map(article => (
        <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-6 p-6">
          {article.imageUrl && (
            <img src={article.imageUrl} alt={article.title} className="w-full md:w-64 h-48 object-cover rounded-lg" />
          )}
          <div className="flex-1 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h2>
            <div className="text-gray-700 mb-4 whitespace-pre-line">{article.content}</div>
            {article.videoLinks && article.videoLinks.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-2">
                {article.videoLinks.filter(Boolean).map((link: string, idx: number) => {
                  const ytId = getYouTubeId(link);
                  return ytId ? (
                    <a
                      key={idx}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group w-48 h-28 block rounded-lg overflow-hidden shadow"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                        alt="YouTube thumbnail"
                        className="w-full h-full object-cover group-hover:brightness-75 transition"
                      />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="12" fill="black" fillOpacity="0.6" />
                          <polygon points="10,8 16,12 10,16" fill="white" />
                        </svg>
                      </span>
                    </a>
                  ) : null;
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleFeed;
