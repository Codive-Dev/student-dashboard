import { create } from 'zustand';

interface SubIssue {
  id: string;
  title: string;
}

interface HelpOption {
  id: string;
  title: string;
  description: string;
  subIssues: string[];
}

interface HelpStore {
  selectedIssue: HelpOption | null;
  setSelectedIssue: (issue: HelpOption) => void;
}

export const useHelpStore = create<HelpStore>((set) => ({
  selectedIssue: null,
  setSelectedIssue: (issue) => set({ selectedIssue: issue }),
}));