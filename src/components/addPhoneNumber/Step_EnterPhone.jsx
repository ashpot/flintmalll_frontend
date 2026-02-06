import React, { useState } from 'react';
import { API_ENDPOINTS } from '../../services/api';
import { MdOutlineArrowBackIos } from 'react-icons/md'; 
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../../css/phoneInput.css';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/Utils';

const Step_EnterPhone = ({ onContinue }) => {
  const navigate = useNavigate();
  const inputClasses = cn("mt-1 w-full px-4 py-3 font-medium sm:text-lg text-base text-[#708CAF] border border-white", 
                                "focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none rounded-xl sm:rounded-2xl ")
  const [phone, setPhone] = useState('');
  
  const isValid = phone && phone.length > 10; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.SEND_PHONE_OTP, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phone })
      });

      if (response.ok) {
        const formattedPhone = `${phone}`;
        onContinue(formattedPhone);
      }
    } catch (err) {
      console.error("Failed to send OTP", err);
    }
    
  };

  return (
    <div className="pt-5">
		<div className='relative fle justify-between items-center'>
			<button 
				className="absolute text-base sm:text-lg font-bold -top-10 text-[#708CAF] p-2 hover:underline hover:cursor-pointer" 
        onClick={()=>navigate("/")}
				disabled
			>
				Skip
			</button>
			
			{/* The title will now be centered in the remaining space */}
			<h2 className="sm:text-3xl text-xl font-bold text-center text-primary mb-7 text-center">
				Add your phone number
			</h2>
      <div></div>
		</div>
      
      <p className="text-primaryLight font-medium text-base text-left mb-6">
        By selecting Continue, you agree to receive a text message with a security code. 
        Standard rates may apply.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        
        <div className="phone-input-container"> 
          <PhoneInput
            international
            defaultCountry="NG" 
            placeholder="Phone Number" 
            value={phone}
            onChange={setPhone}
            className="w-full font-medium sm:text-base text-sm text-primary placeholder:text-gray-400 outline-none" 
          />
        </div>

        <p className="text-sm font-medium  text-[#1E1E1E] text-left pt-2">
          By selecting Continue, you agree to receive a text message with a security code. Standard rates may apply.
        </p>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full px-4 py-3 font-bold text-lg rounded-2xl text-white transition ${
            isValid 
              ? 'bg-secondary hover:bg-secondaryLight' // Active color
              : 'bg-cyan-200 cursor-not-allowed' // Disabled color
          }`}
        > 
          Continue
        </button>
      </form>
    </div>
  );
};

export default Step_EnterPhone;