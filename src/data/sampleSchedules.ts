import { Schedule } from '../types/schedule';

export const sampleSchedules: Schedule[] = [
  {
    id: '1',
    title: 'Mathematics Class',
    startTime: new Date(Date.now() + 1000 * 60 * 60), // 1 hour from now
    duration: 60,
    category: 'class',
    status: 'upcoming',
    priority: 'high',
    location: 'Room 101',
    description: 'Advanced algebra and trigonometry',
  },
  {
    id: '2',
    title: 'Physics Homework',
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 2), // 2 hours from now
    duration: 45,
    category: 'homework',
    status: 'upcoming',
    priority: 'medium',
    description: 'Complete chapter 5 exercises',
  },
  {
    id: '3',
    title: 'Chemistry Test',
    startTime: new Date(Date.now() + 1000 * 60 * 60 * 3), // 3 hours from now
    duration: 90,
    category: 'exam',
    status: 'upcoming',
    priority: 'high',
    location: 'Lab 203',
    description: 'Mid-term examination',
  },
];