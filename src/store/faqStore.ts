import { create } from 'zustand';

interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
}

interface FAQStore {
  categories: Category[];
  faqs: FAQ[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export const useFAQStore = create<FAQStore>((set) => ({
  selectedCategory: null,
  categories: [
    {
      id: 'classes',
      name: 'Classes & Learning',
      description: 'Questions about online classes and learning experience'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      description: 'Help with technical issues and platform access'
    },
    {
      id: 'account',
      name: 'Account & Profile',
      description: 'Managing your account and profile settings'
    },
    {
      id: 'billing',
      name: 'Billing & Payments',
      description: 'Questions about payments and subscriptions'
    }
  ],
  faqs: [
    {
      id: '1',
      category: 'classes',
      question: 'How do I join a live class?',
      answer: 'You can join a live class by clicking the "Join Class" button that appears 5 minutes before the scheduled start time. Make sure you have a stable internet connection and your camera/microphone are working properly.'
    },
    {
      id: '2',
      category: 'classes',
      question: 'What if I miss a class?',
      answer: 'If you miss a class, you can access the recorded version from the "Recorded Classes" section. The recording is usually available within 24 hours after the class ends.'
    },
    {
      id: '3',
      category: 'technical',
      question: 'What are the system requirements?',
      answer: 'For the best experience, we recommend using Chrome or Firefox browser, a stable internet connection with at least 2 Mbps speed, and allowing camera/microphone access when prompted.'
    },
    {
      id: '4',
      category: 'technical',
      question: 'How do I test my audio/video?',
      answer: 'You can test your audio/video by clicking on the settings icon in any class room. This will open the device settings where you can select and test your camera and microphone.'
    },
    {
      id: '5',
      category: 'account',
      question: 'How do I update my profile?',
      answer: 'To update your profile, click on your avatar in the top-right corner and select "Profile Settings". Here you can update your personal information, profile picture, and preferences.'
    },
    {
      id: '6',
      category: 'account',
      question: 'How do I change my password?',
      answer: 'You can change your password in the Profile Settings under the Security tab. You\'ll need to enter your current password and then set a new one.'
    },
    {
      id: '7',
      category: 'billing',
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Some regions may also have additional local payment options.'
    },
    {
      id: '8',
      category: 'billing',
      question: 'How do refunds work?',
      answer: 'Refund requests can be submitted within 7 days of purchase. Each case is reviewed individually, and approved refunds are processed within 5-7 business days.'
    }
  ],
  setSelectedCategory: (category) => set({ selectedCategory: category })
}));