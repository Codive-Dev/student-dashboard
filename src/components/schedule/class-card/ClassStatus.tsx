import React from 'react';

interface ClassStatusProps {
  minutes: number;
  seconds: number;
}

export function ClassStatus({ minutes, seconds }: ClassStatusProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Starting Soon
      </span>
      <span className="text-sm text-gray-500">
        {minutes}:{seconds.toString().padStart(2, '0')} until start
      </span>
    </div>
  );
}