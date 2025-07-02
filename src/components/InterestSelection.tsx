import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { UserProfile } from '../types/UserProfile';

const INTEREST_OPTIONS = [
  { key: 'football', label: 'Football', icon: '⚽' },
  { key: 'netball', label: 'Netball', icon: '🏐' },
  { key: 'basketball', label: 'Basketball', icon: '🏀' },
  { key: 'gaming', label: 'Gaming', icon: '🎮' },
];

const FEATURE_OPTIONS = [
  { key: 'articles', label: 'Articles', icon: '📰' },
  { key: 'stats', label: 'Player/Team Stats', icon: '📊' },
  { key: 'predictions', label: 'Match Predictions', icon: '🔮' },
  { key: 'fantasy', label: 'Fantasy Football', icon: '🏆' },
  { key: 'liveScores', label: 'Live Scores', icon: '⚡' },
  { key: 'tournaments', label: 'Tournaments/Esports', icon: '🏅' },
  { key: 'notifications', label: 'Notifications', icon: '🔔' },
];

const InterestSelection: React.FC<{ uid: string; email: string }> = ({ uid, email }) => {
  const [interests, setInterests] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInterestChange = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleFeatureChange = (feature: string) => {
    setFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const userProfile: UserProfile = {
      uid,
      email,
      interests,
      features,
    };
    await setDoc(doc(db, 'users', uid), userProfile, { merge: true });
    setLoading(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-emerald-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-yellow-300 to-green-300 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-2xl border border-emerald-500/30 hover:border-yellow-400/50 transition-all duration-500">
        {/* Header with gradient text */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black mb-3 bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
            Personalize Your Experience
          </h2>
          <p className="text-gray-300 text-lg font-medium">Choose your interests to get a tailored experience</p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Sports Interest Section */}
          <div className="space-y-4">
            <label className="block text-emerald-300 font-bold text-xl mb-6 text-center">
              🏈 What sports ignite your passion?
            </label>
            <div className="grid grid-cols-2 gap-4">
              {INTEREST_OPTIONS.map(option => (
                <label 
                  key={option.key} 
                  className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    interests.includes(option.key) 
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg shadow-emerald-500/50 scale-105' 
                      : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-emerald-900 hover:to-green-900'
                  } p-6 rounded-xl border-2 ${
                    interests.includes(option.key) 
                      ? 'border-yellow-400 shadow-yellow-400/30' 
                      : 'border-gray-600 hover:border-emerald-500'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={interests.includes(option.key)}
                    onChange={() => handleInterestChange(option.key)}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-3xl">{option.icon}</span>
                    <span className={`font-bold text-lg ${
                      interests.includes(option.key) ? 'text-yellow-200' : 'text-gray-200 group-hover:text-emerald-200'
                    }`}>
                      {option.label}
                    </span>
                  </div>
                  {interests.includes(option.key) && (
                    <div className="mt-2 text-center">
                      <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <label className="block text-yellow-300 font-bold text-xl mb-6 text-center">
              ⭐ What features excite you most?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {FEATURE_OPTIONS.map(option => (
                <label 
                  key={option.key} 
                  className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    features.includes(option.key) 
                      ? 'bg-gradient-to-r from-yellow-600 to-amber-600 shadow-lg shadow-yellow-500/50 scale-105' 
                      : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-yellow-900 hover:to-amber-900'
                  } p-4 rounded-xl border-2 ${
                    features.includes(option.key) 
                      ? 'border-emerald-400 shadow-emerald-400/30' 
                      : 'border-gray-600 hover:border-yellow-500'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={features.includes(option.key)}
                    onChange={() => handleFeatureChange(option.key)}
                    className="sr-only"
                  />
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{option.icon}</span>
                    <span className={`font-semibold ${
                      features.includes(option.key) ? 'text-emerald-200' : 'text-gray-200 group-hover:text-yellow-200'
                    }`}>
                      {option.label}
                    </span>
                  </div>
                  {features.includes(option.key) && (
                    <div className="mt-1 text-right">
                      <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className={`w-full font-black py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg ${
                loading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-emerald-600 via-yellow-500 to-emerald-600 hover:from-emerald-500 hover:via-yellow-400 hover:to-emerald-500 shadow-lg hover:shadow-2xl'
              } text-black border-2 border-yellow-400 hover:border-emerald-400`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                  <span>Saving Your Preferences...</span>
                </div>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <span>🚀</span>
                  <span>Let's Get Started!</span>
                  <span>🚀</span>
                </span>
              )}
            </button>
          </div>
        </form>

        {/* Progress indicator */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Selected: {interests.length} sports, {features.length} features
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-emerald-400 to-yellow-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(((interests.length + features.length) / 11) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestSelection;