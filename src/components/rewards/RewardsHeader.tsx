import { Star, Gift } from 'lucide-react';

interface RewardsHeaderProps {
  points: number;
}

export function RewardsHeader({ points }: RewardsHeaderProps) {
  const handlePointsClick = async () => {
    // Dynamically import confetti only when needed
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.3 }
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-purple-100 rounded-xl">
          <Gift className="w-8 h-8 text-purple-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-purple-900">Epic Rewards 🎮</h1>
          <p className="text-purple-600">Complete tasks to earn awesome rewards!</p>
        </div>
      </div>

      <button
        onClick={handlePointsClick}
        className="flex items-center gap-2 mt-5 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <Star className="w-5 h-5 fill-current animate-pulse" />
        <span className="text-xl">{points} Points</span>
      </button>
    </div>
  );
}