// import React from 'react';
// import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn, MdOutlineStorefront, MdLanguage } from 'react-icons/md';

// const BusinessInfo = ({ email, phone, address, socials, website }) => (
//   <div className="bg-white p-6 rounded-2xl shadow-sm">
//     <h2 className="text-[28px] font-semibold mb-4 text-[#1E1E1E]">Business Information</h2>

//     <div className='flex justify-between'>
//       <div className="grid grid-cols-1 gap-4">
        
//         <div className="flex space-x-3">
//           <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mb-2">
//             <MdOutlineEmail size={20} className="text-white" />
//           </div>
          
//           <div>
//             <span className="text-sm font-semibold text-[#666666]">Email</span>
//             <p className="text-lg font-semibold text-[#1E1E1E]">{email}</p>
//           </div>
//         </div>
        
//         <div className="flex space-x-3">
//           <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mb-2">
//             <MdOutlinePhone size={20}  className="text-white font-bold" />
//           </div>
//           <div>
//             <span className="text-sm font-semibold text-[#666666]">Phone Number</span>
//             <p className="text-lg font-semibold text-[#1E1E1E]">{phone}</p>
//           </div>
//         </div>
      
//         <div className="flex space-x-3">
//           <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mb-2">
//             <MdOutlineLocationOn size={20}  className="text-white" />
//           </div>
//           <div>
//             <span className="text-sm font-semibold text-[#666666]">Address</span>
//             <p className="text-lg font-semibold text-[#1E1E1E]">{address}</p>
//           </div>
//         </div>
        
//       </div>

//       <div className='grid grid-cols-1 gap-4'>
//         <div className="flex space-x-3">
//           <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mb-2">
//             <MdLanguage size={20} className="text-white" />
//           </div>
//           <div>
//             <span className="text-sm font-semibold text-[#666666]">Website</span>
//             <p className="text-lg font-semibold text-[#1E1E1E]">{website}</p>
//           </div>
//         </div>

//         <div className="flex space-x-3">
//           <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mb-2">
//             <MdOutlineStorefront size={20} className="text-white" />
//           </div>
//           <div>
//             <span className="text-sm font-semibold text-[#666666]">Socials</span>
//             <p className="text-lg font-semibold text-[#1E1E1E]">{socials}</p>
//           </div>
//         </div>

//       </div>

//     </div>
    
   
//   </div>
// );

// export default BusinessInfo;

import React from 'react';
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn, MdOutlineStorefront, MdLanguage } from 'react-icons/md';

const BusinessInfo = ({ email, phone, address, socials, website }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm">
    <h2 className="text-lg md:text-[28px] font-semibold mb-4 text-[#1E1E1E]">Business Information</h2>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-xs'>
      
      <div className="flex space-x-3">
        <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mb-2">
          <MdOutlineEmail size={20} className="text-white" />
        </div>
        <div>
          <span className="md:text-sm font-semibold text-[#666666]">Email</span>
          <p className="md:text-lg font-semibold text-[#1E1E1E]">{email}</p>
        </div>
      </div>

      <div className="flex space-x-3">
        <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mb-2">
          <MdOutlineStorefront size={20} className="text-white" />
        </div>
        <div>
          <span className="md:text-sm font-semibold text-[#666666]">Socials</span>
          <p className="md:text-lg font-semibold text-[#1E1E1E]">{socials}</p>
        </div>
      </div>
      
      <div className="flex space-x-3">
        <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mb-2">
          <MdOutlinePhone size={20}  className="text-white font-bold" />
        </div>
        <div>
          <span className="md:text-sm font-semibold text-[#666666]">Phone Number</span>
          <p className="md:text-lg font-semibold text-[#1E1E1E]">{phone}</p>
        </div>
      </div>

      <div className="flex space-x-3">
        <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mb-2">
          <MdLanguage size={20} className="text-white" />
        </div>
        <div>
          <span className="md:text-sm font-semibold text-[#666666]">Website</span>
          <p className="md:text-lg font-semibold text-[#1E1E1E]">{website}</p>
        </div>
      </div>
    
      <div className="flex space-x-3">
        <div className="w-12 h-12 flex items-center justify-center bg-[#285386] rounded-2xl mb-2">
          <MdOutlineLocationOn size={20}  className="text-white" />
        </div>
        <div>
          <span className="md:text-sm font-semibold text-[#666666]">Address</span>
          <p className="md:text-lg font-semibold text-[#1E1E1E]">{address}</p>
        </div>
      </div>

    </div>
  </div>
);

export default BusinessInfo;