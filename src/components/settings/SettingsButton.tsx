import { Settings } from 'lucide-react';
import { cn } from '../../utils/cn';

interface SettingsButtonProps {
  onClick: () => void;
  className?: string;
  isActive?: boolean;
}

export function SettingsButton({ onClick, className, isActive }: SettingsButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center",
        "md:p-2 md:hover:bg-blue-700 md:rounded-lg md:transition-colors",
        isActive && "md:bg-blue-700",
        className
      )}
      aria-label="Settings"
    >
      <Settings className="w-5 h-5" />
      <span className="ml-3 md:hidden lg:inline-block">Settings</span>
    </button>
  );
}