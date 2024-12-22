import React from 'react';
import { Award, Book, Target, Zap } from 'lucide-react';

const achievements = [
  {
    id: '1',
    title: 'Quick Learner',
    description: 'Complete 5 classes in a week',
    icon: Zap,
    progress: 3,
    total: 5,
  },
  {
    id: '2',
    title: 'Bookworm',
    description: 'Study for 10 hours total',
    icon: Book,
    progress: 7,
    total: 10,
  },
  {
    id: '3',
    title: 'Perfect Score',
    description: 'Get 100% in any assessment',
    icon: Target,
    progress: 90,
    total: 100,
  }
];

export function AchievementBadges() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-6 h-6 text-yellow-500" />
        <h2 className="text-lg font-bold text-purple-900">Achievements</h2>
      </div>

      <div className="space-y-4">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <achievement.icon className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-purple-900">{achievement.title}</h3>
                <p className="text-sm text-purple-600">{achievement.description}</p>
                <div className="mt-2">
                  <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                      style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                    />
                  </div>
                  <div className="mt-1 text-sm text-purple-600 text-right">
                    {achievement.progress}/{achievement.total}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}