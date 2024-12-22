import { Award, Target, TrendingUp } from 'lucide-react';
import type { Assessment } from '../../types/assessment';

interface AssessmentStatsProps {
  assessments: Assessment[];
}

export function AssessmentStats({ assessments }: AssessmentStatsProps) {
  const stats = {
    totalAssessments: assessments.length,
    completedAssessments: assessments.filter(a => a.status === 'Completed').length,
    averageScore: Math.round(
      assessments
        .filter(a => a.score !== undefined)
        .reduce((acc, curr) => acc + (curr.score || 0), 0) / 
      assessments.filter(a => a.score !== undefined).length
    ),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-medium text-gray-600">Total Quests</h3>
        </div>
        <p className="text-3xl font-bold text-gray-900">{stats.totalAssessments}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-green-100 rounded-lg">
            <Award className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="font-medium text-gray-600">Completed</h3>
        </div>
        <p className="text-3xl font-bold text-gray-900">{stats.completedAssessments}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="font-medium text-gray-600">Average Score</h3>
        </div>
        <p className="text-3xl font-bold text-gray-900">{stats.averageScore}%</p>
      </div>
    </div>
  );
}