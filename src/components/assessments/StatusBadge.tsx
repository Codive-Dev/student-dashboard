import React from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import type { StatusBadgeProps } from '../../types/assessment';

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = {
    Completed: {
      icon: CheckCircle,
      className: 'bg-green-100 text-green-800',
    },
    Missed: {
      icon: XCircle,
      className: 'bg-red-100 text-red-800',
    },
    Upcoming: {
      icon: Clock,
      className: 'bg-blue-100 text-blue-800',
    },
  };

  const { icon: Icon, className } = config[status];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      <Icon className="w-4 h-4 mr-1" />
      {status}
    </span>
  );
}