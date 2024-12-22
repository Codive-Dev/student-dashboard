import React from 'react';
import { Lock, Star, ChevronRight } from 'lucide-react';

interface UpcomingCertificate {
  id: string;
  title: string;
  imageUrl: string;
  requiredPoints: number;
  progress: number;
}

export function UpcomingCertificates() {
  const upcomingCertificates: UpcomingCertificate[] = [
    {
      id: '1',
      title: 'App Development Master',
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop',
      requiredPoints: 1000,
      progress: 750,
    },
    {
      id: '2',
      title: 'Web Wizard',
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=200&fit=crop',
      requiredPoints: 800,
      progress: 400,
    },
    {
      id: '3',
      title: 'Robot Builder',
      imageUrl: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop',
      requiredPoints: 1200,
      progress: 300,
    },
  ];

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-purple-900 flex items-center gap-3">
          <Star className="w-7 h-7 text-yellow-500" />
          Next Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {upcomingCertificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent" />
            
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />

            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Lock className="w-4 h-4" />
                    <span>{cert.requiredPoints} points required</span>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" />
              </div>

              <div className="mt-4">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-500"
                    style={{ width: `${(cert.progress / cert.requiredPoints) * 100}%` }}
                  />
                </div>
                <div className="mt-2 text-white/90 text-sm">
                  {cert.progress} / {cert.requiredPoints} points
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}