import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { ClassSummary } from './pages/ClassSummary';
import { RecordedClasses } from './pages/RecordedClasses';
import { Certificates } from './pages/Certificates';
import { Assessments } from './pages/Assessments';
import { Rewards } from './pages/Rewards';
import { HelpCenter } from './pages/HelpCenter';
import { ProfileSettings } from './pages/ProfileSettings';
import { UpcomingClasses } from './pages/UpcomingClasses';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/class-summary" element={<ClassSummary />} />
          <Route path="/recorded-classes" element={<RecordedClasses />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/upcoming-classes" element={<UpcomingClasses />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}