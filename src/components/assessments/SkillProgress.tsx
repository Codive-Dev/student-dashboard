import { Sparkles, Star } from 'lucide-react';
import type { Assessment } from '../../types/assessment';

interface SkillProgressProps {
  assessments: Assessment[];
}

export function SkillProgress({ assessments }: SkillProgressProps) {
  const skills = {
    'Problem Solving': {
      level: 4,
      progress: 80,
      color: 'from-blue-500',
    },
    'Creativity': {
      level: 3,
      progress: 65,
      color: 'from-purple-500',
    },
    'Critical Thinking': {
      level: 5,
      progress: 95,
      color: 'from-pink-500',
    },
    'Communication': {
      level: 4,
      progress: 75,
      color: 'from-yellow-500',
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-6 h-6 text-yellow-500" />
        <h2 className="text-lg font-bold text-gray-900">Your Super Powers!</h2>
      </div>

      <div className="space-y-6">
        {Object.entries(skills).map(([skill, data]) => (
          <div key={skill} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700">{skill}</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < data.level
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${data.color} to-transparent transition-all duration-500`}
                style={{ width: `${data.progress}%` }}
              >
                <div className="w-full h-full opacity-25 bg-[linear-gradient(45deg,_rgba(255,255,255,0.15)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.15)_50%,_rgba(255,255,255,0.15)_75%,_transparent_75%,_transparent)] bg-stripes animate-progress" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-purple-50 rounded-lg">
        <h3 className="font-medium text-purple-900 mb-2">Next Achievement</h3>
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Star className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-purple-900">Master Problem Solver</p>
            <p className="text-xs text-purple-600">Complete 3 more assessments</p>
          </div>
        </div>
      </div>
    </div>
  );
}