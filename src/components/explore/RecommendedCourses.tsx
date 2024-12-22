import { BookOpen, Clock, Star } from 'lucide-react';

export function RecommendedCourses() {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Python',
      instructor: 'Dr. Smith',
      duration: '8 weeks',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Web Development Fundamentals',
      instructor: 'Ms. Johnson',
      duration: '10 weeks',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-900">Recommended for You</h2>
        <button className="text-blue-600 hover:text-blue-700">View All</button>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
              <div className="flex items-center text-gray-600 space-x-4 mb-4">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span className="text-sm">{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{course.duration}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{course.rating}</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}