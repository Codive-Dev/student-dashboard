import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function LongTermScheduling({ onClose, onSubmit }: Props) {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [classesPerWeek, setClassesPerWeek] = useState(3);
  const [classes, setClasses] = useState([
    { day: '', timeSlot: '' },
    { day: '', timeSlot: '' },
    { day: '', timeSlot: '' }
  ]);

  const courses = [
    'Python Programming',
    'Web Development',
    'Data Structures',
    'Mathematics'
  ];

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      course: selectedCourse,
      classesPerWeek,
      schedule: classes
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">Change your weekly schedule</h2>
      <p className="text-gray-600 mb-6">Update all upcoming classes from tomorrow onwards.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Course Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">Select Course</label>
          <div className="relative">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none pr-10"
              required
            >
              <option value="">Select</option>
              {courses.map(course => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Classes per Week */}
        <div>
          <label className="block text-sm font-medium mb-2">No. of classes per week</label>
          <div className="flex gap-2">
            {[2, 3, 4].map(num => (
              <button
                key={num}
                type="button"
                onClick={() => {
                  setClassesPerWeek(num);
                  setClasses(Array(num).fill({ day: '', timeSlot: '' }));
                }}
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  classesPerWeek === num
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-900'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Class Schedule */}
        {classes.map((_, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-medium">Class {index + 1}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Select Day</label>
                <div className="relative">
                  <select
                    value={classes[index].day}
                    onChange={(e) => {
                      const newClasses = [...classes];
                      newClasses[index] = { ...newClasses[index], day: e.target.value };
                      setClasses(newClasses);
                    }}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none pr-10"
                    required
                  >
                    <option value="">Select Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Select Time Slot</label>
                <div className="relative">
                  <select
                    value={classes[index].timeSlot}
                    onChange={(e) => {
                      const newClasses = [...classes];
                      newClasses[index] = { ...newClasses[index], timeSlot: e.target.value };
                      setClasses(newClasses);
                    }}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg appearance-none pr-10"
                    required
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Can't find your slot?
        </button>

        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}