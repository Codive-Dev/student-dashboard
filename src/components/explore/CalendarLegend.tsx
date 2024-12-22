import React from 'react';

export function CalendarLegend() {
  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full" />
          <span className="text-sm text-gray-600">Scheduled Class</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-200 rounded-full" />
          <span className="text-sm text-gray-600">Available</span>
        </div>
      </div>
    </div>
  );
}