import React from 'react';
import { HelpHeader } from '../components/help/HelpHeader';
import { HelpOptions } from '../components/help/HelpOptions';
import { ContactOptions } from '../components/help/ContactOptions';

export function HelpCenter() {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <HelpHeader />
      <HelpOptions />
      <ContactOptions />
    </div>
  );
}