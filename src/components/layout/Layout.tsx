import React from 'react';
import { Sidebar } from './Sidebar.tsx';
import { Header } from './Header';
import { OceanBackground } from '../animations/OceanBackground';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <OceanBackground />
      <div className="relative z-10">
        <Sidebar />
        <Header />
        <div className="pl-64">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}