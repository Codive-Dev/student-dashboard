import React, { useState } from 'react';
import { ClassSummaryHeader } from '../components/class-summary/ClassSummaryHeader';
import { CompletedClassCard } from '../components/class-summary/CompletedClassCard';
import { ProgressChart } from '../components/class-summary/ProgressChart';
import { SkillsRadar } from '../components/class-summary/SkillsRadar';
import type { CompletedClass } from '../types/class-summary';

export function ClassSummary() {
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);

  const completedClasses: CompletedClass[] = [
    {
      id: '1',
      title: 'Game Arena',
      date: '05 Oct 2024',
      duration: 45,
      score: 95,
      skills: ['Physics property', 'Lists', 'Conditional statements'],
      instructor: 'Sabhana Shaik',
      hasAssignment: true,
      hasQuiz: true,
      notes: 'Learned about sprites and basic animations!',
      docsUrl: 'https://docs.example.com/game-arena'
    },
    {
      id: '2',
      title: 'Grand Prix',
      date: '29 Sep 2024',
      duration: 60,
      score: 88,
      skills: ['Conditional statements', 'Collision detection', 'Object properties'],
      instructor: 'Sabhana Shaik',
      hasAssignment: true,
      hasQuiz: true,
      notes: 'Created a racing game with collision detection!',
      docsUrl: 'https://docs.example.com/grand-prix'
    },
    {
      id: '3',
      title: 'Freefall Blocks',
      date: '28 Sep 2024',
      duration: 60,
      score: 92,
      skills: ['3D modelling', 'Camera movements', 'Checkpoints'],
      instructor: 'Sabhana Shaik',
      hasAssignment: true,
      hasQuiz: true,
      notes: 'Built a 3D platformer game!',
      docsUrl: 'https://docs.example.com/freefall-blocks'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-9 py-8">
      <ClassSummaryHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid gap-6">
            {completedClasses.map((class_) => (
              <CompletedClassCard
                key={class_.id}
                class_={class_}
                onViewDetails={setSelectedClassId}
              />
            ))}
          </div>
          <ProgressChart />
        </div>

        <div className="space-y-6">
          <SkillsRadar />
        </div>
      </div>
    </div>
  );
}