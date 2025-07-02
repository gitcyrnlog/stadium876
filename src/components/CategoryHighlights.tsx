/**
 * CategoryHighlights.tsx
 *
 * Displays the most popular (by clicks) or newest articles for each main category.
 * If no clicks, newest articles are featured by default.
 */
import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { db } from '../firebase';
import { collection, getDocs, query, Timestamp } from 'firebase/firestore';
import { Article } from '../types/Article';
import { useUserInterests } from '../utils/useUserInterests';
import { scoreArticles } from '../utils/feed';

// Helper to safely map Firestore article to ArticleCardProps
const toArticleCardProps = (article: Article) => ({
  id: article.id,
  title: article.title || '',
  excerpt: article.content ? article.content.split('\n').slice(0, 2).join(' ').slice(0, 120) + (article.content.length > 120 ? '...' : '') : '',
  category: article.category || '',
  imageUrl: article.imageUrl || '',
  author: article.author || 'Unknown',
  authorImageUrl: article.authorImageUrl || '',
  date: article.createdAt instanceof Timestamp ? article.createdAt.toDate().toLocaleDateString() : ('seconds' in article.createdAt ? new Date(article.createdAt.seconds * 1000).toLocaleDateString() : ''),
  readTime: article.readTime ? String(article.readTime) : '2',
});

const getSortedArticles = (articles: Article[], category: string) => {
  return articles
    .filter(a => a.category === category)
    .sort((a, b) => {
      const clicksA = typeof a.clicks === 'number' ? a.clicks : 0;
      const clicksB = typeof b.clicks === 'number' ? b.clicks : 0;
      if (clicksA !== clicksB) return clicksB - clicksA;
      // If clicks are equal, sort by createdAt (newest first)
      const tsA = a.createdAt instanceof Timestamp ? a.createdAt.toDate().getTime() : ('seconds' in a.createdAt ? a.createdAt.seconds * 1000 : 0);
      const tsB = b.createdAt instanceof Timestamp ? b.createdAt.toDate().getTime() : ('seconds' in b.createdAt ? b.createdAt.seconds * 1000 : 0);
      return tsB - tsA;
    });
};

const CategoryHighlights = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const userInterests = useUserInterests();

  useEffect(() => {
    const fetchArticles = async () => {
      const q = query(collection(db, 'articles'));
      const snapshot = await getDocs(q);
      setArticles(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Article)));
      setLoading(false);
    };
    fetchArticles();
  }, []);

  if (loading || userInterests === null) return <div className="text-center py-10">Loading highlights...</div>;

  // Personalized scoring
  const scoredArticles = scoreArticles(articles, userInterests);

  const footballArticles = getSortedArticles(scoredArticles, 'Football').slice(0, 2);
  const netballArticles = getSortedArticles(scoredArticles, 'Netball').slice(0, 2);
  const basketballArticles = getSortedArticles(scoredArticles, 'Basketball').slice(0, 2);
  const trackFieldArticles = getSortedArticles(scoredArticles, 'Track and Field').slice(0, 2);
  const gamingArticles = getSortedArticles(scoredArticles, 'Gaming').slice(0, 2);

  return (
    <div className="space-y-10 ">
      {footballArticles.length > 0 && (
        <section id="football">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-400">Football</h2>
            <a href="/football" className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center dark:text-yellow-400 dark:hover:text-yellow-500">
              View all
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {footballArticles.map((article, index) => <ArticleCard key={article.id} {...toArticleCardProps(article)} featured={index === 0} />)}
          </div>
        </section>
      )}
      {netballArticles.length > 0 && (
        <section id="netball">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-400">Netball</h2>
            <a href="/netball" className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center dark:text-yellow-400 dark:hover:text-yellow-500">
              View all
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {netballArticles.map((article, index) => <ArticleCard key={article.id} {...toArticleCardProps(article)} featured={index === 0} />)}
          </div>
        </section>
      )}
      {basketballArticles.length > 0 && (
        <section id="basketball">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-400">Basketball</h2>
            <a href="/basketball" className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center dark:text-yellow-400 dark:hover:text-yellow-500">
              View all
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {basketballArticles.map((article, index) => <ArticleCard key={article.id} {...toArticleCardProps(article)} featured={index === 0} />)}
          </div>
        </section>
      )}
      {trackFieldArticles.length > 0 && (
        <section id="track-field">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-400">Track & Field</h2>
            <a href="/track-field" className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center dark:text-yellow-400 dark:hover:text-yellow-500">
              View all
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trackFieldArticles.map((article, index) => <ArticleCard key={article.id} {...toArticleCardProps(article)} featured={index === 0} />)}
          </div>
        </section>
      )}
      {gamingArticles.length > 0 && (
        <section id="gaming">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-400">Gaming</h2>
            <a href="/gaming" className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center dark:text-yellow-400 dark:hover:text-yellow-500">
              View all
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gamingArticles.map((article, index) => <ArticleCard key={article.id} {...toArticleCardProps(article)} featured={index === 0} />)}
          </div>
        </section>
      )}
    </div>
  );
};
export default CategoryHighlights;