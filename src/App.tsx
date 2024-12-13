import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

// Lazy load pages
const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const AuthPage = lazy(() => import('./pages/AuthPage').then(module => ({ default: module.AuthPage })));
const BrandDashboard = lazy(() => import('./pages/BrandDashboard').then(module => ({ default: module.BrandDashboard })));
const CreatorDashboard = lazy(() => import('./pages/CreatorDashboard').then(module => ({ default: module.CreatorDashboard })));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route
              path="/brand-dashboard"
              element={
                <ProtectedRoute userType="brand">
                  <BrandDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/creator-dashboard"
              element={
                <ProtectedRoute userType="creator">
                  <CreatorDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;