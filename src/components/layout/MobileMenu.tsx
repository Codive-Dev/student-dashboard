import { NavLink } from 'react-router-dom';
import { Bot, HelpCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { navItems } from '../../config/navigation';
import { SettingsPopover } from '../settings/SettingsPopover';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onChatOpen: () => void;
}

export function MobileMenu({ isOpen, onClose, onChatOpen }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <nav className="h-full py-6 px-4">
        <div className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "flex items-center w-full h-11 px-4 rounded-lg transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                )
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3">{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 space-y-2">
          <SettingsPopover 
            className="flex items-center w-full h-11 px-4 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            onClose={onClose}
          />

          <button
            onClick={() => {
              onChatOpen();
              onClose();
            }}
            className="flex items-center w-full h-11 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Bot className="w-5 h-5 flex-shrink-0" />
            <span className="ml-3">Ask Mimi</span>
          </button>

          <NavLink
            to="/help"
            onClick={onClose}
            className="flex items-center w-full h-11 px-4 rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
          >
            <HelpCircle className="w-5 h-5 flex-shrink-0" />
            <span className="ml-3">Need Help?</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}