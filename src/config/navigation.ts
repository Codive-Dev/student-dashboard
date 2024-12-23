import { Home, BookOpen, Video, Award, ClipboardCheck, Gift } from 'lucide-react';
import type { NavItem } from '../types/navigation';

export const navItems: NavItem[] = [
  { icon: Home, label: 'Explore', path: '/' },
  { icon: BookOpen, label: 'Class Summary', path: '/class-summary' },
  { icon: Video, label: 'Recorded Classes', path: '/recorded-classes' },
  { icon: Award, label: 'Certificates', path: '/certificates' },
  { icon: ClipboardCheck, label: 'Assessments', path: '/assessments' },
  { icon: Gift, label: 'My Rewards', path: '/rewards' },
];