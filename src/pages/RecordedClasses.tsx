import { RecordedClassesHeader } from '../components/recorded-classes/RecordedClassesHeader';
import { RecordedClassList } from '../components/recorded-classes/RecordedClassList';
import { RecordedClassFilters } from '../components/recorded-classes/RecordedClassFilters';

export function RecordedClasses() {
  return (
    <div className="space-y-8 px-9 py-8">
      <RecordedClassesHeader />
      <div className="flex flex-col lg:flex-row gap-8">
        <RecordedClassFilters />
        <RecordedClassList />
      </div>
    </div>
  );
}