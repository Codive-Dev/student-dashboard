import { create } from 'zustand';
import type { Reward } from '../types/rewards';

interface RewardsStore {
  points: number;
  level: number;
  experience: number;
  nextLevelExp: number;
  streak: number;
  rewards: Reward[];
  addPoints: (amount: number) => void;
  claimReward: (rewardId: string) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
}

export const useRewardsStore = create<RewardsStore>((set) => ({
  points: 750,
  level: 3,
  experience: 750,
  nextLevelExp: 1000,
  streak: 5,
  rewards: [
    {
      id: '1',
      title: 'Extra Class Time',
      description: 'Get 15 minutes extra in your next class',
      cost: 500,
      claimed: false,
      type: 'time',
    },
    {
      id: '2',
      title: 'Choose Your Topic',
      description: 'Pick any topic for your next class',
      cost: 750,
      claimed: false,
      type: 'choice',
    },
    {
      id: '3',
      title: 'Special Badge',
      description: 'Unlock a unique profile badge',
      cost: 1000,
      claimed: false,
      type: 'badge',
    },
    {
      id: '4',
      title: 'Mystery Reward',
      description: 'Unlock a surprise reward',
      cost: 1500,
      claimed: false,
      type: 'mystery',
    },
  ],

  addPoints: (amount) => set((state) => {
    const newPoints = state.points + amount;
    const newExperience = state.experience + amount;
    
    if (newExperience >= state.nextLevelExp) {
      return {
        points: newPoints,
        level: state.level + 1,
        experience: newExperience - state.nextLevelExp,
        nextLevelExp: state.nextLevelExp * 1.5,
      };
    }
    
    return {
      points: newPoints,
      experience: newExperience,
    };
  }),

  claimReward: (rewardId) => set((state) => {
    const reward = state.rewards.find((r) => r.id === rewardId);
    if (!reward || reward.claimed || state.points < reward.cost) return state;

    return {
      points: state.points - reward.cost,
      rewards: state.rewards.map((r) =>
        r.id === rewardId ? { ...r, claimed: true } : r
      ),
    };
  }),

  incrementStreak: () => set((state) => ({
    streak: state.streak + 1,
  })),

  resetStreak: () => set({ streak: 0 }),
}));