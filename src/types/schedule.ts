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