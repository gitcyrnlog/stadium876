/**
 * utils/index.ts
 *
 * Shared utility functions for Stadium876.
 */

/**
 * Extracts a YouTube video ID from a URL.
 */
export function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)?)([\w-]{11})/);
  return match ? match[1] : null;
}

/**
 * Formats a Firestore Timestamp or seconds object to a JS Date.
 */
export function toDate(ts: any): Date {
  if (!ts) return new Date(0);
  if (typeof ts.toDate === 'function') return ts.toDate();
  if ('seconds' in ts) return new Date(ts.seconds * 1000);
  return new Date(0);
}
