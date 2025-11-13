import React from 'react';
import { BiSolidPhone } from "react-icons/bi";
import { IoMdChatboxes } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const NeedHelp = () => {
  return (
    <div className="my-12 ">
      <h2 className="text-center text-[28px] font-bold text-primary mb-1">Need Help?</h2>
      <p className="text-center font-medium text-lg text-[#666666] mb-6">Our support team is here to help you succeed.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Live Chat */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <IoMdChatboxes size={40} className="text-[#0DAC4F] mb-3 p-2 rounded-xl bg-[#E9FAF1]" />
          <h3 className="font-bold text-lg mb-2">Live Chat</h3>
          <p className="text-base font-medium text-[#666666] mb-4">Chat with our Support team.</p>
          <button className="bg-[#0DAC4F] text-white font-medium text-base py-2 px-6 rounded-2xl hover:bg-green-600">Live Chat</button>
        </div>
        
        {/* Email Support */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <MdEmail size={40} className="text-secondary mb-3 p-2 rounded-xl bg-[#E5F9FE]" />
          <h3 className="font-bold text-lg mb-2">Email Support</h3>
          <p className="text-base font-medium text-[#666666] mb-4">Send us a detailed message.</p>
          <button className="bg-secondary text-white font-medium text-base py-2 px-6 rounded-2xl hover:bg-blue-600">Send Email</button>
        </div>
        
        {/* Phone Support */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <BiSolidPhone size={40} className="text-[#FDB813] mb-3 p-2 rounded-xl bg-[#FEEAB8]" />
          <h3 className="font-bold text-lg mb-2">Phone Support</h3>
          <p className="text-base font-medium text-[#666666] mb-4">Call us during business hours.</p>
          <button className="bg-[#FDB813] text-white font-medium text-base py-2 px-6 rounded-2xl hover:bg-yellow-600">Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;