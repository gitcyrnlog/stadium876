// src/utils/user.ts
// Utility to get current user profile/interests from Firestore
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { UserProfile } from '../types/UserProfile';

export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (snap.exists()) return snap.data() as UserProfile;
  return null;
}
