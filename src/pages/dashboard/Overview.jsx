import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LuUsers, LuArrowUpRight, LuArrowDownRight } from 'react-icons/lu'; 
import { FaUsers } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { PiMoneyWavyFill } from "react-icons/pi";

const StatCard = ({ title, value, percentage, icon, iconBg, isPositive }) => {
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
          <span className="ml-1 text-sm font-medium">{percentage} from last month</span>
        </div>
      </div>
      
    </div>
  );
};

const PendingAdItem = ({ title, store, category, price, time }) => {
  return (
    <div className="flex flex-wrap items-center max-w-[95%] mx-auto justify-between gap-y-3 p-4 rounded-xl border mb-4">
      
      {/* Ad Info Group */}
      <div>
        <h4 className="font-semibold text-lg text-[#1E1E1E]">{title}</h4>
        <div className="flex items-center gap-6 mt-1">
          <span className="text-lg font-medium text-[#666666]">{store}</span>
          <span className="text-sm font-medium border border-[#B7B7B7] bg-white text-[#666666] px-2.5 py-1 rounded-lg">
            {category}
          </span>
          <span className="font-medium text-lg text-[#285386]">{price}</span>
          <span className="text-lg font-medium text-[#666666]">{time}</span>
        </div>
      </div>

      {/* Action Buttons Group */}
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 bg-[#0DAC4F] text-white rounded-lg text-sm font-medium hover:bg-[#E9FAF1] hover:text-[#0DAC4F] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Approve
        </button>
        <button className="px-4 py-2 bg-[#FF3030] text-white rounded-lg text-sm font-medium hover:bg-[#FFEAEA] hover:text-[#FF3030] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Reject
        </button>
      </div>
    </div>
  );
};


const Overview = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('dashboard/ad-management'); 
  };

  return (
    <div className="space-y-6">
      
      {/* Page Title */}
      <div>
        <h2 className="text-[28px] text-[#1E1E1E] font-semibold">Dashboard Overview</h2>
        <p className="text-[#666666] font-medium text-base">Monitor platform performance and activity</p>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Total Users"
          value="847,329"
          percentage="+8%"
          isPositive={true}
          icon={<FaUsers size={14} className="text-primary" />}
          iconBg="bg-[#E7ECF2]"
        />
        <StatCard
          title="Total Users" 
          value="2,456,781"
          percentage="+8%"
          isPositive={true}
          icon={<FaTag size={14} className="text-secondary" />}
          iconBg="bg-[#E5F9FE]"
        />
        <StatCard
          title="Total Users" 
          value="1,247"
          percentage="-5%"
          isPositive={false}
          icon={<GoClockFill size={14} className="text-[#FF3030]" />}
          iconBg="bg-[#FFEAEA]"
        />
        <StatCard
          title="Total Users" 
          value="₦12,234,000"
          percentage="+18%"
          isPositive={true}
          icon={<PiMoneyWavyFill size={14} className="text-[#0DAC4F]" />}
          iconBg="bg-[#E9FAF1]"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 border border-[#E5E5E5] rounded-xl shadow-sm">
          <h4 className="text-lg text-[#1E1E1E] font-semibold">Ad Posting Trend</h4>
          <p className='font-medium text-base text-[#666666]'>Monthly ad posting activity</p>
          <div className="h-64 mt-4 bg-gray-100 flex items-center justify-center rounded">
            <p className="text-gray-500">[Ad Posting Trend Chart Goes Here]</p>
          </div>
        </div>
        <div className="bg-white p-6 border border-[#E5E5E5] rounded-xl shadow-sm">
          <h4 className="text-lg text-[#1E1E1E] font-semibold">Revenue Trend</h4>
          <p className='font-medium text-base text-[#666666]'>Monthly revenue from promotions</p>
          <div className="h-64 mt-4 bg-gray-100 flex items-center justify-center rounded">
            <p className="text-gray-500">[Revenue Trend Chart Goes Here]</p>
          </div>
        </div>
      </div>

      {/* Pending Ads Section */}
      <div className="bg-white border border-[#E5E5E5] rounded-xl shadow-sm">
        <div className="p-5">
          <h4 className="text-2xl text-[#1E1E1E] font-semibold">Pending Ads - Quick Actions</h4>
          <p className="text-lg font-medium text-[#666666]">Ads waiting for approval</p>
        </div>
        <div>
          <PendingAdItem 
            title="iPhone 14 Pro Max - 256GB"
            store="Galaxy Stores"
            price="₦880,000"
            category='Gadgets'
            time="12 minutes ago"
          />
          <PendingAdItem 
            title="2018 Toyota Camry - Excellent Condition"
            store="Fatima Ahmed"
            price="₦19,200,000"
            category='Vehicles'
            time="16 minutes ago"
          />
        </div>
        <div className="p-4 text-center ">
          <button onClick={handleViewAll} className="text-primaryLight font-medium text-lg border border-primaryInput px-5 py-3 rounded-xl hover:bg-[#E7ECF2]">
            View all pending ads (172 more)
          </button>
        </div>
      </div>

    </div>
  );
}
export default Overview;