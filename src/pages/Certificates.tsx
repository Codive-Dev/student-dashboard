import React, { useState } from 'react';
import { CertificateHeader } from '../components/certificates/CertificateHeader';
import { CertificateCard } from '../components/certificates/CertificateCard';
import { UpcomingCertificates } from '../components/certificates/UpcomingCertificates';

export function Certificates() {
  const certificates = [
    {
      id: '1',
      title: 'Coding Champion',
      description: 'Congratulations on mastering the fundamentals of coding! Your creative solutions and problem-solving skills have earned you this special recognition. Keep coding and creating amazing things! 🚀',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop',
      downloadUrl: '/certificates/participation.pdf',
      skills: ['Problem Solving', 'Creativity', 'Logical Thinking', 'Game Design'],
      date: 'March 15, 2024'
    },
    {
      id: '2',
      title: 'Science Explorer',
      description: 'Your curiosity and dedication to scientific discovery have been truly inspiring! This certificate celebrates your amazing journey through the world of science and experimentation. 🔬',
      imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop',
      downloadUrl: '/certificates/science.pdf',
      skills: ['Scientific Method', 'Data Analysis', 'Critical Thinking', 'Experimentation'],
      date: 'March 10, 2024'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-9 py-8">
      <CertificateHeader />
      
      <div className="space-y-8">
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            title={cert.title}
            description={cert.description}
            imageUrl={cert.imageUrl}
            downloadUrl={cert.downloadUrl}
            skills={cert.skills}
            date={cert.date}
          />
        ))}
      </div>

      <UpcomingCertificates />
    </div>
  );
}