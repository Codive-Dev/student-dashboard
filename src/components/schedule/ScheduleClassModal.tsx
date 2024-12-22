import { useState } from 'react';
import { X } from 'lucide-react';
import { LongTermScheduling } from './LongTermScheduling';
import { AddMoreClasses } from './AddMoreClasses';

interface ScheduleClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleClassModal({ isOpen, onClose }: ScheduleClassModalProps) {
  const [scheduleType, setScheduleType] = useState<'long-term' | 'add-more' | null>(null);

  const handleSubmit = (data: any) => {
    console.log('Schedule data:', data);
    // Handle the scheduling logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 backdrop-blur bg-black/50 z-50" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="bg-white rounded-xl w-full max-w-2xl pointer-events-auto max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold">Schedule Class</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {!scheduleType ? (
            <div className="p-6 space-y-4">
              <button
                onClick={() => setScheduleType('long-term')}
                className="w-full p-4 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-blue-200 transition-colors"
              >
                <h3 className="text-lg font-medium">Long Term Scheduling</h3>
                <p className="text-gray-600 text-sm mt-1">Schedule multiple classes over a period</p>
              </button>

              <button
                onClick={() => setScheduleType('add-more')}
                className="w-full p-4 text-left bg-white border-2 border-gray-200 rounded-xl hover:border-blue-200 transition-colors"
              >
                <h3 className="text-lg font-medium">Add More Classes</h3>
                <p className="text-gray-600 text-sm mt-1">Schedule additional individual classes</p>
              </button>
            </div>
          ) : scheduleType === 'long-term' ? (
            <LongTermScheduling onClose={onClose} onSubmit={handleSubmit} />
          ) : (
            <AddMoreClasses onClose={onClose} onSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </>
  );
}