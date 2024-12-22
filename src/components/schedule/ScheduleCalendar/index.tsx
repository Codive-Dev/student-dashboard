import { useState } from 'react';
import { format, addDays, startOfWeek, endOfWeek } from 'date-fns';
import { useScheduleStore } from '../../../hooks/useScheduleStore';
import { CalendarHeader } from './CalendarHeader';
import { ScheduleFilters } from './ScheduleFilters';
import { ScheduleItem } from './ScheduleItem';
import { Schedule } from '../../../types/schedule';

export function ScheduleCalendar() {
  const {
    view,
    selectedDate,
    schedules,
    filters,
    setView,
    setSelectedDate,
    setFilters,
  } = useScheduleStore();

  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);

  const handlePrevious = () => {
    const days = view === 'day' ? 1 : view === 'week' ? 7 : 30;
    setSelectedDate(addDays(selectedDate, -days));
  };

  const handleNext = () => {
    const days = view === 'day' ? 1 : view === 'week' ? 7 : 30;
    setSelectedDate(addDays(selectedDate, days));
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  const getTitle = () => {
    switch (view) {
      case 'day':
        return format(selectedDate, 'MMMM d, yyyy');
      case 'week':
        const start = startOfWeek(selectedDate);
        const end = endOfWeek(selectedDate);
        return `${format(start, 'MMM d')} - ${format(end, 'MMM d, yyyy')}`;
      case 'month':
        return format(selectedDate, 'MMMM yyyy');
    }
  };

  const filteredSchedules = schedules.filter((schedule) => {
    const matchesSearch = schedule.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(schedule.category);
    const matchesStatus =
      filters.statuses.length === 0 || filters.statuses.includes(schedule.status);
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <CalendarHeader
        view={view}
        onViewChange={setView}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onToday={handleToday}
        title={getTitle()}
      />

      <ScheduleFilters
        search={filters.search}
        onSearchChange={(search) => setFilters({ search })}
        selectedCategories={filters.categories}
        onCategoryChange={(category) =>
          setFilters({
            categories: filters.categories.includes(category)
              ? filters.categories.filter((c) => c !== category)
              : [...filters.categories, category],
          })
        }
        selectedStatuses={filters.statuses}
        onStatusChange={(status) =>
          setFilters({
            statuses: filters.statuses.includes(status)
              ? filters.statuses.filter((s) => s !== status)
              : [...filters.statuses, status],
          })
        }
      />

      <div className="grid gap-4">
        {filteredSchedules.map((schedule) => (
          <ScheduleItem
            key={schedule.id}
            schedule={schedule}
            onClick={setSelectedSchedule}
          />
        ))}
      </div>
    </div>
  );
}