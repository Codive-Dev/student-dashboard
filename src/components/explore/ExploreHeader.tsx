import { WorldTimePicker } from '../timezone/WorldTimePicker';

export function ExploreHeader() {
  const student = {
    name: "Alex"
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-blue-900">
          Hello, {student.name}! 👋
        </h1>
        <p className="text-gray-600 mt-2">Ready to learn something awesome today?</p>
      </div>
      <WorldTimePicker className={"mt-5"}/>
    </div>
  );
}