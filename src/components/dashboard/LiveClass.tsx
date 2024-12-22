import { Video, Clock } from 'lucide-react';
import { useCountdown } from '../../hooks/useCountdown';

// Define the structure for the class_ prop
interface ClassProps {
  startTime: Date;
  title: string;
  teacher: string;
  duration: number;
  id?: number;
  subject?: string;
  students?: number;
}

// Define the props for the LiveClass component
interface LiveClassProps {
  class_: ClassProps;
}

export function LiveClass({ class_ }: LiveClassProps): JSX.Element {
  const startTimeDate = new Date(class_.startTime);
  const { minutes, seconds, isExpired } = useCountdown(startTimeDate);
  const canJoin = minutes <= 5 && !isExpired;
  const isLive = minutes === 0 && !isExpired;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-600">
      <div className="flex justify-between items-start">
        <div>
          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div 
                className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500' : 'bg-red-500'}`}
              />
              <div 
                className={`absolute inset-0 w-3 h-3 rounded-full ${isLive ? 'bg-green-500' : 'bg-red-500'} animate-ping`}
              />
            </div>
            <span className={`text-sm font-medium ${isLive ? 'text-green-600' : 'text-red-600'}`}>
              {isLive ? 'Live Now' : 'Starting Soon'}
            </span>
          </div>

          <h2 className="text-xl font-semibold mt-2">{class_.title}</h2>
          <p className="text-gray-600">with {class_.teacher}</p>
        </div>

        {/* Countdown Timer */}
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-500">until start</div>
        </div>
      </div>

      <div className="mt-4 flex items-center space-x-6 text-gray-600">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>{class_.duration} minutes</span>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <button
          disabled={!canJoin}
          className={`w-full py-2 px-4 rounded-lg flex items-center justify-center space-x-2 ${
            canJoin
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          } transition-colors`}
        >
          <Video className="w-5 h-5" />
          <span>{canJoin ? 'Join Now' : 'Join Class'}</span>
        </button>
        <p className="text-center text-sm text-gray-500">
          {canJoin 
            ? 'Class is starting soon! You can join now.'
            : 'Join button will be active 5 minutes before class starts'}
        </p>
      </div>
    </div>
  );
}
