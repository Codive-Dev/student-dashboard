import { useStudentStore } from '../../store/useStudentStore';

export function ProfileCard() {
  const student = useStudentStore((state) => state.student);

  if (!student) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center space-x-4">
        <img
          src={student.avatar}
          alt={student.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{student.name}</h3>
          <p className="text-gray-600">{student.grade}</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Enrolled Classes</span>
          <span className="font-semibold">{student.enrolledClasses}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Completed</span>
          <span className="font-semibold">{student.completedClasses}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Remaining</span>
          <span className="font-semibold">{student.remainingClasses}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Credits</span>
          <span className="font-semibold">{student.credits}</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-blue-900 font-semibold">Level {student.level}</span>
            <span className="text-blue-600">{student.experience} XP</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2">
            <div
              className="bg-blue-600 rounded-full h-2"
              style={{ width: `${(student.experience % 1000) / 10}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}