import React from 'react';
import { useRewardsStore } from '../../store/rewardsStore';
import { RewardCard } from './RewardCard';

export function RewardsList() {
  const { rewards } = useRewardsStore();

  return (
    <div className="grid gap-6">
      {rewards.map((reward) => (
        <RewardCard key={reward.id} reward={reward} />
      ))}
    </div>
  );
}