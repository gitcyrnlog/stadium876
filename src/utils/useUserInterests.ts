import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { getUserProfile } from '../utils/user';

export function useUserInterests() {
  const [interests, setInterests] = useState<string[] | null>(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async user => {
      if (user) {
        const profile = await getUserProfile(user.uid);
        setInterests(profile?.interests || []);
      } else {
        setInterests([]);
      }
    });
    return () => unsub();
  }, []);
  return interests;
}
