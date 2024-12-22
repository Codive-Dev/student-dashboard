import { ExploreContent } from '../components/explore/ExploreContent';
import { ExploreHeader } from '../components/explore/ExploreHeader';
import { ExploreSidePanel } from '../components/explore/ExploreSidePanel';

export function Dashboard() {
  return (
    <div className="max-w-[1600px] mx-auto px-9 py-8">
      <ExploreHeader />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 min-w-0">
          <ExploreContent />
        </div>
        <ExploreSidePanel />
      </div>
    </div>
  );
}