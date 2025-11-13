import React from 'react';
import { Link } from 'react-router-dom';
import { LuSearch, LuBell } from 'react-icons/lu';
import UserAvatar from '../../assets/images/profilePhoto.png'; 

const DashboardTopNav = () => {
  return (
    <header className="bg-white shadow-sm py-6 px-7 flex justify-between items-center border-b border-[#E5E5E5] flex-shrink-0">
      
      <div className="relative">
        <input
          type="text"
          placeholder="Search users, ads, transactions..."
          className="pl-4 pr-4 py-2 w-96 rounded-xl font-medium text-base text-[#666666] placeholder:text-[#666666] placeholder:text-base placeholder:font-medium border border-[#E5E5E5] bg-[#F7F7F7] focus:outline-secondary"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B7B7B7]">
          <LuSearch size={20} />
        </span>
      </div>

      <div className="flex items-center gap-6">
        
        <button className="text-gray-600 hover:text-primary relative">
          <LuBell size={24} />
        </button>

        {/* <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={UserAvatar}
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
          />
          <div>
            <h4 className="font-semibold text-sm">Hi, Travis</h4>
            <p className="text-xs text-gray-500">@iamtravis</p>
          </div>
        </div> */}

         <Link 
          to="/profile-settings" 
          className="flex items-center gap-3 cursor-pointer group"
          aria-label="View profile and settings"
        >
          <img
            src={UserAvatar} 
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 group-hover:border-secondary transition-colors duration-150"
          />
          <div>
            <h4 className="font-semibold text-sm text-gray-900 group-hover:text-secondary transition-colors duration-150">Hi, Travis</h4>
            <p className="text-xs text-gray-500">@iamtravis</p>
          </div>
        </Link>

      </div>
    </header>
  );
}
export default DashboardTopNav;