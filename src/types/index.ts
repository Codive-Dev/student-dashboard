export interface Student {
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

export interface LiveClass {
  id: string;
  title: string;
  subject: string;
  startTime: Date;
  duration: number;
  zoomLink: string;
  instructor: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuedDate?: Date;
  isLocked: boolean;
  course: string;
  imageUrl: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  requiredPoints: number;
  imageUrl: string;
  isAchieved: boolean;
}