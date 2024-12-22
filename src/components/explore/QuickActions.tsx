import React from 'react';
import { Plus, Calendar, Bell } from 'lucide-react';

interface QuickActionsProps {
  setIsScheduleModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setIsViewScheduleModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setIsRemindersModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function QuickActions({setIsScheduleModalOpen, setIsViewScheduleModalOpen, setIsRemindersModalOpen}: QuickActionsProps) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ActionButton
          icon={Plus}
          label="Schedule Class"
          onClick={() => setIsScheduleModalOpen(true)}
          variant="primary"
        />
        <ActionButton
          icon={Calendar}
          label="View Schedule"
          onClick={() => setIsViewScheduleModalOpen(true)}
        />
        <ActionButton
          icon={Bell}
          label="Reminders"
          onClick={() => setIsRemindersModalOpen(true)}
          badge={2}
        />
      </div>
    </>
  );
}

interface ActionButtonProps {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  badge?: number;
}

function ActionButton({ icon: Icon, label, onClick, variant = 'secondary', badge }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center justify-center gap-2 p-4 rounded-xl
        ${variant === 'primary' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-white text-gray-800 hover:bg-gray-50'
        }
        transition-colors shadow-sm
      `}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
      {badge && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}