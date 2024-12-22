import React from 'react';
import { cn } from '../../utils/cn.ts';

interface ChatTabsProps {
  activeTab: 'mimi' | 'faqs';
  onTabChange: (tab: 'mimi' | 'faqs') => void;
}

export function ChatTabs({ activeTab, onTabChange }: ChatTabsProps) {
  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={() => onTabChange('mimi')}
        className={cn(
          'px-6 py-2 rounded-full text-sm font-medium transition-colors',
          activeTab === 'mimi'
            ? 'bg-blue-100 text-blue-800'
            : 'text-gray-600 hover:bg-gray-100'
        )}
      >
        Mimi
      </button>
      <button
        onClick={() => onTabChange('faqs')}
        className={cn(
          'px-6 py-2 rounded-full text-sm font-medium transition-colors',
          activeTab === 'faqs'
            ? 'bg-blue-100 text-blue-800'
            : 'text-gray-600 hover:bg-gray-100'
        )}
      >
        FAQs
      </button>
    </div>
  );
}