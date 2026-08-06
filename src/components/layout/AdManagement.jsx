import React, { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { getAllAds } from '../../services/adminAuthService';

const AdManagementLayout = () => {
  const [counts, setCounts] = useState({ pending: 0, active: 0, reported: 0 });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const data = await getAllAds();
        const list = Array.isArray(data) ? data : [];
        const pending = list.filter((ad) => (ad.status || '').toLowerCase() === 'pending').length;
        const active = list.filter((ad) => (ad.status || '').toLowerCase() === 'approved').length;
        // No "reported" status exists in the backend yet — stays 0 until that's added
        setCounts({ pending, active, reported: 0 });
      } catch {
        // Silently keep counts at 0 if this fails; individual tabs show their own errors
      }
    };
    fetchCounts();
  }, []);

  const activeTabStyle = ({ isActive }) => {
    return isActive
      ? 'bg-white text-[#1E1E1E] text-lg font-semibold rounded-xl shadow-sm'
      : 'text-[#666666] text-lg font-semibold';
  };

  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-[28px] text-[#1E1E1E] font-semibold">Ad Management</h2>
        <p className="text-[#666666] font-medium text-base">Review and manage advertisements on the platform</p>
      </div>

      <div className="bg-[#E5E5E5] px-5 py-3 rounded-xl flex justify-between space-x-2">
        <NavLink
          to="/dashboard/ad-management"
          end
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Pending Ads ({counts.pending})
        </NavLink>

        <NavLink
          to="/dashboard/ad-management/active"
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Active Ads ({counts.active})
        </NavLink>

        <NavLink
          to="/dashboard/ad-management/reported"
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Reported Ads ({counts.reported})
        </NavLink>
      </div>

      <div className="mt-4">
        <Outlet />
      </div>

    </div>
  );
}
export default AdManagementLayout;