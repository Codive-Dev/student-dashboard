import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ChatTabs } from './ChatTabs';
import { ChatGreeting } from './ChatGreeting.tsx';
import { QuickActions } from './QuickActions';
import { ChatInput } from './ChatInput';
import { ChatMessage } from './ChatMessage';
import { FAQSection } from './FAQSection';
import { useStudentStore } from '../../store/studentStore.ts';
import { useChatStore } from '../../store/chatStore';

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatInterface({ isOpen, onClose }: ChatInterfaceProps) {
  const student = useStudentStore((state) => state.student);
  const { messages, activeTab, addMessage, setActiveTab } = useChatStore();
  const chatRef = useRef<HTMLDivElement>(null);

  const handleQuickAction = (actionId: string) => {
    switch (actionId) {
      case 'cancel-class-confirmed':
        addMessage('I understand you want to cancel a class. Please provide the class date and time.', false);
        break;
      case 'pause-classes-confirmed':
        addMessage('I can help you pause your classes. How long would you like to pause them for?', false);
        break;
      case 'teacher-concerns':
        addMessage('I\'m sorry to hear you\'re having concerns with your teacher. Could you please describe the issue?', false);
        break;
      case 'dashboard-help':
        addMessage('I can help you navigate the dashboard. What specific feature would you like to learn more about?', false);
        break;
      default:
        addMessage(`I'll help you with ${actionId}. What would you like to know?`, false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 backdrop-blur bg-black/20 z-40"
        aria-hidden="true"
      />

      <div 
        ref={chatRef}
        className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-xl z-70 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chat-title"
      >
        <div className="flex-shrink-0 p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 id="chat-title" className="text-2xl font-bold text-gray-900">Welcome to Mimi</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <ChatTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {activeTab === 'mimi' ? (
              <>
                <ChatGreeting studentName={student?.name} />
                <QuickActions 
                  onActionSelect={handleQuickAction}
                  onClose={onClose}
                />
                <div className="space-y-4 mt-6">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                </div>
              </>
            ) : (
              <FAQSection onClose={onClose} />
            )}
          </div>
        </div>

        {activeTab === 'mimi' && (
          <div className="flex-shrink-0">
            <ChatInput onSend={(message) => addMessage(message, true)} />
          </div>
        )}
      </div>
    </>
  );
}