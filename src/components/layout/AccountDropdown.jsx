import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LuCircleUserRound } from 'react-icons/lu';
import { IoSettingsOutline, IoPowerOutline } from 'react-icons/io5';
import UserAvatar from '../../assets/images/profilePhoto.png';

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));  
  const isAuthenticated = currentUser !== null;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authToken");
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <div
        className="flex items-center gap-2 text-[#1E1E1E] hover:text-secondary cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LuCircleUserRound size={27} />
        <span>My Account</span>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-60 bg-white rounded-2xl shadow-lg z-20 border border-gray-100 p-3">
          <ul>
            {/* IF USER IS LOGGED IN */}
            {isAuthenticated ? (
              <>
                {/* User Header */}
                <li>
                  <div className="flex items-center gap-3 p-2 rounded-lg">
                    <img
                      src={currentUser.photo_url || UserAvatar}
                      alt="User"
                      className="w-10 h-10 border border-primaryDull rounded-full bg-gray-200 object-cover"
                    />
                    <span className="text-lg font-semibold text-[#666666]">
                      {currentUser.first_name} {currentUser.last_name}
                    </span>
                  </div>
                </li>

                {/* Account Settings */}
                <li>
                  <Link
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <IoSettingsOutline size={24} />
                    <span className="text-sm">Account Settings</span>
                  </Link>
                </li>

                {/* Sign Out */}
                <li>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-4 p-2 w-full rounded-lg hover:bg-gray-100"
                  >
                    <IoPowerOutline size={24} />
                    <span className="text-sm">Sign out</span>
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* IF USER IS NOT LOGGED IN */}
                <li>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <LuCircleUserRound size={24} />
                    <span className="text-sm">Sign In</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <IoSettingsOutline size={24} />
                    <span className="text-sm">
                      Create Account</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
