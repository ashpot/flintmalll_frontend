// import React from 'react';
// import profilePhoto from '../../assets/images/profilePhoto.png';
// import { FaUser } from "react-icons/fa6";
// import { IoIosNotifications } from "react-icons/io";
// import { MdVerified, MdMessage } from 'react-icons/md';

// const ProfileHeader = ({ user }) => {
//   const isBusiness = user.accountType === 'business';

//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center">
//       <div className="flex items-center space-x-4">
//         <img src={profilePhoto} alt={user.name} className="w-16 h-16 rounded-full" />
//         <div>
//           <div className="flex items-center space-x-2">
//             <h1 className="text-[28px] font-semibold text-[#1E1E1E]">{user.name}</h1>
//             {isBusiness ? (
//               <span className="flex items-center space-x-2 border border-[#7EE4A8] bg-[#E9FAF1] text-[#0DAC4F] text-lg font-medium px-2.5 py-1 rounded-full">
//                 <MdVerified />
//                 <span>Verified Business</span>
//               </span>
//              ) : ( 
//               <span className="flex items-center space-x-2 border border-[#80DFF9] bg-[#E5F9FE] text-[#285386] text-lg font-medium px-2.5 py-1 rounded-full">
//                 <FaUser />
//                 <span>Personal</span>
//               </span>
//             )} 
//           </div>
//           <p className="text-lg font-medium text-[#666666]">{user.subtitle}</p>
//         </div>
//       </div>
//       <div className="flex space-x-4">
//         <button className="p-3 bg-[#E7ECF2] rounded-full hover:bg-gray-200 relative">
//           <IoIosNotifications size={28} className="text-[#285386]" />
//           {user.notifications > 0 && (
//             <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
//           )}
//         </button>
//         <button className="p-3 bg-[#E7ECF2] rounded-full hover:bg-gray-200 relative">
//           <MdMessage size={28} className="text-[#285386]" />
//           {user.messages > 0 && (
//              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileHeader;


import React from 'react';
import profilePhoto from '../../assets/images/profilePhoto.png';
import { FaUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { MdVerified, MdMessage } from 'react-icons/md';

const ProfileHeader = ({ user }) => {
  const isBusiness = user.accountType === 'personal';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm 
      flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
    >
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 gap-2 sm:gap-0">
        <img 
          src={profilePhoto} 
          alt={user.name} 
          className="w-16 h-16 rounded-full" 
        />
        <div className="text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-2 gap-1 sm:gap-0">
            <h1 className="text-2xl sm:text-[28px] font-semibold text-[#1E1E1E]">
              {user.name}
            </h1>
            {isBusiness ? (
              <span className="flex items-center space-x-2 border border-[#7EE4A8] bg-[#E9FAF1] text-[#0DAC4F] text-sm sm:text-lg font-medium px-2.5 py-1 rounded-full">
                <MdVerified />
                <span className="hidden sm:inline">Verified Business</span>
              </span>
            ) : ( 
              <span className="flex items-center space-x-2 border border-[#80DFF9] bg-[#E5F9FE] text-[#285386] text-sm sm:text-lg font-medium px-2.5 py-1 rounded-full">
                <FaUser />
                <span className="hidden sm:inline">Personal</span>
              </span>
            )} 
          </div>
          <p className="text-base sm:text-lg font-medium text-[#666666]">
            {user.subtitle}
          </p>
        </div>
      </div>

      <div className="flex space-x-4 justify-center sm:justify-normal">
        <button className="p-3 bg-[#E7ECF2] rounded-full hover:bg-gray-200 relative">
          <IoIosNotifications size={28} className="text-[#285386]" />
          {user.notifications > 0 && (
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          )}
        </button>
        <button className="p-3 bg-[#E7ECF2] rounded-full hover:bg-gray-200 relative">
          <MdMessage size={28} className="text-[#285386]" />
          {user.messages > 0 && (
             <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;