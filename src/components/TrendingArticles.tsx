import React from 'react';
const TrendingArticles = () => {
  const trendingArticles = [{
    title: 'Are Our Athletes In Trouble?',
    category: 'Track & Field',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/stadium876-c42bf.firebasestorage.app/o/article-images%2F1750490673810_trk.jpeg?alt=media&token=73a79f23-3fbc-49fd-a5e1-40c930e55dc8',
    date: 'June 21, 2024'
  }];
  return <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 text-gray-900 dark:text-yellow-400">
        Trending Now
      </h2>
      <div className="space-y-6">
        {trendingArticles.map((article, index) => <div key={index} className="flex gap-4">
            <div className="flex-none w-24 h-24">
              <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-grow">
              <span className="text-xs font-medium text-green-600 mb-1 block">
                {article.category}
              </span>
              <h3 className="font-bold text-base mb-1 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500">{article.date}</p>
            </div>
          </div>)}
      </div>
      <div className="mt-8 bg-white rounded-lg p-5">
        <h3 className="font-bold text-lg mb-3 text-gray-900">Newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest sports news delivered to your inbox weekly.
        </p>
        <form className="space-y-3">
          <input type="email" placeholder="Your email address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-md transition duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </div>;
};
export default TrendingArticles;