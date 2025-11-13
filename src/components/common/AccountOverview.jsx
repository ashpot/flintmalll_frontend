import React from 'react';
import { MdRemoveRedEye } from "react-icons/md";
import { FaTags, FaCalendarAlt } from "react-icons/fa";

const AccountOverview = ({ stats }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm">
    <h2 className="text-lg md:text-[28px] font-semibold mb-4 text-[#1E1E1E]">Account Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* Active Ads */}
      <div className="bg-[#E5F9FE] p-5 rounded-lg text-center space-y-3">
        <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mx-auto mb-2">
          <FaTags size={24} className="text-white" />
        </div>
        <p className="text-2xl md:text-4xl font-bold text-[#285386]">{stats.activeAds}</p>
        <p className="text-sm md:text-lg font-medium text-[#285386]">Active Ads</p>
      </div>

      {/* Total Views */}
      <div className="bg-[#E9FAF1] p-5 rounded-lg text-center space-y-3">
        <div className="w-12 h-12 flex items-center justify-center bg-[#0DAC4F] rounded-2xl mx-auto mb-2">
          <MdRemoveRedEye size={24} className="text-white" />
        </div>
        <p className="text-2xl md:text-4xl font-bold text-[#0DAC4F]">{stats.totalViews}</p>
        <p className="text-sm md:text-lg font-medium text-[#0DAC4F]">Total Views</p>
      </div>

      {/* Member Since */}
      <div className="bg-[#FDF4E1] p-5 rounded-lg text-center space-y-3">
        <div className="w-12 h-12 flex items-center justify-center bg-[#FDB813] rounded-2xl mx-auto mb-2">
          <FaCalendarAlt size={24} className="text-white" />
        </div>
        <p className="text-2xl md:text-4xl font-bold text-[#C99507]">{stats.memberSince}</p>
        <p className="text-sm md:text-lg font-medium text-[#C99507]">Member Since</p>
      </div>

    </div>
  </div>
);

export default AccountOverview;