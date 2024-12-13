import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DoodleBackground from '../ui/DoodleBackground';

export function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth');
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <DoodleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">The Future of Creator Marketing</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Connect with Amazing{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                Creators
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find and collaborate with verified creators who align with your brand. 
              Launch campaigns that resonate with your audience and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-medium text-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-100 text-gray-900 font-medium text-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="Creator collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-violet-500/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`}
                      alt="Creator"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">1,000+ Creators</p>
                  <p className="text-gray-500">Ready to collaborate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}