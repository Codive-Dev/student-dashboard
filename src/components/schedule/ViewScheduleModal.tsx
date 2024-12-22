import { X, Calendar, Clock, Users } from 'lucide-react';
import { useScheduleStore } from '../../hooks/useScheduleStore';
import { formatTime } from '../../utils/dateUtils';

interface ViewScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ViewScheduleModal({ isOpen, onClose }: ViewScheduleModalProps) {
  const { schedules } = useScheduleStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Class Schedule</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="space-y-4">
            {schedules.map((schedule) => (
              <div
                key={schedule.id}
                className="p-4 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium">{schedule.title}</h3>
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(schedule.startTime).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>
                          {formatTime(new Date(schedule.startTime))} ({schedule.duration} mins)
                        </span>
                      </div>
                      {schedule.location && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{schedule.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    schedule.status === 'upcoming'
                      ? 'bg-blue-50 text-blue-600'
                      : schedule.status === 'completed'
                      ? 'bg-green-50 text-green-600'
                      : 'bg-red-50 text-red-600'
                  }`}>
                    {schedule.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}