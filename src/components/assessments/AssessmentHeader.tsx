import { Trophy, Star } from 'lucide-react';

export function AssessmentHeader() {
  return (
    <div className="relative">
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-3">
          <div className="relative">
            <div className="absolute inset-0 animate-ping bg-yellow-200 rounded-full opacity-75" />
            <Trophy className="w-10 h-10 text-yellow-500 relative" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Your Learning Adventure! 🚀
          </h1>
        </div>
        
        <div className="mt-6 p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4">
            <Star className="w-12 h-12 text-white animate-pulse" />
            <div>
              <h2 className="text-white text-xl font-bold">Amazing Progress! 🌟</h2>
              <p className="text-white/90">
                Keep up the great work! You're doing fantastic!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}