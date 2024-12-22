interface ChatGreetingProps {
  studentName: string
}

export function ChatGreeting({ studentName }: ChatGreetingProps): JSX.Element {
  return (
    <div className="bg-green-50 rounded-2xl p-6 mb-8">
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
          <span className="text-2xl">👩‍🏫</span>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">
            Hello {studentName} 👋
          </p>
          <p className="text-gray-600 mt-1">
            I'm Professor Greenline, your buddy with superpowers. What can I do for you today?
          </p>
        </div>
      </div>
    </div>
  );
}