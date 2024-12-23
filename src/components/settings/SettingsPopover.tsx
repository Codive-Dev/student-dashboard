import { useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { SettingsButton } from './SettingsButton';
import { SettingsMenu } from './SettingsMenu';
import { useViewportSize } from '../../hooks/useViewportSize';

interface SettingsPopoverProps {
  className?: string;
  onClose?: () => void;
}

export function SettingsPopover({ className, onClose }: SettingsPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const { width } = useViewportSize();
  const isTablet = width >= 768 && width < 1024;

  const handleClickOutside = (event: MouseEvent) => {
    if (!popoverRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <div className="relative" ref={popoverRef}>
      <SettingsButton
        onClick={() => setIsOpen(!isOpen)}
        className={className}
        isActive={isOpen}
      />

      {isOpen && (
        <div
          className={cn(
            'absolute z-50 w-64',
            'md:left-20 lg:left-0 lg:right-0',
            'right-0',
            isTablet ? 'md:bottom-0' : 'bottom-full mb-2',
            isTablet ? 'md:ml-2' : 'lg:mr-2'
          )}
        >
          <SettingsMenu onClose={handleClose} />
        </div>
      )}
    </div>
  );
}
