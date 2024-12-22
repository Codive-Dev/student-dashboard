import React from 'react';
import { TrendingUp } from 'lucide-react';

interface ProgressData {
  month: string;
  score: number;
  classes: number;
}

export function ProgressChart() {
  const progressData: ProgressData[] = [
    { month: 'Jan', score: 85, classes: 4 },
    { month: 'Feb', score: 88, classes: 5 },
    { month: 'Mar', score: 92, classes: 6 },
    { month: 'Apr', score: 90, classes: 4 },
    { month: 'May', score: 95, classes: 5 },
  ];

  const maxScore = Math.max(...progressData.map(d => d.score));

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Progress Overview</h2>
        </div>
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between gap-2">
          {progressData.map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col items-center">
                <div 
                  className="w-full bg-blue-600 rounded-t-lg transition-all duration-500"
                  style={{ 
                    height: `${(data.score / maxScore) * 100}%`,
                    opacity: 0.1 + (index / progressData.length) * 0.9
                  }}
                />
                <span className="text-sm font-medium text-gray-700 mt-2">{data.score}%</span>
                <span className="text-sm text-gray-500">{data.month}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}