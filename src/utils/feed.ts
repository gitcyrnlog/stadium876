// src/utils/feed.ts
// Personalized feed scoring and sorting
import { Article } from '../types/Article';

export function scoreArticles(articles: Article[], userInterests: string[]): Article[] {
  // Give 3x weight to articles matching user interests
  return articles
    .map(article => {
      const match = article.category && userInterests.includes(article.category.toLowerCase());
      return {
        ...article,
        _score: match ? 3 : 1,
      };
    })
    .sort((a, b) => b._score - a._score);
}
