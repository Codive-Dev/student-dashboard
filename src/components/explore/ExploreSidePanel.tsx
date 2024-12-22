import { useState } from 'react';
import Calendar from 'react-calendar';
import { ProfileCard } from '../dashboard/ProfileCard';
import { LearningProgress } from '../dashboard/LearningProgress.tsx';
import { ScheduleStats } from '../schedule/ScheduleStats';
import { CalendarLegend } from './CalendarLegend';

export function ExploreSidePanel(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (value: Date, event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(value);
  };

  return (
    <div className="w-full lg:w-[380px] flex-shrink-0 space-y-6">
      <ProfileCard />
      <LearningProgress />
      <ScheduleStats />

      {/* Calendar */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Calendar</h3>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View All
          </button>
        </div>
        
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          view="month"
          className="w-full border-0"
          tileClassName="rounded-lg hover:bg-blue-50 transition-colors"
          tileContent={({ date, view }) => {
            const hasClass = Math.random() > 0.7;
            return hasClass ? (
              <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mt-1" />
            ) : null;
          }}
        />
        <CalendarLegend />
      </div>
    </div>
  );
}
