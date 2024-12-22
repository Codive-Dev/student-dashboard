import React from 'react';
import { Clock, Calendar, Award, ChevronRight, BookOpen, PenTool, FileText } from 'lucide-react';
import type { CompletedClass } from '../../types/class-summary';

interface CompletedClassCardProps {
  class_: CompletedClass;
  onViewDetails: (id: string) => void;
}

export function CompletedClassCard({ class_, onViewDetails }: CompletedClassCardProps) {
  const handleViewDocs = () => {
    if (class_.docsUrl) {
      window.open(class_.docsUrl, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{class_.title}</h3>
          <p className="text-gray-600">{class_.instructor}</p>
        </div>
        <div className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full">
          <Award className="w-4 h-4" />
          <span className="text-sm font-medium">{class_.score}%</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {class_.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{class_.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{class_.duration} mins</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <button
          onClick={() => window.location.href = `/assignments/${class_.id}`}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <PenTool className="w-4 h-4" />
          <span>Take Assignment</span>
        </button>
        <button
          onClick={() => window.location.href = `/quiz/${class_.id}`}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>Take Quiz</span>
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={handleViewDocs}
          className="w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <FileText className="w-4 h-4" />
          <span>View Details</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}