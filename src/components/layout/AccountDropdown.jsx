import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LuCircleUserRound } from 'react-icons/lu';
import { IoSettingsOutline, IoPowerOutline } from 'react-icons/io5';
import UserAvatar from '../../assets/images/profilePhoto.png'; 

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    console.log('User signing out...');
    setIsOpen(false);
    navigate('/login'); 
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 text-[#1E1E1E] hover:text-secondary cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} 
      >
        <LuCircleUserRound size={27} />
        <span>My Account</span>
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-60 bg-white rounded-2xl shadow-lg z-20 border border-gray-100 p-3">
          <ul className="">
            <li>
              <p
                className="flex items-center gap-3 p-2 rounded-lg"
              >
                <img
                  src={UserAvatar}
                  alt="User"
                  className="w-10 h-10 border border-primaryDull rounded-full bg-gray-200 object-cover"
                />
                <span className="text-lg font-semibold text-[#666666]">
                  Bruno Benson
                </span>
              </p>
            </li>

            {/* Account Settings */}
            <li>
              <Link
                to="/profile" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100"
              >
                <IoSettingsOutline size={24} className="text-[#1E1E1E]" />
                <span className="text-sm text-[#1E1E1E]">Account Settings</span>
              </Link>
            </li>

            {/* Sign out */}
            <li>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-4 p-2 w-full rounded-lg hover:bg-gray-100"
              >
                <IoPowerOutline size={24} className="text-[#1E1E1E]" />
                <span className="text-sm text-[#1E1E1E]">Sign out</span>
              </button>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;