import React, { useState } from 'react';
import { Download, Award, Star, Sparkles } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl: string;
  skills: string[];
  date?: string;
}

export function CertificateCard({ title, description, imageUrl, downloadUrl, skills, date }: CertificateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = async () => {
    try {
      const confetti = (await import('canvas-confetti')).default;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading certificate:', error);
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative elements */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-100 rounded-full opacity-50 transform rotate-45" />
      <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-purple-100 rounded-full opacity-50 transform -rotate-45" />

      <div className="relative flex items-start gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Award className={`w-8 h-8 ${isHovered ? 'text-yellow-500 animate-bounce' : 'text-purple-600'}`} />
            <h3 className="text-2xl font-bold text-purple-900">{title}</h3>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
          
          {date && (
            <div className="mt-4 flex items-center gap-2 text-purple-600">
              <Star className="w-5 h-5" />
              <span>Earned on {date}</span>
            </div>
          )}
          
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-purple-900 mb-3">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              Skills Mastered
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium transform hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex-shrink-0 w-64">
          <div className="relative group">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover rounded-xl shadow-md transform group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          </div>
          
          <button
            onClick={handleDownload}
            className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 font-medium text-lg"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}