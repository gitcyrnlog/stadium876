import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const LoginSignup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/');
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
      <div className="bg-white dark:bg-black p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-yellow-400">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <div className="mb-4 text-red-600 text-sm text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-500 dark:bg-black dark:text-yellow-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-yellow-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-500 dark:bg-black dark:text-yellow-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-white dark:text-black font-medium py-2 px-4 rounded-md transition duration-300"
            disabled={loading}
          >
            {loading ? (isLogin ? 'Logging in...' : 'Signing up...') : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            className="text-sm text-green-600 hover:underline dark:text-yellow-400 dark:hover:text-yellow-500"
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
