import React from 'react';
import { LuUser, LuCalendar } from 'react-icons/lu';

// Helper component for history items
const ActionHistoryItem = ({ title, description, admin, date, tag }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border border-[#E5E5E5] flex items-start justify-between">
    <div className="flex items-start gap-3">
      <span className="w-2 h-2 bg-secondary rounded-full mt-2.5 flex-shrink-0"></span>
      <div>
        <h4 className="font-semibold text-[#1E1E1E] text-lg mb-2">{title}</h4>
        <p className="text-base font-medium text-[#666666]">{description}</p>
        <div className="flex items-center gap-10 text-base font-medium text-[#666666] mt-2">
          <span className="flex items-center gap-1.5"><LuUser size={14} /> {admin}</span>
          <span className="flex items-center gap-1.5"><LuCalendar size={14} /> {date}</span>
        </div>
      </div>
    </div>
    <span className="text-lg border px-3 py-1 rounded-xl border-[#E5E5E5] bg-white text-[#1E1E1E] flex-shrink-0 hover:bg-[#E7ECF2]">{tag}</span>
  </div>
);

export default function ActionHistory() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] ">
      <h3 className="text-2xl text-[#1E1E1E] font-semibold">Admin Action History</h3>
      <p className="text-[#666666] font-medium text-base">Log of all administrative actions taken</p>
      
      <div className='space-y-4 mt-7'>
         <ActionHistoryItem
          title="Resolved complaint COMP001 - Banned fraudulent seller"
          description="Investigated fake iPhone seller, confirmed fraud, permanently banned user account"
          admin="Sarah Admin"
          date="23/09/2025 | 3:45 PM"
          tag="Fraud Resolution"
        />
        <ActionHistoryItem
          title="Removed inappropriate ads from Fashion category"
          description="Removed 3 ads with inappropriate content, warned sellers"
          admin="Mike Support"
          date="23/09/2025 | 1:20 PM"
          tag="Content Moderation"
        />

      </div>
     
    </div>
  );
}