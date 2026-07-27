import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import profilepicture from '../../assets/images/profilePhoto.png';
import { getStoredAdminUser } from '../../services/adminAuthService';

function ProfileSettings() {
  const navigate = useNavigate();
  const user = getStoredAdminUser();

  const fullName = [user?.first_name, user?.last_name].filter(Boolean).join(' ').trim() || user?.username || 'Admin';

  return (
    <div className="bg-gray-100 min-h-screen font-sans pb-10">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 bg-white p-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <button onClick={() => navigate(-1)} className="text-[#1E1E1E] text-2xl mr-8"><IoArrowBackSharp /> </button>
          <div>
            <h1 className="font-bold text-[#1E1E1E] text-[29px]">Settings</h1>
            <p className="font-semibold text-[#666666] text-base">Review and manage your information.</p>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-start w-[90%] mx-auto'>
        {/* Left Panel - Profile Info */}
        <div className="p-6 bg-white rounded-lg w-2/3 ">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="font-bold text-[#1E1E1E] text-[29px]">Profile</h1>
            </div>
          </div>

          <div className="p-4 mb-6">
            <h2 className="text-[23px] text-[#1E1E1E] font-bold mb-4">General</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold text-[#666666] text-base">First Name</p>
                <p className="font-bold text-[#1E1E1E] text-lg">{user?.first_name || '—'}</p>
              </div>
              <div>
                <p className="font-semibold text-[#666666] text-base">Last Name</p>
                <p className="font-bold text-[#1E1E1E] text-lg">{user?.last_name || '—'}</p>
              </div>
              <div>
                <p className="font-semibold text-[#666666] text-base">Username</p>
                <p className="font-bold text-[#1E1E1E] text-lg">@{user?.username || '—'}</p>
              </div>
              <div>
                <p className="font-semibold text-[#666666] text-base">Email Address</p>
                <p className="font-bold text-[#1E1E1E] text-lg">{user?.email || '—'}</p>
              </div>
            </div>
          </div>

          {/* Additional profile/contact fields (phone, address, socials, password change) require a
              dedicated admin profile endpoint that doesn't exist in the current API docs yet. */}
          <div className="p-4 border-t border-[#E5E5E5]">
            <h2 className="text-[23px] text-[#1E1E1E] font-bold mb-2">Contact & Additional Details</h2>
            <p className="text-sm text-[#666666]">
              Not available yet — the backend doesn't currently expose an endpoint for phone, address,
              or social contact details for admin accounts. This section will populate once that's added.
            </p>
          </div>
        </div>

        {/* Right Panel - Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center w-[25%] relative">
          <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"></div>

          <div className="w-24 h-24 mx-auto mb-4">
            <img src={profilepicture} alt="Profile" className="w-full h-full rounded-full object-cover" />
          </div>

          <div className="mb-4 border-b pb-4">
            <h2 className="text-lg font-semibold flex justify-center items-center">
              {fullName} <RiVerifiedBadgeFill className='ml-2 text-yellow-500' />
            </h2>
            <p className="text-sm text-gray-600">@{user?.username || '—'}</p>
            <p className="text-sm text-gray-600">Admin</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center text-black">
              <span>{user?.email || '—'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;