import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function SettingsLayout() {
  
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
        <h2 className="text-[28px] text-[#1E1E1E] font-semibold">Settings & Roles</h2>
        <p className="text-[#666666] font-medium text-base">Manage platform settings, categories, and admin roles</p>
      </div>

      {/* 2. The Shared Tab Navigation */}
      <div className="bg-[#E5E5E5] px-5 py-3 rounded-xl flex justify-around space-x-2">
        <NavLink 
          to="/dashboard/settings"
          end
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-32 font-medium`}
        >
          Categories
        </NavLink>
        
        <NavLink 
          to="/dashboard/settings/roles"
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-32 font-medium`}
        >
          Admin Roles
        </NavLink>
      </div>

      {/* 3. The "Empty Room" for the tab's content */}
      <div className="mt-4">
        <Outlet />
      </div>
      
    </div>
  );
}