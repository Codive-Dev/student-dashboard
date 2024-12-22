import React from 'react';
import { Clock, MapPin, Tag } from 'lucide-react';
import { Schedule, ScheduleStatus } from '../../../types/schedule';
import { formatTime } from '../../../utils/dateUtils';

interface ScheduleItemProps {
  schedule: Schedule;
  onClick: (schedule: Schedule) => void;
}

export function ScheduleItem({ schedule, onClick }: ScheduleItemProps) {
  const statusColors: Record<ScheduleStatus, string> = {
    upcoming: 'bg-blue-50 text-blue-600',
    completed: 'bg-green-50 text-green-600',
    cancelled: 'bg-red-50 text-red-600',
  };

  return (
    <div
      onClick={() => onClick(schedule)}
      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium text-gray-900">{schedule.title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            statusColors[schedule.status]
          }`}
        >
          {schedule.status}
        </span>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>
            {formatTime(schedule.startTime)} - {schedule.duration} mins
          </span>
        </div>
        {schedule.location && (
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{schedule.location}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4" />
          <span>{schedule.category}</span>
        </div>
      </div>

      {schedule.description && (
        <p className="mt-2 text-sm text-gray-600">{schedule.description}</p>
      )}
    </div>
  );
}