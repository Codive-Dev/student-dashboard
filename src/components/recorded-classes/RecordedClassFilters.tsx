import React from 'react';
import { Search, Filter } from 'lucide-react';

export function RecordedClassFilters() {
  return (
    <div className="w-full lg:w-64 space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search classes..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Filters</h3>
          <Filter className="w-5 h-5 text-gray-500" />
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Date Range</label>
            <select className="mt-1 w-full border border-gray-200 rounded-lg p-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>All time</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <div className="mt-2 space-y-2">
              {['Programming', 'Math', 'Science', 'Language'].map((subject) => (
                <label key={subject} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-sm text-gray-600">{subject}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}