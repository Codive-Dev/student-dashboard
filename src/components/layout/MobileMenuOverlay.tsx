import { cn } from '../../utils/cn';

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuOverlay({ isOpen, onClose }: MobileMenuOverlayProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur z-40 md:hidden"
      onClick={onClose}
      aria-hidden="true"
    />
  );
}
