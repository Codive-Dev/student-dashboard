import React from 'react';
import { MoreVertical } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';
import { ClassStatus } from './class-card/ClassStatus';
import { ClassInfo } from './class-card/ClassInfo';
import type { Class } from '../../types/schedule';

interface ClassCardProps {
  class_: Class;
}

export function ClassCard({ class_ }: ClassCardProps) {
  const { minutes, seconds, isExpired } = useCountdown(class_.startTime);
  const canJoin = minutes <= 5 && !isExpired;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-600">
      <div className="flex justify-between items-start">
        <div>
          <ClassStatus minutes={minutes} seconds={seconds} />
          <h2 className="text-xl font-semibold mt-2">{class_.title}</h2>
          <p className="text-gray-600">with {class_.teacher}</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreVertical className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <ClassInfo class_={class_} />

      <div className="mt-6">
        <button
          disabled={!canJoin}
          className={`w-full py-2 px-4 rounded-lg ${
            canJoin
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          } transition-colors`}
        >
          {canJoin ? 'Join Now' : 'Join Available in 5 Minutes'}
        </button>
      </div>
    </div>
  );
}