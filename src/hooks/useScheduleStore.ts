import { create } from 'zustand';
import type { ScheduleState, Schedule, ViewType, ScheduleCategory, ScheduleStatus } from '../types/schedule';
import { sampleSchedules } from '../data/sampleSchedules';

interface ScheduleStore extends ScheduleState {
  setView: (view: ViewType) => void;
  setSelectedDate: (date: Date) => void;
  addSchedule: (schedule: Schedule) => void;
  updateSchedule: (id: string, schedule: Partial<Schedule>) => void;
  deleteSchedule: (id: string) => void;
  setFilters: (filters: Partial<ScheduleState['filters']>) => void;
}

export const useScheduleStore = create<ScheduleStore>((set) => ({
  view: 'week',
  selectedDate: new Date(),
  schedules: sampleSchedules,
  filters: {
    search: '',
    categories: [],
    statuses: [],
  },

  setView: (view) => set({ view }),
  setSelectedDate: (selectedDate) => set({ selectedDate }),
  
  addSchedule: (schedule) =>
    set((state) => ({
      schedules: [...state.schedules, schedule],
    })),
    
  updateSchedule: (id, updatedSchedule) =>
    set((state) => ({
      schedules: state.schedules.map((schedule) =>
        schedule.id === id ? { ...schedule, ...updatedSchedule } : schedule
      ),
    })),
    
  deleteSchedule: (id) =>
    set((state) => ({
      schedules: state.schedules.filter((schedule) => schedule.id !== id),
    })),
    
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),
}));