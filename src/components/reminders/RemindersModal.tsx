import React from 'react';
import { X, Bell, Calendar, Clock } from 'lucide-react';
import { useScheduleStore } from '../../hooks/useScheduleStore';
import { formatTime } from '../../utils/dateUtils';

interface RemindersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RemindersModal({ isOpen, onClose }: RemindersModalProps) {
  const { schedules } = useScheduleStore();
  const upcomingSchedules = schedules.filter(s => s.status === 'upcoming');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold">Reminders</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {upcomingSchedules.length > 0 ? (
            <div className="space-y-4">
              {upcomingSchedules.map((schedule) => (
                <div
                  key={schedule.id}
                  className="p-4 bg-blue-50 rounded-lg flex items-start gap-4"
                >
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-900">{schedule.title}</h3>
                    <div className="mt-2 space-y-1 text-sm text-blue-700">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(schedule.startTime).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>
                          {formatTime(new Date(schedule.startTime))}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Set Reminder
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No upcoming reminders
            </div>
          )}
        </div>
      </div>
    </div>
  );
}