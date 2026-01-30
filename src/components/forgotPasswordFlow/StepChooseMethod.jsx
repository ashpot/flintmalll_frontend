import React from 'react';
import { MdOutlineEmail, MdOutlineSms } from 'react-icons/md';

const Step_ChooseMethod = ({ onMethodChosen }) => {
  const buttonClass = 'w-full flex items-center space-x-3 p-4 bg-white rounded-xl border border-[#CFD9E4] hover:border-secondary hover:bg-cyan-50 transition text-left';
  const iconClass = 'text-black flex-shrink-0';
  const methodNameClass = 'font-semibold text-lg text-black mr-2';
  const methodInfo = 'text-sm font-medium text-[#666666]';
  return (
    <div>
      <h2 className="text-[28px] font-bold text-primary mb-2">Reset your password</h2>
      <p className="text-[#1E1E1E] text-lg font-medium mb-6">Choose a verification method</p>
      
      <div className="space-y-4">
        <button onClick={() => onMethodChosen('phone')} className={buttonClass}>
          <MdOutlineSms size={24} className={iconClass} />
          <div className='flex flex-col'>
            <span className={methodNameClass}>Via SMS</span>
            <span className={methodInfo}>You wil be prompted to enter your
              Flintmall account phone number
            </span>
          </div>
        </button>
        
        <button onClick={() => onMethodChosen('email')} className={buttonClass}>
          <MdOutlineEmail size={24} className={iconClass} />
          <div className='flex flex-col'>
            <span className={methodNameClass}>Via Email</span>
            <span className={methodInfo}>You will be prompted to enter your Flintmall account email address</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Step_ChooseMethod;