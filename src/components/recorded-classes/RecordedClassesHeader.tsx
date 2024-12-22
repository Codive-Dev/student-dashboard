import { Video } from 'lucide-react';

export function RecordedClassesHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-blue-100 rounded-xl">
          <Video className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Recorded Classes</h1>
          <p className="text-gray-600">Review your past classes and continue learning</p>
        </div>
      </div>
    </div>
  );
}