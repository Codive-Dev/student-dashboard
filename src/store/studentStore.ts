import { create } from 'zustand';

interface Student {
  id: string;
  name: string;
  grade: string;
  avatar: string;
  enrolledClasses: number;
  completedClasses: number;
  remainingClasses: number;
  credits: number;
  level: number;
  experience: number;
}

interface StudentStore {
  student: Student;
  setStudent: (student: Student) => void;
}

export const useStudentStore = create<StudentStore>((set) => ({
  student: {
    id: '1',
    name: 'Alex Parker',
    grade: '6th Grade',
    avatar: 'https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?w=400&h=400&fit=crop',
    enrolledClasses: 20,
    completedClasses: 8,
    remainingClasses: 12,
    credits: 240,
    level: 3,
    experience: 750,
  },
  setStudent: (student) => set({ student }),
}));
