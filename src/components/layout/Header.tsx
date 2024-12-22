import React, { useState, useRef } from 'react';
import { Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStudentStore } from '../../store/studentStore';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const student = useStudentStore((state) => state.student);
  const navigate = useNavigate();

  const handleProfileSettings = () => {
    setIsMenuOpen(false);
    navigate('/profile-settings');
  };

  const menuDivRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuDivRef.current && !menuDivRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    } 
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside); 
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); 
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 p-4" style={{ zIndex: 60 }}>
      <div className="relative">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Settings className="w-6 h-6 text-gray-700" />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2" ref={menuDivRef}>
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="font-medium text-gray-900">{student?.name}</p>
              <p className="text-sm text-gray-500">{student?.grade}</p>
            </div>
            
            <button
              onClick={handleProfileSettings}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Profile Settings
            </button>
            
            <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-50 flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}