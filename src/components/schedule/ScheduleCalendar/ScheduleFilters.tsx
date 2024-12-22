import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { ScheduleCategory, ScheduleStatus } from '../../../types/schedule';

interface ScheduleFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategories: ScheduleCategory[];
  onCategoryChange: (category: ScheduleCategory) => void;
  selectedStatuses: ScheduleStatus[];
  onStatusChange: (status: ScheduleStatus) => void;
}

export function ScheduleFilters({
  search,
  onSearchChange,
  selectedCategories,
  onCategoryChange,
  selectedStatuses,
  onStatusChange,
}: ScheduleFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search schedules..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            onChange={(e) => onCategoryChange(e.target.value as ScheduleCategory)}
            className="border border-gray-200 rounded-lg px-3 py-2"
          >
            <option value="">All Categories</option>
            <option value="class">Classes</option>
            <option value="homework">Homework</option>
            <option value="exam">Exams</option>
          </select>

          <select
            onChange={(e) => onStatusChange(e.target.value as ScheduleStatus)}
            className="border border-gray-200 rounded-lg px-3 py-2"
          >
            <option value="">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {(selectedCategories.length > 0 || selectedStatuses.length > 0) && (
        <div className="flex items-center gap-2 mt-4">
          {selectedCategories.map((category) => (
            <span
              key={category}
              className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {category}
              <button onClick={() => onCategoryChange(category)}>
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
          {selectedStatuses.map((status) => (
            <span
              key={status}
              className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {status}
              <button onClick={() => onStatusChange(status)}>
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}