import React from 'react';
import { Clock, Calendar, PlayCircle, Download } from 'lucide-react';
import { format } from 'date-fns';
import type { RecordedClass } from '../../types/recorded-class';

interface RecordedClassCardProps {
  class_: RecordedClass;
}

export function RecordedClassCard({ class_ }: RecordedClassCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{class_.title}</h3>
          <p className="text-gray-600 mt-1">with {class_.instructor}</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.open(class_.downloadUrl, '_blank')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Download Recording"
          >
            <Download className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-6 text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{format(new Date(class_.date), 'MMM dd, yyyy')}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{class_.duration} minutes</span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={() => window.open(class_.recordingUrl, '_blank')}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PlayCircle className="w-5 h-5" />
          <span>Watch Recording</span>
        </button>
      </div>

      {class_.topics && (
        <div className="mt-4 flex flex-wrap gap-2">
          {class_.topics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}