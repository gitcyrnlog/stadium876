/**
 * App.tsx
 *
 * Main application entry point for Stadium876.
 * Handles global layout, theming, routing, and page transitions.
 * Integrates all major sections, navigation, and global UI components.
 */

import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryHighlights from './components/CategoryHighlights';
import TrendingArticles from './components/TrendingArticles';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';
import Football from './components/Football';
import Netball from './components/Netball';
import Basketball from './components/Basketball';
import TrackField from './components/TrackField';
import Gaming from './components/Gaming';
import FeaturedCarousel from './components/FeaturedCarousel';
import ScrollProgressBar from './components/ScrollProgressBar';
import CategorySwitcher from './components/CategorySwitcher';
import BackToTopButton from './components/BackToTopButton';
import CustomLoader from './components/CustomLoader';
import AdminDashboard from './components/admin/AdminDashboard';
import ArticleFeed from './components/ArticleFeed';
import FullArticle from './components/FullArticle';
import Subscribe from './components/Subscribe';

/**
 * App component
 * - Provides theme context
 * - Renders header, footer, and all main routes
 * - Handles animated page transitions
 * - Integrates global UI (scroll bar, back to top, etc.)
 */
export function App() {
  const location = useLocation();
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow w-full">
          <ScrollProgressBar />
          <Suspense fallback={<CustomLoader />}>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <Routes location={location}>
                  <Route path="/login" element={<LoginSignup />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/football" element={<Football />} />
                  <Route path="/netball" element={<Netball />} />
                  <Route path="/basketball" element={<Basketball />} />
                  <Route path="/track-field" element={<TrackField />} />
                  <Route path="/gaming" element={<Gaming />} />
                  <Route path="/article/:id" element={<FullArticle />} />
                  <Route path="/subscribe" element={<Subscribe />} />
                  <Route path="/" element={
                    <>
                      <HeroSection />
                      <FeaturedCarousel />
                      <CategorySwitcher />
                      <div className="container mx-auto px-4 lg:px-6 py-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                          <div className="lg:w-2/3">
                            <CategoryHighlights />
                          </div>
                          <div className="lg:w-1/3 flex flex-col gap-8">
                            {/* New section above Trending */}
                            <ArticleFeed showOnlyNew={true} />
                            <TrendingArticles />
                          </div>
                        </div>
                      </div>
                    </>
                  } />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </ThemeProvider>
  );
}