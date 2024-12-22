import React from 'react';
import { Sparkles } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

export function SkillsRadar() {
  const skills: Skill[] = [
    { name: 'Problem Solving', level: 85, color: 'from-blue-500' },
    { name: 'Creativity', level: 92, color: 'from-purple-500' },
    { name: 'Critical Thinking', level: 78, color: 'from-pink-500' },
    { name: 'Communication', level: 88, color: 'from-yellow-500' },
    { name: 'Teamwork', level: 90, color: 'from-green-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Skills Progress</h2>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm font-medium text-gray-900">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} to-transparent transition-all duration-500`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}