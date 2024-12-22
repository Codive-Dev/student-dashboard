import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from '../../utils/cn.ts';
import {
  Home,
  BookOpen,
  Award,
  ClipboardCheck,
  Gift,
  Bot,
  HelpCircle,
  Video,
} from 'lucide-react';
import { ChatInterface } from '../chat/ChatInterface';

const navItems = [
  { icon: Home, label: 'Explore', path: '/' },
  { icon: BookOpen, label: 'Class Summary', path: '/class-summary' },
  { icon: Video, label: 'Recorded Classes', path: '/recorded-classes' },
  { icon: Award, label: 'Certificates', path: '/certificates' },
  { icon: ClipboardCheck, label: 'Assessments', path: '/assessments' },
  { icon: Gift, label: 'My Rewards', path: '/rewards' },
];

export function Sidebar() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  const handleChatOpen = () => setIsChatOpen(true);
  const handleChatClose = () => setIsChatOpen(false);
  const handleNeedHelp = () => navigate('/help');

  return (
    <>
      <div className="w-64 bg-blue-900 h-screen fixed left-0 top-0 text-white p-6 z-50">
        <div className="mb-4">
          <img className="h-14" src="/assets/images/logo.svg"/>
        </div>

        <nav className="space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center space-x-3 p-3 rounded-lg transition-colors',
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-100 hover:bg-blue-800'
                )
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-8 left-6 right-6 space-y-4">
          <button 
            onClick={handleChatOpen}
            className="w-full flex items-center space-x-2 bg-blue-700 p-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Bot className="w-5 h-5" />
            <span>Ask Mimi</span>
          </button>

          <button 
            onClick={handleNeedHelp}
            className="w-full flex items-center space-x-2 bg-blue-800/50 p-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            <span>Need Help?</span>
          </button>
        </div>
      </div>

      <ChatInterface isOpen={isChatOpen} onClose={handleChatClose} />
    </>
  );
}