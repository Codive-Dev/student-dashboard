import { NavLink } from 'react-router-dom';
import { Bot, HelpCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { navItems } from '../../config/navigation';
import { SettingsPopover } from '../settings/SettingsPopover';
import { useViewportSize } from '../../hooks/useViewportSize';

interface SidebarProps {
  onChatOpen: () => void;
}

export function Sidebar({ onChatOpen }: SidebarProps) {
  const { width } = useViewportSize();
  const isTablet = width >= 768 && width < 1024;

  return (
    <div className="hidden md:flex scroll-auto fixed top-0 left-0 h-screen bg-blue-900 text-white flex-col transition-all duration-300 lg:w-64 md:w-20">
      <div className="p-5">
        <img
          className="lg:h-14 w-auto brightness-1000"
          src={
            isTablet
              ? '/assets/images/logo-small.svg'
              : '/assets/images/logo-full.svg'
          }
          alt="Logo"
        />
      </div>

      <nav className="flex-1 px-3">
        <div className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center w-full h-11 px-4 rounded-lg transition-colors',
                  'md:justify-center lg:justify-start',
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-100 hover:bg-blue-700'
                )
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3 hidden lg:block">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="p-4 space-y-3">
        <div className="pt-3 border-t border-blue-800">
          <SettingsPopover className="w-full flex items-center h-11 px-4 rounded-lg text-blue-100 hover:bg-blue-700 transition-colors md:justify-center lg:justify-start" />
        </div>

        <button
          onClick={onChatOpen}
          className="flex items-center w-full h-11 px-4 rounded-lg bg-blue-700 hover:bg-blue-600 transition-colors md:justify-center lg:justify-start"
        >
          <Bot className="w-5 h-5 flex-shrink-0" />
          <span className="ml-3 hidden lg:block">Ask Mimi</span>
        </button>

        <NavLink
          to="/help"
          className="flex items-center w-full h-11 px-4 rounded-lg bg-blue-800/50 hover:bg-blue-700 transition-colors md:justify-center lg:justify-start"
        >
          <HelpCircle className="w-5 h-5 flex-shrink-0" />
          <span className="ml-3 hidden lg:block">Need Help?</span>
        </NavLink>
      </div>
    </div>
  );
}
