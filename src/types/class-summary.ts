export interface CompletedClass {
  id: string;
  title: string;
  date: string;
  duration: number;
  score: number;
  skills: string[];
  notes?: string;
  instructor: string;
  hasAssignment?: boolean;
  hasQuiz?: boolean;
  docsUrl?: string;
}