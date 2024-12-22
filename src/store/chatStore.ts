import { create } from 'zustand';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatStore {
  messages: Message[];
  activeTab: 'mimi' | 'faqs';
  addMessage: (content: string, isUser: boolean) => void;
  clearMessages: () => void;
  setActiveTab: (tab: 'mimi' | 'faqs') => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  activeTab: 'mimi',
  addMessage: (content, isUser) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: crypto.randomUUID(),
          content,
          isUser,
          timestamp: new Date(),
        },
      ],
    })),
  clearMessages: () => set({ messages: [] }),
  setActiveTab: (tab) => set({ activeTab: tab }),
}));