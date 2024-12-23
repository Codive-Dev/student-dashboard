import { MobileMenuButton } from './MobileMenuButton';

interface TopBarProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export function TopBar({ isMenuOpen, onMenuToggle }: TopBarProps) {
  return (
    <div className="py-2.5 fixed top-0 left-0 right-0 h-min bg-white border-b border-gray-200 flex items-center justify-between px-4 md:hidden z-40">
      <img
        src="/assets/images/logo-full.svg"
        alt="Codive"
        className="h-10 w-auto"
      />
      <MobileMenuButton isOpen={isMenuOpen} onClick={onMenuToggle} />
    </div>
  );
}
