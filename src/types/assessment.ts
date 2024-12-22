export interface Assessment {
  id: number;
  title: string;
  subject: 'Coding' | 'Design' | 'Math';
  dueDate: Date;
  status: 'Completed' | 'Missed' | 'Upcoming';
  score?: number;
  feedback?: string;
}

export interface AssessmentCardProps {
  assessment: Assessment;
}

export interface ScoreDisplayProps {
  score: number;
  feedback?: string;
}

export interface StatusBadgeProps {
  status: Assessment['status'];
}