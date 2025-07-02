import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { UserProfile } from '../types/UserProfile';
import InterestSelection from './InterestSelection';

const LoginSignup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showInterest, setShowInterest] = useState(false);
  const [newUser, setNewUser] = useState<{ uid: string; email: string } | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setNewUser({ uid: userCredential.user.uid, email });
        setShowInterest(true);
        return;
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (showInterest && newUser) {
    return <InterestSelection uid={newUser.uid} email={newUser.email} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-yellow-100 to-green-200 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="bg-white dark:bg-black p-8 rounded-lg shadow-md w-full max-w-md border border-green-200 dark:border-yellow-600">
        <h2 className="text-2xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-500 to-black dark:from-green-400 dark:via-yellow-400 dark:to-white">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        {error && <div className="mb-4 text-red-600 text-sm text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-green-300 dark:border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-500 dark:bg-black dark:text-yellow-400 bg-gradient-to-r from-green-50 via-yellow-50 to-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-green-300 dark:border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-500 dark:bg-black dark:text-yellow-400 bg-gradient-to-r from-green-50 via-yellow-50 to-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 via-yellow-500 to-black hover:from-green-700 hover:via-yellow-600 hover:to-black text-white font-bold py-2 px-4 rounded-md transition duration-300 shadow-lg"
            disabled={loading}
          >
            {loading ? (isLogin ? 'Logging in...' : 'Signing up...') : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-yellow-500 to-black font-bold hover:underline dark:from-green-400 dark:via-yellow-400 dark:to-white"
            onClick={() => setIsLogin(!isLogin)}
            disabled={loading}
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;