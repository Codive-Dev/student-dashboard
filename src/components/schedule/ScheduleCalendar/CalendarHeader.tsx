import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ViewType } from '../../../types/schedule';

interface CalendarHeaderProps {
  view: ViewType;
  onViewChange: (view: ViewType) => void;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  title: string;
}

export function CalendarHeader({
  view,
  onViewChange,
  onPrevious,
  onNext,
  onToday,
  title,
}: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevious}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={onToday}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            Today
          </button>
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
        {(['day', 'week', 'month'] as ViewType[]).map((viewType) => (
          <button
            key={viewType}
            onClick={() => onViewChange(viewType)}
            className={`px-4 py-2 text-sm font-medium rounded-lg capitalize ${
              view === viewType
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {viewType}
          </button>
        ))}
      </div>
    </div>
  );
}