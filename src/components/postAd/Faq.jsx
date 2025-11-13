import React, { useState } from 'react';
import { MdOutlineChevronRight } from 'react-icons/md';

// A reusable single FAQ item
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-[#F2F2F2] rounded-2xl mb-4 py-1 px-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="font-semibold text-2xl">{question}</span>
        <MdOutlineChevronRight 
          size={30} 
          className={`text-[#B7B7B7] transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`} 
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-10 text-[#666666] text-base font-medium">
          {answer}
        </div>
      )}
    </div>
  );
};

// The main FAQ component
const Faq = () => {
  const faqData = [
    { q: 'How do I choose the right category for my item?', a: 'Browse our categories to find the best fit. If your item fits multiple, choose the one that buyers are most likely to search for.' },
    { q: 'Can I change the category after posting?', a: 'Yes, you can edit your ad, including the category, at any time from your "My Ads" dashboard.' },
    { q: 'What if my item fits multiple categories?', a: 'Please choose the single best category. Our search is designed to help buyers find items even if they are in a closely related category.' },
    { q: 'Are there any restricted categories?', a: 'Yes, we prohibit the sale of illegal items, weapons, and certain other products. Please review our full "Prohibited Items" list.' },
  ];

  return (
    <div className="mt-12">
      <h2 className="text-center text-[28px] font-bold text-primary mb-1">Frequently Asked Questions</h2>
      <p className="text-center font-medium text-lg text-[#666666] mb-6">Get answers to common questions about posting ads.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  );
};

export default Faq;