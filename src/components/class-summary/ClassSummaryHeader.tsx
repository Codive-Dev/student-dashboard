import React from 'react';
import { BookOpen, Star, TrendingUp } from 'lucide-react';

export function ClassSummaryHeader() {
  const stats = {
    totalClasses: 48,
    completedClasses: 36,
    averageScore: 92,
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
          <BookOpen className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Learning Journey</h1>
          <p className="text-gray-600">Track your progress and achievements</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h3 className="font-medium text-gray-600">Total Classes</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.totalClasses}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <h3 className="font-medium text-gray-600">Completed</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.completedClasses}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h3 className="font-medium text-gray-600">Average Score</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.averageScore}%</p>
        </div>
      </div>
    </div>
  );
}