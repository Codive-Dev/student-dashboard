export interface RecordedClass {
  id: number;
  title: string;
  instructor: string;
  date: string;
  duration: number;
  recordingUrl: string;
  downloadUrl: string;
  topics?: string[];
  thumbnail?: string;
}