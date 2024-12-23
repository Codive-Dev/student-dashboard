import { Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStudentStore } from '../../store/studentStore';

interface SettingsMenuProps {
  onClose: () => void;
}

export function SettingsMenu({ onClose }: SettingsMenuProps) {
  const navigate = useNavigate();
  const student = useStudentStore((state) => state.student);

  const handleProfileSettings = () => {
    onClose();
    navigate('/profile-settings');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg py-2">
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

      <button 
        className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-50 flex items-center gap-2"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </div>
  );
}