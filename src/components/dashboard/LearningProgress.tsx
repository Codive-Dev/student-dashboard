import React from 'react';
import { Code2, Lock } from 'lucide-react';

// Define a type for the instructor object
type Instructor = {
  name: string;
  avatar: string;
};

// Define a type for the progress object
type Progress = {
  totalClasses: number;
  paidClasses: number;
  completedClasses: number;
  lostClasses: number;
  currentProgress: number;
  instructor: Instructor;
};

export function LearningProgress(): JSX.Element {
  const progress: Progress = {
    totalClasses: 240,
    paidClasses: 167,
    completedClasses: 164,
    lostClasses: 3,
    currentProgress: (167 / 240) * 100,
    instructor: {
      name: "Isha Chopra",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">My Learning Progress</h3>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Code2 className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium">Coding</h4>
            <div className="text-sm text-gray-600">1 on 1 online classes</div>
          </div>
          <Lock className="w-5 h-5 text-gray-400 ml-auto" />
        </div>

        <div className="mb-2">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full"
              style={{ width: `${progress.currentProgress}%` }}
            />
          </div>
        </div>

        <div className="text-sm text-gray-600">
          {progress.paidClasses}/{progress.totalClasses} Completed
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-semibold">{progress.totalClasses}</div>
          <div className="text-sm text-gray-600">Booked classes</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-semibold text-blue-600">{progress.paidClasses}</div>
          <div className="text-sm text-gray-600">Paid classes</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-semibold text-purple-600">{progress.completedClasses}</div>
          <div className="text-sm text-gray-600">Completed classes</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-semibold text-red-600">{progress.lostClasses}</div>
          <div className="text-sm text-gray-600">Lost classes*</div>
        </div>
      </div>

      <div className="text-xs text-gray-500 mb-4">
        *Due to 6 uninformed cancellations
      </div>

      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
        <img 
          src={progress.instructor.avatar} 
          alt={progress.instructor.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="font-medium">{progress.instructor.name}</div>
          <div className="text-sm text-gray-600">Your Instructor</div>
        </div>
      </div>
    </div>
  );
}