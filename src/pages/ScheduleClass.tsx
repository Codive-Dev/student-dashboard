import { useState } from 'react';
import { Calendar, Clock, Book } from 'lucide-react';

export function ScheduleClass() {
  const [formData, setFormData] = useState({
    course: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Class Scheduled Successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto px-9 py-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
          <Clock className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Schedule a Class</h1>
          <p className="text-gray-600">Choose your preferred time and course</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Book className="w-4 h-4" />
                Select Course
              </label>
              <select
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                required
              >
                <option value="">Choose a course</option>
                <option value="python">Python Programming</option>
                <option value="web">Web Development</option>
                <option value="math">Mathematics</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Calendar className="w-4 h-4" />
                Select Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Clock className="w-4 h-4" />
                Select Time
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Schedule Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
