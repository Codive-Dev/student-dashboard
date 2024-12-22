import React from 'react';
import { Flame, Calendar } from 'lucide-react';
import { useRewardsStore } from '../../store/rewardsStore';

const WEEK_DAYS = [
  { id: 'mon', label: 'M' },
  { id: 'tue', label: 'T' },
  { id: 'wed', label: 'W' },
  { id: 'thu', label: 'T' },
  { id: 'fri', label: 'F' },
  { id: 'sat', label: 'S' },
  { id: 'sun', label: 'S' },
] as const;

export function DailyStreak() {
  const { streak } = useRewardsStore();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Flame className="w-6 h-6 text-orange-500" />
          <h2 className="text-lg font-bold text-purple-900">Daily Streak</h2>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-600" />
          <span className="font-bold text-purple-600">{streak} days</span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {WEEK_DAYS.map((day, index) => {
          const isCompleted = index < (streak % 7);
          return (
            <div
              key={day.id}
              className={`aspect-square rounded-lg flex items-center justify-center ${
                isCompleted
                  ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                  : 'bg-purple-50 text-purple-600'
              }`}
            >
              <span className="font-medium">{day.label}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm text-purple-600">Next Reward</span>
          <span className="text-sm font-medium text-purple-900">+50 Points</span>
        </div>
        <div className="mt-2 h-2 bg-purple-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            style={{ width: `${(streak % 7) * 14.28}%` }}
          />
        </div>
      </div>
    </div>
  );
}