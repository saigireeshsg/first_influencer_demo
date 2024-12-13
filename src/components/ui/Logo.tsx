import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="flex items-center space-x-3 cursor-pointer"
      onClick={() => navigate('/')}
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <span className="text-white font-bold text-lg">ff</span>
      </div>
      
      <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        FirstInfluencer
      </span>
    </div>
  );
};