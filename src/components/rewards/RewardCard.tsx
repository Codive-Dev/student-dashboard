import React, { useState } from 'react';
import { Gift, Lock, Check } from 'lucide-react';
import { useRewardsStore } from '../../store/rewardsStore';
import type { Reward } from '../../types/rewards';

interface RewardCardProps {
  reward: Reward;
}

export function RewardCard({ reward }: RewardCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { points, claimReward } = useRewardsStore();
  const canClaim = points >= reward.cost && !reward.claimed;

  const handleClaim = async () => {
    if (!canClaim) return;
    
    claimReward(reward.id);
    
    // Dynamically import confetti only when needed
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div
      className={`bg-white rounded-xl p-6 border-2 transition-all duration-300 ${
        isHovered && canClaim ? 'border-purple-300 shadow-lg' : 'border-purple-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl ${
            reward.claimed
              ? 'bg-green-100'
              : canClaim
              ? 'bg-purple-100'
              : 'bg-gray-100'
          }`}>
            {reward.claimed ? (
              <Check className="w-6 h-6 text-green-600" />
            ) : canClaim ? (
              <Gift className="w-6 h-6 text-purple-600" />
            ) : (
              <Lock className="w-6 h-6 text-gray-400" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-purple-900">{reward.title}</h3>
            <p className="text-purple-600">{reward.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`font-bold ${
            canClaim ? 'text-purple-600' : 'text-gray-400'
          }`}>
            {reward.cost} Points
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${Math.min(100, (points / reward.cost) * 100)}%` }}
          />
        </div>
      </div>

      <button
        onClick={handleClaim}
        disabled={!canClaim}
        className={`mt-4 w-full py-2 rounded-lg font-medium transition-all duration-300 ${
          reward.claimed
            ? 'bg-green-100 text-green-600 cursor-default'
            : canClaim
            ? 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        {reward.claimed ? 'Claimed!' : canClaim ? 'Claim Reward' : 'Locked'}
      </button>
    </div>
  );
}