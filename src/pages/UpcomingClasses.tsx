import React, { useState } from 'react';
import { Calendar, Filter, Search, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import { useSchedule } from '../hooks/useSchedule';
import { ClassCard } from '../components/schedule/ClassCard';

interface FilterState {
  search: string;
  subject: string;
  instructor: string;
  timeRange: 'all' | 'today' | 'week' | 'month';
}

export function UpcomingClasses() {
  const { classes } = useSchedule();
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    subject: '',
    instructor: '',
    timeRange: 'all',
  });

  const subjects = Array.from(new Set(classes.map((c) => c.subject)));
  const instructors = Array.from(new Set(classes.map((c) => c.teacher)));

  const filteredClasses = classes.filter((class_) => {
    const matchesSearch =
      class_.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      class_.teacher.toLowerCase().includes(filters.search.toLowerCase());
    const matchesSubject =
      !filters.subject || class_.subject === filters.subject;
    const matchesInstructor =
      !filters.instructor || class_.teacher === filters.instructor;

    const now = new Date();
    const classDate = new Date(class_.startTime);
    let matchesTimeRange = true;

    switch (filters.timeRange) {
      case 'today':
        matchesTimeRange =
          format(classDate, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd');
        break;
      case 'week':
        const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        matchesTimeRange = classDate >= now && classDate <= weekFromNow;
        break;
      case 'month':
        const monthFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
        matchesTimeRange = classDate >= now && classDate <= monthFromNow;
        break;
    }

    return (
      matchesSearch && matchesSubject && matchesInstructor && matchesTimeRange
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-9 py-8">
      <div className="flex items-center justify-between mb-8 flex-wrap">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Upcoming Classes
            </h1>
            <p className="text-gray-600">
              View and manage your scheduled classes
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Calendar className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-medium">
            {format(new Date(), 'MMMM d, yyyy')}
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 flex-wrap">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search classes or instructors..."
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, search: e.target.value }))
              }
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="relative">
              <select
                value={filters.subject}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, subject: e.target.value }))
                }
                className="appearance-none pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Subjects</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            <div className="relative">
              <select
                value={filters.instructor}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    instructor: e.target.value,
                  }))
                }
                className="appearance-none pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Instructors</option>
                {instructors.map((instructor) => (
                  <option key={instructor} value={instructor}>
                    {instructor}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            <div className="relative">
              <select
                value={filters.timeRange}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    timeRange: e.target.value as FilterState['timeRange'],
                  }))
                }
                className="appearance-none pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Active filters */}
        {(filters.search ||
          filters.subject ||
          filters.instructor ||
          filters.timeRange !== 'all') && (
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.search && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Search: {filters.search}
              </span>
            )}
            {filters.subject && (
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Subject: {filters.subject}
              </span>
            )}
            {filters.instructor && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Instructor: {filters.instructor}
              </span>
            )}
            {filters.timeRange !== 'all' && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                Time: {filters.timeRange}
              </span>
            )}
            <button
              onClick={() =>
                setFilters({
                  search: '',
                  subject: '',
                  instructor: '',
                  timeRange: 'all',
                })
              }
              className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Class List */}
      <div className="grid gap-6">
        {filteredClasses.length > 0 ? (
          filteredClasses.map((class_) => (
            <ClassCard key={class_.id} class_={class_} />
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl">
            <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No classes found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters to find more classes
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
