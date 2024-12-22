import React from 'react';
import { Trophy, Star } from 'lucide-react';
import { useRewardsStore } from '../../store/rewardsStore';

export function RewardsProgress() {
  const { level, experience, nextLevelExp } = useRewardsStore();
  const progress = (experience / nextLevelExp) * 100;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <h2 className="text-xl font-bold text-purple-900">Level {level}</h2>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <span className="text-purple-600 font-medium">{experience}/{nextLevelExp} XP</span>
        </div>
      </div>

      <div className="relative h-4 bg-purple-100 rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-sparkle animate-shimmer"></div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="text-center p-3 bg-purple-50 rounded-lg"
          >
            <div className="text-2xl font-bold text-purple-600">{i + 1}</div>
            <div className="text-sm text-purple-500">Milestone {i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
}