import React from 'react';
import ArticleCard from './ArticleCard';
const CategoryHighlights = () => {
  const footballArticles = [{
    title: '',
    excerpt: '',
    category: 'Football',
    imageUrl: '',
    author: '',
    authorImageUrl: '',
    date: '',
    readTime: ''
  }];
  const trackFieldArticles = [{
    title: '',
    excerpt: '',
    category: 'Track & Field',
    imageUrl: '',
    author: '',
    authorImageUrl: '',
    date: '',
    readTime: ''
  }];
  const basketballArticles = [{
    title: '',
    excerpt: '',
    category: 'Basketball',
    imageUrl: '',
    author: '',
    authorImageUrl: '',
    date: '',
    readTime: ''
  }];
  return <div className="space-y-10 ">
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
        {footballArticles.map((article, index) => <ArticleCard key={index} {...article} featured={index === 0} />)}
      </div>
    </section>
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
        {trackFieldArticles.map((article, index) => <ArticleCard key={index} {...article} featured={index === 0} />)}
      </div>
    </section>
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
        {basketballArticles.map((article, index) => <ArticleCard key={index} {...article} featured={index === 0} />)}
      </div>
    </section>
  </div>;
};
export default CategoryHighlights;