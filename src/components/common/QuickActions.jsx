// import React from 'react';
// import { MdOutlineLogout } from 'react-icons/md';
// import { PiPlusBold } from "react-icons/pi";
// import { TbListCheck } from "react-icons/tb";
// import { TbEdit } from "react-icons/tb";
// import { RiHeart3Line } from "react-icons/ri";

// const QuickActions = () => (
//   <div className="bg-white p-6 rounded-2xl shadow-sm">
//     <h2 className="text-[28px] font-semibold mb-4 text-[#1E1E1E]">Quick Actions</h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
//       <button className="flex items-center justify-center space-x-2 bg-secondary text-white text-lg font-bold py-3 px-4 rounded-xl hover:bg-secondaryLight transition">
//         <PiPlusBold size={20} />
//         <span>Post New Ad</span>
//       </button>

//       <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-primary text-lg font-bold py-3 px-4 rounded-xl hover:bg-[#CFD9E4] transition">
//         <TbEdit size={20} />
//         <span>Edit Profile</span>
//       </button>

//       <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-primary text-lg font-bold py-3 px-4 rounded-xl hover:bg-[#CFD9E4] transition">
//         <TbListCheck size={20} />
//         <span>Manage Ads</span>
//       </button>

//       <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-primary text-lg font-bold py-3 px-4 rounded-xl hover:bg-[#CFD9E4] transition">
//         <RiHeart3Line size={20} />
//         <span>Saved Items</span>
//       </button>

//     </div>
//     <div className="mt-6 w-[60%] mx-auto">
      
//       <button className="flex items-center justify-center space-x-2 w-full bg-white border border-[#FF3030] text-[#FF3030] text-lg font-bold py-3 px-4 rounded-xl hover:bg-[#FF3030] hover:text-white transition">
//         <MdOutlineLogout size={20} />
//         <span>Sign out</span>
//       </button>
      
//     </div>
//   </div>
// );

// export default QuickActions;


import React from 'react';
// 1. Import Link from react-router-dom
import { Link } from 'react-router-dom'; 

import { MdOutlineLogout } from 'react-icons/md';
import { PiPlusBold } from "react-icons/pi";
import { TbListCheck } from "react-icons/tb";
import { TbEdit } from "react-icons/tb";
import { RiHeart3Line } from "react-icons/ri";

const QuickActions = () => {

  const handleSignOut = () => {
    console.log("User signed out");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-lg md:text-[28px] font-semibold mb-4 text-[#1E1E1E]">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <Link
          to="/post-ad" 
          className="flex items-center justify-center space-x-2 bg-secondary text-white text-sm md:text-lg font-bold py-3 px-4 rounded-xl hover:bg-secondaryLight transition"
        >
          <PiPlusBold size={20} />
          <span>Post New Ad</span>
        </Link>

        <Link
          to="/edit-profile" 
          className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-primary text-sm md:text-lg font-bold py-3 px-4 rounded-xl hover:bg-[#CFD9E4] transition"
        >
          <TbEdit size={20} />
          <span>Edit Profile</span>
        </Link>

        <Link
          to="/manage-ads" 
          className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-primary text-sm md:text-lg font-bold py-3 px-4 rounded-xl hover:bg-[#CFD9E4] transition"
        >
          <TbListCheck size={20} />
          <span>Manage Ads</span>
        </Link>

        <Link
          to="/saved-items" 
          className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-primary text-sm md:text-lg font-bold py-3 px-4 rounded-xl hover:bg-[#CFD9E4] transition"
        >
          <RiHeart3Line size={20} />
          <span>Saved Items</span>
        </Link>

      </div>
      <div className="mt-6 w-[60%] mx-auto">
        <button
          onClick={handleSignOut}
          className="flex items-center justify-center space-x-2 w-full bg-white border border-[#FF3030] text-[#FF3030] text-sm md:text-lg font-bold py-3 px-4 rounded-xl hover:bg-[#FF3030] hover:text-white transition"
        >
          <MdOutlineLogout size={20} />
          <span>Sign out</span>
        </button>
        
      </div>
    </div>
  );
};

export default QuickActions;