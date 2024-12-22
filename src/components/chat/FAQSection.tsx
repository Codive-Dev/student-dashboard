import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useFAQStore } from '../../store/faqStore';

interface FAQSectionProps {
  onClose?: () => void;
}

export function FAQSection({ onClose }: FAQSectionProps) {
  const { categories, faqs, selectedCategory, setSelectedCategory } = useFAQStore();
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const handleBack = () => {
    setSelectedCategory(null);
    setExpandedQuestion(null);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleQuestionClick = (faqId: string) => {
    setExpandedQuestion(expandedQuestion === faqId ? null : faqId);
  };

  return (
    <div className="space-y-4">
      {selectedCategory ? (
        <>
          <button
            onClick={handleBack}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Categories</span>
          </button>

          <div className="space-y-4">
            {faqs
              .filter(faq => faq.category === selectedCategory)
              .map(faq => (
                <div
                  key={faq.id}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => handleQuestionClick(faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        expandedQuestion === faq.id ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {expandedQuestion === faq.id && (
                    <div className="px-4 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </>
      ) : (
        <div className="grid gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="p-4 bg-gray-50 rounded-lg text-left hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {category.description}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}