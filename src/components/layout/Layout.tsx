import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { MobileMenu } from './MobileMenu';
import { MobileMenuOverlay } from './MobileMenuOverlay';
import { ChatInterface } from '../chat/ChatInterface';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <TopBar 
        isMenuOpen={isMobileMenuOpen}
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      
      <Sidebar onChatOpen={handleChatOpen} />
      
      <MobileMenuOverlay 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onChatOpen={handleChatOpen}
      />

      <ChatInterface 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      <div className="md:pl-20 lg:pl-64 pt-16 md:pt-0 transition-all duration-300">
        <div className="max-w-[1600px] mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}