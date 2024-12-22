import { useSchedule } from '../../hooks/useSchedule';
import { LiveClass } from './LiveClass.tsx';
import { Link } from 'react-router-dom';

export function LiveClasses(): JSX.Element | null {
  const { nextClass } = useSchedule();

  if (!nextClass) return null;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Live Classes</h2>
        <Link to="/upcoming-classes" className="text-blue-600 hover:text-blue-700">
          View Schedule
        </Link>
      </div>

      <LiveClass class_={nextClass} />
    </div>
  );
}