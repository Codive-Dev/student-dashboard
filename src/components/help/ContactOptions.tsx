import React, { useState } from 'react';
import { Mail, MessageCircle, ChevronDown } from 'lucide-react';
import { useHelpStore } from '../../store/helpStore';

export function ContactOptions() {
  const { selectedIssue } = useHelpStore();
  const [selectedSubIssue, setSelectedSubIssue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleEmailSupport = () => {
    if (!selectedIssue || !selectedSubIssue) {
      alert('Please select an issue and specific problem first');
      return;
    }

    const subject = `Support Request: ${selectedIssue.title} - ${selectedSubIssue}`;
    const body = `Issue: ${selectedIssue.title}\nSpecific Problem: ${selectedSubIssue}\n\nPlease provide additional details about your issue:`;
    
    window.location.href = `mailto:learning@codive.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsAppSupport = () => {
    if (!selectedIssue || !selectedSubIssue) {
      alert('Please select an issue and specific problem first');
      return;
    }

    const message = `Hi, I need help with:\nIssue: ${selectedIssue.title}\nSpecific Problem: ${selectedSubIssue}`;
    window.open(`https://wa.me/+1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Contact Support</h2>

      {selectedIssue ? (
        <div className="mb-6">
          <div className="text-sm font-medium text-gray-700 mb-2">Selected Issue:</div>
          <div className="p-3 bg-blue-50 rounded-lg text-blue-800">
            {selectedIssue.title}
          </div>

          <div className="mt-4">
            <div className="text-sm font-medium text-gray-700 mb-2">Select Specific Problem:</div>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full p-3 bg-gray-50 rounded-lg text-left flex items-center justify-between"
              >
                <span>{selectedSubIssue || 'Select a specific problem'}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {selectedIssue.subIssues.map((subIssue) => (
                    <button
                      key={subIssue}
                      onClick={() => {
                        setSelectedSubIssue(subIssue);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full p-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      {subIssue}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6 p-4 bg-yellow-50 text-yellow-800 rounded-lg">
          Please select an issue from above to continue
        </div>
      )}
      
      <div className="space-y-4">
        <button
          onClick={handleEmailSupport}
          disabled={!selectedIssue || !selectedSubIssue}
          className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-100 hover:border-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <div className="text-left">
              <div className="font-medium">Email Support</div>
              <div className="text-sm text-gray-600">Get help via email</div>
            </div>
          </div>
          <span className="text-blue-600">learning@codive.co</span>
        </button>

        <button
          onClick={handleWhatsAppSupport}
          disabled={!selectedIssue || !selectedSubIssue}
          className="w-full flex items-center justify-between p-4 rounded-lg border-2 border-gray-100 hover:border-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <div className="text-left">
              <div className="font-medium">WhatsApp Support</div>
              <div className="text-sm text-gray-600">Chat with us on WhatsApp</div>
            </div>
          </div>
          <span className="text-green-600">Connect Now</span>
        </button>
      </div>
    </div>
  );
}