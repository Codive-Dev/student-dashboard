import type { ScoreDisplayProps } from '../../types/assessment';

export function ScoreDisplay({ score, feedback }: ScoreDisplayProps) {
  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getBackgroundColor = (score: number) => {
    if (score >= 70) return 'bg-green-50';
    if (score >= 50) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  return (
    <div className={`p-4 rounded-lg ${getBackgroundColor(score)}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">Your Score</span>
        <span className={`text-lg font-bold ${getScoreColor(score)}`}>
          {score.toFixed(1)}%
        </span>
      </div>
      {feedback && (
        <p className="text-sm text-gray-600">{feedback}</p>
      )}
    </div>
  );
}