/**
 * types/Article.ts
 *
 * Shared TypeScript type for articles in Stadium876.
 */
import { Timestamp } from 'firebase/firestore';

export interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  videoLinks?: string[];
  createdAt: Timestamp | { seconds: number; nanoseconds: number };
  category?: string;
  author: string;
  authorImageUrl?: string;
  readTime?: string | number;
  clicks?: number;
}
