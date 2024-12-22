import { useState } from 'react';
import type { RecordedClass } from '../types/recorded-class';

export function useRecordedClasses() {
  const [classes] = useState<RecordedClass[]>([
    {
      id: 1,
      title: 'Introduction to Python Programming',
      instructor: 'Dr. Smith',
      date: '2024-03-15',
      duration: 60,
      recordingUrl: 'https://zoom.us/rec/example1',
      downloadUrl: 'https://zoom.us/download/example1',
      topics: ['Variables', 'Data Types', 'Control Flow'],
      thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500'
    },
    {
      id: 2,
      title: 'Web Development Fundamentals',
      instructor: 'Ms. Johnson',
      date: '2024-03-14',
      duration: 45,
      recordingUrl: 'https://zoom.us/rec/example2',
      downloadUrl: 'https://zoom.us/download/example2',
      topics: ['HTML', 'CSS', 'JavaScript Basics'],
      thumbnail: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=500'
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms',
      instructor: 'Prof. Williams',
      date: '2024-03-13',
      duration: 90,
      recordingUrl: 'https://zoom.us/rec/example3',
      downloadUrl: 'https://zoom.us/download/example3',
      topics: ['Arrays', 'Linked Lists', 'Sorting'],
      thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500'
    }
  ]);

  return { classes };
}