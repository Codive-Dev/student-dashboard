import React from 'react';
import { Clock, Users } from 'lucide-react';
import type { Class } from '../../../types/schedule';

interface ClassInfoProps {
  class_: Class;
}

export function ClassInfo({ class_ }: ClassInfoProps) {
  return (
    <div className="mt-4 flex items-center space-x-6 text-gray-600">
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5" />
        <span>{class_.duration} minutes</span>
      </div>
      {class_.students && (
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <span>{class_.students} students</span>
        </div>
      )}
    </div>
  );
}