import {useState} from 'react';
import { LiveClasses } from '../dashboard/LiveClasses';
import { QuickActions } from './QuickActions';
import { QuickActionsModals } from './QuickActionsModals';
import { RecommendedCourses } from './RecommendedCourses';
import { ScheduleCalendar } from '../schedule/ScheduleCalendar';

export function ExploreContent() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isViewScheduleModalOpen, setIsViewScheduleModalOpen] = useState(false);
  const [isRemindersModalOpen, setIsRemindersModalOpen] = useState(false);

  return (
    <>
      <QuickActionsModals isScheduleModalOpen={isScheduleModalOpen} setIsScheduleModalOpen={setIsScheduleModalOpen} isViewScheduleModalOpen={isViewScheduleModalOpen} setIsViewScheduleModalOpen={setIsViewScheduleModalOpen} isRemindersModalOpen={isRemindersModalOpen} setIsRemindersModalOpen={setIsRemindersModalOpen} />
      <div className="space-y-8">
        <QuickActions setIsScheduleModalOpen={setIsScheduleModalOpen} setIsViewScheduleModalOpen={setIsViewScheduleModalOpen} setIsRemindersModalOpen={setIsRemindersModalOpen} />
        <LiveClasses />
        <RecommendedCourses />
        <ScheduleCalendar/>
      </div>
    </>
  );
}