import { useState } from 'react';

export function useSchedule() {
  const [classes] = useState([
    {
      id: 1,
      title: "Advanced Python Programming",
      teacher: "Dr. Smith",
      subject: "Programming",
      startTime: new Date(Date.now() + 1000 * 60 * 10), // 10 minutes from now
      duration: 60,
      students: 12,
    },
    {
      id: 2,
      title: "Web Development Basics",
      teacher: "Ms. Johnson",
      subject: "Web Development",
      startTime: new Date(Date.now() + 1000 * 60 * 60 * 2), // 2 hours from now
      duration: 45,
    },
    {
      id: 3,
      title: "Data Structures",
      teacher: "Mr. Davis",
      subject: "Computer Science",
      startTime: new Date(Date.now() + 1000 * 60 * 60 * 4), // 4 hours from now
      duration: 60,
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      teacher: "Ms. Anderson",
      subject: "Design",
      startTime: new Date(Date.now() + 1000 * 60 * 60 * 24), // Tomorrow
      duration: 90,
    },
  ]);

  const getNextClass = () => classes[0];
  const getUpcomingClasses = () => classes.slice(1);

  return {
    classes,
    nextClass: getNextClass(),
    upcomingClasses: getUpcomingClasses(),
  };
}