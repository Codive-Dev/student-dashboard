import React from 'react';
import { AssessmentCard } from './AssessmentCard';
import type { Assessment } from '../../types/assessment';

interface AssessmentListProps {
  assessments: Assessment[];
}

export function AssessmentList({ assessments }: AssessmentListProps) {
  const sortedAssessments = [...assessments].sort((a, b) => 
    new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Your Learning Quests</h2>
      
      <div className="grid grid-cols-1 gap-6">
        {sortedAssessments.map((assessment) => (
          <AssessmentCard
            key={assessment.id}
            assessment={assessment}
          />
        ))}
      </div>
    </div>
  );
}