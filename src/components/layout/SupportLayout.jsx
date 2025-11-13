import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function SupportLayout() {
  
  // This helper style is for the active tab
  const activeTabStyle = ({ isActive }) => {
    return isActive
      ? 'bg-white text-[#1E1E1E] text-lg font-semibold rounded-xl shadow-sm'
      : 'text-[#666666] text-lg font-semibold';
  };

  return (
    <div className="space-y-6">
      
      {/* 1. The Shared Title */}
      <div>
        <h2 className="text-[28px] text-[#1E1E1E] font-semibold">Support & Safety</h2>
        <p className="text-[#666666] font-medium text-base">Manage user complaints, fraud detection, and platform safety</p>
      </div>

      {/* 2. The Shared Tab Navigation */}
      <div className="bg-[#E5E5E5] px-5 py-3 rounded-xl flex justify-between space-x-2">
        <NavLink 
          to="/dashboard/support"
          end
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Support Tickets (3)
        </NavLink>
        
        <NavLink 
          to="/dashboard/support/fraud-detection"
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Fraud Detection (2)
        </NavLink>
        
        <NavLink 
          to="/dashboard/support/action-history"
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Action History
        </NavLink>
      </div>

      {/* 3. The "Empty Room" for the tab's content */}
      <div className="mt-4">
        <Outlet />
      </div>
      
    </div>
  );
}