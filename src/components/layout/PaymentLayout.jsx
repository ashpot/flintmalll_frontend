import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LuArrowUpRight, LuArrowDownRight } from 'react-icons/lu';
import { FaUsers } from "react-icons/fa";
import { PiMoneyWavyFill } from "react-icons/pi";

const StatCard = ({ title, value, percentage, isPositive, icon, iconBg }) => {
  return (
    <div className="bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm ">
      <div>
        <div className='flex items-start justify-between'>
          <p className="text-sm font-semibold text-[#000000] mb-5">{title}</p>
          <div className={`p-2 rounded-xl ${iconBg}`}>
            {icon}
          </div>
        </div>
        
        <h3 className="text-[28px] font-bold mt-1">{value}</h3>
        <div className={`flex items-center text-sm mt-2 ${isPositive ? 'text-[#0DAC4F]' : 'text-[#FF3030]'}`}>
          {isPositive ? <LuArrowUpRight size={14} /> : <LuArrowDownRight size={14} />}
          <span className="ml-1 text-sm font-medium">{percentage}</span>
        </div>
      </div>
      
    </div>
  );
};


export default function PaymentsLayout() {
  
  const activeTabStyle = ({ isActive }) => {
    return isActive
      ? 'bg-white text-[#1E1E1E] text-lg font-semibold rounded-xl shadow-sm' 
      : 'text-[#666666] text-lg font-semibold'; 
  };

  return (
    <div className="space-y-6">
      
      {/* The Shared Title */}
      <div>
        <h2 className="text-[28px] text-[#1E1E1E] font-semibold">Payments & Promotions</h2>
        <p className="text-[#666666] font-medium text-base">Manage transactions, revenue, and promotional offerings</p>
      </div>

      {/* The Shared Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Total Revenue"
          value="₦47,829,650"
          percentage="+18%"
          isPositive={true}
          icon={<PiMoneyWavyFill size={14} className="text-primary" />}
          iconBg="bg-[#E7ECF2]"
        />
        <StatCard
          title="Today's Revenue"
          value="₦284,750"
          percentage="+12% Today"
          isPositive={true}
          icon={<PiMoneyWavyFill size={14} className="text-secondary" />}
          iconBg="bg-[#E5F9FE]"
        />
        <StatCard
          title="Pending Refunds"
          value="₦125,400"
          percentage="-8%"
          isPositive={false}
          icon={<PiMoneyWavyFill size={14} className="text-[#C99507]" />}
          iconBg="bg-[#FDF4E1]"
        />
        <StatCard
          title="Active Promotions"
          value="2,847"
          percentage="Currently running"
          isPositive={true}
          icon={<PiMoneyWavyFill size={14} className="text-[#0DAC4F]" />}
          iconBg="bg-[#E9FAF1]"
        />
      </div>

      {/* The Shared Tab Navigation */}
      <div className="bg-[#E5E5E5] px-5 py-3 rounded-xl flex justify-between space-x-2">
        <NavLink 
          to="/dashboard/payments"
          end
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Transaction History
        </NavLink>
        <NavLink 
          to="/dashboard/payments/analytics"
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Promotion Analytics
        </NavLink>
        <NavLink 
          to="/dashboard/payments/config"
          className={({ isActive }) => `${activeTabStyle({ isActive })} py-3 px-14 font-medium`}
        >
          Pricing Configuration
        </NavLink>
      </div>

      <div className="mt-4">
        <Outlet />
      </div>
      
    </div>
  );
}