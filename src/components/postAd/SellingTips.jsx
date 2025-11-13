import React from 'react';
import { FaTag } from "react-icons/fa6";
import { PiCameraFill } from "react-icons/pi";
import { TbEdit } from "react-icons/tb";

const SellingTips = () => {
  return (
    <div className="my-16">
      <h2 className="text-center text-[28px] font-bold text-primary mb-1">Selling Tips</h2>
      <p className="text-center font-medium text-lg text-[#666666] mb-6">Follow these best practices to create successful ads.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* High-Quality Photos */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <PiCameraFill size={40} className="text-[#0DAC4F] mb-3 p-2 rounded-xl bg-[#E9FAF1]" />
          <h3 className="font-bold text-lg mb-2">High-Quality Photos</h3>
          <p className="text-base font-medium text-[#666666]">Use clear, well-lit photos from multiple angles. Good photos can increase your chances of selling by 80%.</p>
        </div>
        
        {/* Detailed Description */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <TbEdit size={40} className="text-secondary mb-3 p-2 rounded-xl bg-[#E5F9FE]" />
          <h3 className="font-bold text-lg mb-2">Detailed Description</h3>
          <p className="text-base font-medium text-[#666666]">Be honest and detailed about your item's condition, features, and any defects to build trust with buyers.</p>
        </div>
        
        {/* Competitive Pricing */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <FaTag size={40} className="text-[#FDB813] mb-3 p-2 rounded-xl bg-[#FEEAB8]" />
          <h3 className="font-bold text-lg mb-2">Competitive Pricing</h3>
          <p className="text-base font-medium text-[#666666]">Research similar items to price competitively. Consider marking as negotiable to attract more buyers.</p>
        </div>
      </div>
    </div>
  );
};

export default SellingTips;