import React from 'react';
import { useRecordedClasses } from '../../hooks/useRecordedClasses';
import { RecordedClassCard } from './RecordedClassCard';

export function RecordedClassList() {
  const { classes } = useRecordedClasses();

  return (
    <div className="flex-1">
      <div className="grid gap-6">
        {classes.map((class_) => (
          <RecordedClassCard key={class_.id} class_={class_} />
        ))}
      </div>
    </div>
  );
}