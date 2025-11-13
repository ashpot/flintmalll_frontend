import React from 'react';
import { BsFlag } from "react-icons/bs";

export default function FraudDetection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]">
      <h3 className="text-2xl text-[#1E1E1E] font-semibold">Fraud Detection & Suspicious Activity</h3>
      <p className="text-[#666666] font-medium text-base">Auto-flagged suspicious ads and users requiring review</p>

      <div className='bg-[#FFEAEA] p-6 rounded-lg shadow-sm border border-[#FFC1C1] mt-5 flex justify-between items-center gap-6'>
      
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <h4 className="text-lg text-[#1E1E1E] font-semibold">iPhone 14 Pro Max - Urgent Sale!</h4>
          <span className="text-sm font-medium bg-[#FFEAEA] text-[#FF3030] px-3 py-1 rounded-xl border border-[#FF9797]">
            High Risk
          </span>
        </div>
        
        <div className="flex items-center justify-between font-semibold text-base flex-wrap gap-x-4 gap-y-1 text-[#1E1E1E] mt-2 mb-4">
          <span>Type: <span className="font-medium">Suspicious Ad</span></span> 
          <span>User: <span className="font-medium">QuickSales NG</span></span> 
          <span>Detected: <span className="font-medium">27/09/2025 | 4:30 PM</span></span>
        </div>
        
        <div className="bg-white p-4 rounded-lg gap-3 shadow-sm">
          <div className='flex items-center gap-4 mb-2'>
            <BsFlag className="text-[#FF3030] flex-shrink-0" size={20} />
            <h5 className="font-medium text-lg text-[#FF3030]">Detection Reason:</h5>
          </div>
          
          <div>
            <p className="text-base font-medium text-[#1E1E1E]">Price significantly below market value (₦120,000 vs ₦580,000)</p>
            <p className="text-sm font-medium text-[#666666] mt-1">Flagged by: AI System</p>
          </div>
        </div>
      
      </div>

      <div className="flex flex-col gap-2 w-32 flex-shrink-0">
        <button className="px-4 py-2 border border-[#E5E5E5] bg-white rounded-lg text-sm text-[#1E1E1E] font-medium hover:bg-gray-50">Investigate</button>
        <button className="px-4 py-2 bg-[#FF3030] text-white rounded-lg text-sm font-medium hover:bg-red-700">Confirm Fraud</button>
        <button className="px-4 py-2 bg-[#0DAC4F] text-white rounded-lg text-sm font-medium hover:bg-green-700">Mark Safe</button>
      </div>

    </div>
      
      
    </div>
  );
}