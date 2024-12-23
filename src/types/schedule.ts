export type ViewType = 'day' | 'week' | 'month';

export type ScheduleCategory = 'class' | 'homework' | 'exam';
export type ScheduleStatus = 'upcoming' | 'completed' | 'cancelled';
export type SchedulePriority = 'low' | 'medium' | 'high';

export interface Schedule {
  id: string;
  title: string;
  startTime: Date;
  duration: number;
  category: ScheduleCategory;
  status: ScheduleStatus;
  priority: SchedulePriority;
  description?: string;
  location?: string;
}

export interface ScheduleState {
  view: ViewType;
  selectedDate: Date;
  schedules: Schedule[];
  filters: {
    search: string;
    categories: ScheduleCategory[];
    statuses: ScheduleStatus[];
  };
}

/**
 * Represents a scheduled class in the learning platform
 * @interface Class
 */
export interface Class {
  /** Unique identifier for the class */
  id: number;

  /** Title/name of the class */
  title: string;

  /** Name of the teacher conducting the class */
  teacher: string;

  /** Subject category of the class */
  subject: string;

  /** Scheduled start time of the class */
  startTime: Date;

  /** Duration of the class in minutes */
  duration: number;

  /** Optional number of enrolled students */
  students?: number;
}
