export interface Reward {
  id: string;
  title: string;
  description: string;
  cost: number;
  claimed: boolean;
  type: 'time' | 'choice' | 'badge' | 'mystery';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  completed: boolean;
  icon: string;
}