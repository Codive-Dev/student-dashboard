import { WorldTimePicker } from '../timezone/WorldTimePicker';
import { useStudentStore } from '../../store/useStudentStore';

export function ExploreHeader() {
  const student = useStudentStore((state) => state.student);

  if (!student) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <img
            className="w-14 h-14 text-blue-600 rounded-xl"
            src={student.avatar}
            alt="Photo"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Hello, {student.name}! 👋
            </h1>
            <p className="text-gray-600">
              Ready to learn something awesome today?
            </p>
          </div>
        </div>
      </div>
      <WorldTimePicker className={'mt-5'} />
    </div>
  );
}
