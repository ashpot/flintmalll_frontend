import React from 'react';
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md';

const ContactDetails = ({ email, phone, address }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm">
    <h2 className="text-lg md:text-[28px] font-semibold mb-4 text-[#1E1E1E]">Contact Details</h2>
    <div className="space-y-4 grid grid-cols-1 text-xs">
      
      <div className="flex  space-x-3">
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
          <MdOutlinePhone size={20}  className="text-white font-bold" />
        </div>
        <div>
          <span className="md:text-sm font-semibold text-[#666666]">Phone Number</span>
          <p className="md:text-lg font-semibold text-[#1E1E1E]">{phone}</p>
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

export default ContactDetails;