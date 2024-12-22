import { ScheduleClassModal } from '../schedule/ScheduleClassModal';
import { ViewScheduleModal } from '../schedule/ViewScheduleModal';
import { RemindersModal } from '../reminders/RemindersModal';

interface QuickActionsModalsProps {
    isScheduleModalOpen: boolean,
    setIsScheduleModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isViewScheduleModalOpen: boolean,
    setIsViewScheduleModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isRemindersModalOpen: boolean,
    setIsRemindersModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function QuickActionsModals({isScheduleModalOpen, setIsScheduleModalOpen, isViewScheduleModalOpen, setIsViewScheduleModalOpen, isRemindersModalOpen, setIsRemindersModalOpen}: QuickActionsModalsProps) {
    return (
        <>
            <ScheduleClassModal 
                isOpen={isScheduleModalOpen}
                onClose={() => setIsScheduleModalOpen(false)}
            />

            <ViewScheduleModal 
                isOpen={isViewScheduleModalOpen}
                onClose={() => setIsViewScheduleModalOpen(false)}
            />

            <RemindersModal
                isOpen={isRemindersModalOpen}
                onClose={() => setIsRemindersModalOpen(false)}
            />
        </>
    )
}