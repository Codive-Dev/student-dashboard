import React from 'react';
import { Star, Trophy, Crown } from 'lucide-react';

export function CertificateHeader() {
  return (
    <div className="mb-8 relative">
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50" />
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-3">
          <div className="relative">
            <div className="absolute inset-0 animate-ping bg-yellow-200 rounded-full opacity-75" />
            <Trophy className="w-10 h-10 text-yellow-500 relative" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            My Achievement Gallery
          </h1>
        </div>
        <p className="text-gray-600 text-lg">Your amazing journey of learning and growth! 🚀</p>
        
        <div className="mt-6 p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <Crown className="w-12 h-12 text-white animate-bounce" />
            <div>
              <h2 className="text-white text-xl font-bold">Super Star Student! 🌟</h2>
              <p className="text-white/90">
                You're in the top 100 students worldwide! Keep shining bright!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}