import React, { useEffect, useState } from 'react';
import { doc, onSnapshot, updateDoc, increment, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

type ViewCounterProps = {
  articleId: string;
};

const ViewCounter: React.FC<ViewCounterProps> = ({ articleId }) => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const ref = doc(db, 'articleViews', articleId);
    // Listen for real-time updates
    const unsub = onSnapshot(ref, (snap) => {
      setViews(snap.exists() ? snap.data().count : 0);
    });
    // Increment view count (debounced by sessionStorage)
    const key = `viewed_${articleId}`;
    if (!sessionStorage.getItem(key)) {
      setDoc(ref, { count: increment(1) }, { merge: true });
      sessionStorage.setItem(key, '1');
    }
    return () => unsub();
  }, [articleId]);

  return (
    <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
      {views} views
    </span>
  );
};

export default ViewCounter;
