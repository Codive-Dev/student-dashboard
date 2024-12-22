import React from 'react';
import { Video, Calendar, Wifi, Book, Users, Settings } from 'lucide-react';
import { useHelpStore } from '../../store/helpStore';

export function HelpOptions() {
  const { setSelectedIssue } = useHelpStore();

  const helpOptions = [
    {
      id: 'class-joining',
      icon: Video,
      title: 'Class Joining Issues',
      description: 'Problems with joining online classes',
      subIssues: [
        'Unable to join class',
        'Audio/video not working',
        'Class link not received',
        'Browser compatibility issues'
      ]
    },
    {
      id: 'scheduling',
      icon: Calendar,
      title: 'Scheduling Problems',
      description: 'Issues with class scheduling or timing',
      subIssues: [
        'Class timing conflicts',
        'Unable to reschedule class',
        'Calendar sync issues',
        'Timezone problems'
      ]
    },
    {
      id: 'connectivity',
      icon: Wifi,
      title: 'Connection Problems',
      description: 'Internet or platform connectivity issues',
      subIssues: [
        'Frequent disconnections',
        'Poor video quality',
        'Audio lag issues',
        'Platform loading problems'
      ]
    },
    {
      id: 'content',
      icon: Book,
      title: 'Content Access',
      description: 'Problems accessing course materials',
      subIssues: [
        'Unable to access materials',
        'Missing content',
        'Download issues',
        'Viewing problems'
      ]
    },
    {
      id: 'teacher',
      icon: Users,
      title: 'Teacher Related',
      description: 'Issues regarding teachers or instruction',
      subIssues: [
        'Communication problems',
        'Teaching style concerns',
        'Language barriers',
        'Feedback issues'
      ]
    },
    {
      id: 'account',
      icon: Settings,
      title: 'Account Settings',
      description: 'Problems with your account or profile',
      subIssues: [
        'Login issues',
        'Profile update problems',
        'Payment concerns',
        'Account access'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {helpOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => setSelectedIssue(option)}
          className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-colors text-left"
        >
          <div className="p-2 bg-blue-50 rounded-lg">
            <option.icon className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{option.title}</h3>
            <p className="text-sm text-gray-600">{option.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}