import React from 'react';
export interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  author: string;
  authorImageUrl: string;
  date: string;
  readTime: string;
  featured?: boolean;
}
const ArticleCard = ({
  title,
  excerpt,
  category,
  imageUrl,
  author,
  authorImageUrl,
  date,
  readTime,
  featured = false
}: ArticleCardProps) => {
  return (
    <article
      className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow relative group ${featured ? 'border-l-4 border-yellow-500' : ''}`}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-3 left-3 px-2 py-1 bg-green-600 text-white text-xs font-medium rounded">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center">
          <img src={authorImageUrl} alt={author} className="h-8 w-8 rounded-full mr-2" />
          <div className="text-sm">
            <p className="text-gray-900 font-medium">{author}</p>
            <p className="text-gray-500">
              {date} • {readTime} read
            </p>
          </div>
        </div>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white/90 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 z-10">
        <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
        <p className="text-sm mb-2 text-center">{excerpt}</p>
        <div className="text-xs text-gray-700 mb-1">By {author || 'Unknown'} • {date}</div>
      </div>
    </article>
  );
};
export default ArticleCard;