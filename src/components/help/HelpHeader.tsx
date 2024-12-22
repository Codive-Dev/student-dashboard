import React from 'react';
import { HelpCircle } from 'lucide-react';

export function HelpHeader() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-blue-100 rounded-lg">
        <HelpCircle className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-blue-900">Help Center</h1>
        <p className="text-gray-600">Get help with your classes and account</p>
      </div>
    </div>
  );
}