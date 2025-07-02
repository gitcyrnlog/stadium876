// src/utils/engagement.ts
// Utility to track reading time and engagement
export function trackReadingTime(articleId: string, ms: number) {
  if (!articleId) return;
  fetch(`/api/track-engagement?articleId=${articleId}&ms=${ms}`, { method: 'POST' });
}
