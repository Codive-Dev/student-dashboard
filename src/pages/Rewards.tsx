import React from 'react';
import { RewardsHeader } from '../components/rewards/RewardsHeader';
import { RewardsProgress } from '../components/rewards/RewardsProgress';
import { RewardsList } from '../components/rewards/RewardsList';
import { AchievementBadges } from '../components/rewards/AchievementBadges';
import { DailyStreak } from '../components/rewards/DailyStreak';
import { useRewardsStore } from '../store/rewardsStore';

export function Rewards() {
  const { points } = useRewardsStore();

  return (
    <div className="max-w-7xl mx-auto px-9 py-8 space-y-8">
      <RewardsHeader points={points} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <RewardsProgress />
          <RewardsList />
        </div>
        
        <div className="space-y-8">
          <DailyStreak />
          <AchievementBadges />
        </div>
      </div>
    </div>
  );
}