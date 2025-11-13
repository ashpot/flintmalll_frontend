import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png'; 
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { LuChartSpline, LuCreditCard, LuSettings,} from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
  
  const activeLinkStyle = ({ isActive }) => {
    return isActive
      ? 'flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm bg-primary text-white' // Active style
      : 'flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-[#666666] hover:bg-[#E5F9FE] hover:text-primaryInput'; // Inactive style
  };

  return (
    <div className="w-72 h-screen bg-white shadow-lg flex flex-col flex-shrink-0 border-r border-[#E5E5E5]">
      
      <div className="py-8 flex justify-center ">
        <Link to="/dashboard">
          <img src={Logo} alt="Flintmall Logo" className="w-40" />
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        
        <h3 className="px-4 py-2 text-sm font-semibold text-[#666666] uppercase tracking-wider">
          Menu
        </h3>
        <NavLink to="/dashboard" end className={activeLinkStyle}>
          <MdOutlineDashboardCustomize size={26} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/dashboard/user-management" className={activeLinkStyle}>
          <FaUsers size={26} />
          <span>User Management</span>
        </NavLink>
        <NavLink to="/dashboard/ad-management" className={activeLinkStyle}>
          <MdOutlineStickyNote2 size={26} />
          <span>Ad Management</span>
        </NavLink>
        <NavLink to="/dashboard/payments" className={activeLinkStyle}>
          <LuCreditCard size={26} />
          <span>Payments & Promotions</span>
        </NavLink>
        <NavLink to="/dashboard/reports" className={activeLinkStyle}>
          <LuChartSpline size={26} />
          <span>Reports & Analytics</span>
        </NavLink>
        <NavLink to="/dashboard/support" className={activeLinkStyle}>
          <BiSupport size={26} />
          <span>Support & Safety</span>
        </NavLink>

        {/* --- OTHER --- */}
        <h3 className="px-4 pt-6 pb-2 text-sm font-semibold text-[#666666] border-t border-[#CFD9E4] uppercase tracking-wider">
          Other
        </h3>
        <NavLink to="/dashboard/settings" className={activeLinkStyle}>
          <LuSettings size={26} />
          <span>Settings</span>
        </NavLink>
        
        <button className="flex items-center gap-3 px-4 py-3 font-semibold text-sm rounded-xl text-[#FF3030] hover:bg-[#FFEAEA] w-full">
          <TbLogout2 size={26} />
          <span>Logout</span>
        </button>

      </nav>
    </div>
  );
}
export default Sidebar;