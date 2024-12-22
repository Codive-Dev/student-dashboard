import React from 'react';
import { PlusCircle, Calendar, Ban, Pause, Users, HelpCircle, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuickActionsProps {
  onActionSelect: (action: string) => void;
  onClose?: () => void;
}

export function QuickActions({ onActionSelect, onClose }: QuickActionsProps) {
  const navigate = useNavigate();

  const handleAction = (actionId: string) => {
    switch (actionId) {
      case 'add-class':
        navigate('/schedule-class');
        onClose?.();
        break;
      case 'reschedule':
        navigate('/schedule');
        onClose?.();
        break;
      case 'cancel':
        // Show cancel confirmation modal
        if (window.confirm('Are you sure you want to cancel this class?')) {
          onActionSelect('cancel-class-confirmed');
        }
        break;
      case 'pause':
        // Show pause confirmation modal
        if (window.confirm('Are you sure you want to pause your classes?')) {
          onActionSelect('pause-classes-confirmed');
        }
        break;
      case 'teacher':
        onActionSelect('teacher-concerns');
        break;
      case 'dashboard':
        onActionSelect('dashboard-help');
        break;
      default:
        onActionSelect(actionId);
    }
  };

  const actions = [
    {
      id: 'add-class',
      label: 'Add Class',
      icon: PlusCircle,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 'reschedule',
      label: 'Reschedule Class',
      icon: Calendar,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: 'cancel',
      label: 'Cancel Class',
      icon: Ban,
      color: 'bg-red-100 text-red-600',
    },
    {
      id: 'pause',
      label: 'Pause Class',
      icon: Pause,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      id: 'teacher',
      label: 'Teacher Related Concerns',
      icon: Users,
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      id: 'dashboard',
      label: 'Dashboard Navigation Help',
      icon: LayoutDashboard,
      color: 'bg-blue-100 text-blue-600',
    },
  ];

  return (
    <div className="space-y-3">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={() => handleAction(action.id)}
          className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors text-left"
        >
          <div className={`p-2 rounded-lg ${action.color}`}>
            <action.icon className="w-5 h-5" />
          </div>
          <span className="font-medium text-gray-900">{action.label}</span>
        </button>
      ))}
    </div>
  );
}