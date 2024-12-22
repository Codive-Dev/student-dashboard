import { useState } from 'react';
import type { Assessment } from '../types/assessment';

export function useAssessments() {
  const [assessments] = useState<Assessment[]>([
    {
      id: 5,
      title: 'HTML and CSS',
      subject: 'Coding',
      dueDate: new Date('2024-12-08'),
      status: 'Completed',
      score: 30.0,
      feedback: "You didn't make it.",
    },
    {
      id: 4,
      title: 'HTML and CSS',
      subject: 'Coding',
      dueDate: new Date('2024-03-27'),
      status: 'Completed',
      score: 60.0,
      feedback: 'Congratulations, you have done well!',
    },
    {
      id: 3,
      title: 'Introduction to Python',
      subject: 'Coding',
      dueDate: new Date('2024-01-17'),
      status: 'Missed',
    },
    {
      id: 2,
      title: 'Microbit',
      subject: 'Coding',
      dueDate: new Date('2023-10-04'),
      status: 'Missed',
    },
    {
      id: 1,
      title: 'Design Thinking',
      subject: 'Design',
      dueDate: new Date('2023-05-04'),
      status: 'Completed',
      score: 71.4,
      feedback: 'Congratulations, you have done well!',
    },
  ]);

  return { assessments };
}