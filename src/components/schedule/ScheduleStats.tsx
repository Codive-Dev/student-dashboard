import React from 'react';
import { Calendar, Clock, Bell } from 'lucide-react';

export function ScheduleStats() {
  const stats = {
    todayClasses: 3,
    weeklyClasses: 12,
    upcomingReminders: 2,
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Schedule Overview</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Today's Classes</span>
          </div>
          <span className="font-semibold">{stats.todayClasses}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>Weekly Classes</span>
          </div>
          <span className="font-semibold">{stats.weeklyClasses}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-blue-600" />
            <span>Upcoming Reminders</span>
          </div>
          <span className="font-semibold">{stats.upcomingReminders}</span>
        </div>
      </div>
    </div>
  );
}