import { AssessmentHeader } from '../components/assessments/AssessmentHeader';
import { AssessmentList } from '../components/assessments/AssessmentList';
import { AssessmentStats } from '../components/assessments/AssessmentStats';
import { SkillProgress } from '../components/assessments/SkillProgress';
import { useAssessments } from '../hooks/useAssessments';

export function Assessments() {
  const { assessments } = useAssessments();

  return (
    <div className="max-w-7xl mx-auto px-9 py-8 space-y-8">
      <AssessmentHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <AssessmentStats assessments={assessments} />
          <AssessmentList assessments={assessments} />
        </div>
        
        <div>
          <SkillProgress assessments={assessments} />
        </div>
      </div>
    </div>
  );
}