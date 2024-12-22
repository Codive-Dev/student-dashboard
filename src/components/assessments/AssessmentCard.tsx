import React from 'react';
import { format } from 'date-fns';
import { Code2 } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { ScoreDisplay } from './ScoreDisplay';
import type { AssessmentCardProps } from '../../types/assessment';

export function AssessmentCard({ assessment }: AssessmentCardProps) {
  const { title, subject, dueDate, status, score, feedback } = assessment;
  const isPastDue = new Date(dueDate) < new Date();

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Code2 className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{subject}</p>
          </div>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className="space-y-4">
        <div className="text-sm text-gray-600">
          Due Date - {format(new Date(dueDate), 'dd MMM yyyy')}
        </div>

        {score !== undefined && (
          <ScoreDisplay score={score} feedback={feedback} />
        )}

        {(status === 'Upcoming' || (status === 'Missed' && !isPastDue)) && (
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Take Assessment
          </button>
        )}
      </div>
    </div>
  );
}