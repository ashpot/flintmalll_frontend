import React from 'react';
import { MdOutlineEmail, MdOutlineSms } from 'react-icons/md';

const Step_ChooseMethod = ({ onMethodChosen }) => {
  // Mock data - In a real app, you'd get this based on the user's account
  const email = 'b********n8@mail.com';
  const phone = '2348********8';

  const handleSelect = (method, target) => {
    // Here you would trigger the API call to send the code
    console.log(`Sending code via ${method} to ${target}`);
    onMethodChosen(method, target);
  };

  return (
    <div className="">
      <h2 className="text-[28px] font-bold text-primary mb-2">
        Reset your password
      </h2>
      <p className="text-[#1E1E1E] text-lg font-medium mb-6">
        For your security, we need to make sure it’s really you.
      </p>
      
      <div className="space-y-4 text-left">
        <p className="font-bold text-lg text-[#1E1E1E]">Choose a verification method</p>
        
        {/* Email Option */}
        <button
          onClick={() => handleSelect('email', email)}
          className="w-full flex items-center space-x-3 p-4 bg-white rounded-xl border border-[#CFD9E4] hover:border-secondary hover:bg-cyan-50 transition text-left" 
          >
          <MdOutlineEmail size={24} className="text-black flex-shrink-0" /> 
          <div className='flex flex-col'>
            <span className="font-semibold text-lg text-black mr-2">Email me</span> 
            <span className="text-sm font-medium text-[#666666]">{email}</span>
          </div>
        </button>
        
        {/* Text Option */}
        <button 
          onClick={() => handleSelect('text', phone)}
          className="w-full flex items-center space-x-3 p-4 bg-white rounded-xl border border-[#CFD9E4] hover:border-secondary hover:bg-cyan-50 transition text-left"
        >
          <MdOutlineSms size={24} className="text-black flex-shrink-0" />
          <div className='flex flex-col'>
            <span className="font-semibold text-lg text-black mr-2">Text me</span>
            <span className="text-sm font-medium text-[#666666]">{phone}</span>
          </div>
        </button>
      </div>

      <p className="text-sm font-medium text-[#1E1E1E] text-left mt-6">
        By requesting a text you confirm that this is your number and consent to receive an automated text. Message or data rates may apply.
      </p>
    </div>
  );
};

export default Step_ChooseMethod;