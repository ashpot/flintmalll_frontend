import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const AdManagementLayout = () => {
  
  const activeTabStyle = ({ isActive }) => {
    return isActive
      ? 'bg-white text-[#1E1E1E] text-lg font-semibold rounded-xl shadow-sm' 
      : 'text-[#666666] text-lg font-semibold';
  };

  return (
    <div className="space-y-6">
      
      {/* The Shared Title */}
      <div>
        <h2 className="text-[28px] text-[#1E1E1E] font-semibold">Ad Management</h2>
        <p className="text-[#666666] font-medium text-base">Review and manage advertisements on the platform</p>
      </div>

      {/* The Shared Tab Navigation */}
      <div className="bg-[#E5E5E5] px-5 py-3 rounded-xl flex justify-between space-x-2">
        <NavLink 
          to="/dashboard/ad-management"
          end 
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Pending Ads (3)
        </NavLink>
        
        <NavLink 
          to="/dashboard/ad-management/active"
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Active Ads (2)
        </NavLink>
        
        <NavLink 
          to="/dashboard/ad-management/reported"
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Reported Ads (2)
        </NavLink>
      </div>

      <div className="mt-4">
        <Outlet />
      </div>
      
    </div>
  );
}
export default AdManagementLayout;