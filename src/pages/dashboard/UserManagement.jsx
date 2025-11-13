import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSearch, LuAArrowDown } from 'react-icons/lu'; 
import { BiDotsHorizontalRounded } from "react-icons/bi";
import profilePhoto from '../../assets/images/profilePhoto.png'

const UserTableRow = ({ avatar, name, location, contact, email, type, status, joinDate, ads }) => {
  
  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-[#E9FAF1] text-[#0DAC4F] border border-[#7EE4A8] p-2 rounded-lg';
      case 'suspended':
        return 'bg-[#FDF4E1] text-[#C99507] border border-[#FEEAB8] p-2 rounded-lg';
      case 'banned':
        return 'bg-[#FFEAEA] text-[#FF3030] border border-[#FF9797] p-2 rounded-lg';
      default:
        return 'bg-gray-100 text-gray-700 border border-[#666666] p-2 rounded-lg';
    }
  };

  const getTypeClasses = (type) => {
    return type.toLowerCase() === 'business'
      ? 'bg-[#E5F9FE] text-[#285386] border border-[#80DFF9] p-2 rounded-lg'
      : 'bg-[#F3E8FF] text-[#6E11B0] border border-[#DFC1FF] p-2 rounded-lg';
  };

  return (
    <tr className="border-b border-[#B7B7B7] bg-white hover:bg-gray-50">
      {/* User */}
      <td className="py-5 px-5">
        <div className="flex items-center gap-3">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-base mb-1 text-[#1E1E1E]">{name}</p>
            <p className="text-base font-medium text-[#666666]">{location}</p>
          </div>
        </div>
      </td>
      {/* Contact */}
      <td className="py-3 px-5">
        <p className="font-medium text-base mb-1 text-[#1E1E1E]">{email}</p>
        <p className="text-base font-medium text-[#1E1E1E]">{contact}</p>
      </td>
      {/* Type */}
      <td className="py-3 px-5">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeClasses(type)}`}>
          {type}
        </span>
      </td>
      {/* Status */}
      <td className="py-3 px-5">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClasses(status)}`}>
          {status}
        </span>
      </td>
      {/* Join Date */}
      <td className="py-3 px-5 text-base font-medium text-[#1E1E1E]">{joinDate}</td>
      {/* Ads */}
      <td className="py-3 px-5 text-base font-medium text-[#1E1E1E]">{ads}</td>
      {/* Actions */}
      <td className="py-3 px-5">
        <button className="text-[#1E1E1E] border bg-[#E5E5E5] p-1 rounded-lg hover:text-primary">
          <BiDotsHorizontalRounded size={20} />
        </button>
      </td>
    </tr>
  );
};


const UserManagement = () => {
  const navigate = useNavigate();
  
  const handleViewAll = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="space-y-6">
      
      {/* Page Title */}
      <div>
        <h2 className="text-[28px] text-[#1E1E1E] font-semibold">User Management</h2>
        <p className="text-[#666666] font-medium text-base">Monitor platform users and their activities</p>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-white p-4 border border-[#E5E5E5] rounded-xl shadow-sm flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="pl-4 pr-4 py-3 w-96 rounded-xl font-medium text-base text-[#666666] placeholder:text-[#666666] placeholder:text-base placeholder:font-medium border border-[#E5E5E5] bg-[#F7F7F7] focus:outline-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B7B7B7]">
            <LuSearch size={20} />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <select className="px-4 py-2 rounded-lg border text-[#1E1E1E] text-base font-medium border-[#E5E5E5] bg-[#F7F7F7]">
            <option>All Status</option>
            <option>Active</option>
            <option>Suspended</option>
            <option>Banned</option>
          </select>
          <select className="px-4 py-2 rounded-lg border text-[#1E1E1E] text-base font-medium border-[#E5E5E5] bg-[#F7F7F7]">
            <option>All Types</option>
            <option>Individual</option>
            <option>Business</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-[#E5E5E5] overflow-hidden">
        <div className="p-5">
          <h3 className="text-2xl text-[#1E1E1E] font-semibold">Users (1247)</h3>
          <p className="text-lg font-medium text-[#666666]">All registered users on the platform</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="">
              <tr className="border-b border-[#B7B7B7]">
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">User</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Contact</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Type</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Status</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Join Date</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Ads</th>
                <th className="py-3 px-5 text-left text-base font-semibold text-[#1E1E1E]">Actions</th>
              </tr>
            </thead>
            <tbody>
              <UserTableRow
                avatar={profilePhoto}
                name="Adebayo John"
                location="Lagos, Nigeria"
                contact="+234801234567"
                email="adebayo@mail.com"
                type="Individual"
                status="Active"
                joinDate="1/15/2024"
                ads={24}
              />
            </tbody>
             <tbody>
              <UserTableRow
                avatar={profilePhoto}
                name="Bayo Johnson"
                location="Lagos, Nigeria"
                contact="+234801234567"
                email="adebayo@mail.com"
                type="Business"
                status="Suspended"
                joinDate="1/15/2024"
                ads={24}
              />
            </tbody>
          </table>
        </div>
        
        {/* "View All" Button */}
        <div className="p-4 text-center mt-5">
          <button onClick={handleViewAll} className="text-primaryLight font-medium text-lg border border-primaryInput px-5 py-3 rounded-xl hover:bg-[#E7ECF2]">
            View all users
          </button>
        </div>
      </div>

    </div>
  );
}
export default UserManagement;