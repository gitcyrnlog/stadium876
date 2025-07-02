// src/api/track-click.ts
// API endpoint to increment article clicks in Firestore
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, updateDoc, increment } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const db = getFirestore();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { articleId } = req.query;
  if (!articleId || typeof articleId !== 'string') {
    return res.status(400).json({ error: 'Missing articleId' });
  }
  try {
    const ref = doc(db, 'articles', articleId);
    await updateDoc(ref, { clicks: increment(1) });
    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: 'Failed to increment clicks' });
  }
}
