import React, { useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md'; 
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../../css/phoneInput.css';

const Step_EnterPhone = ({ onContinue }) => {
  const [phone, setPhone] = useState('');
  
  const isValid = phone && phone.length > 10; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const lastFour = phone.slice(-4);
      const formattedPhone = `+${phone.slice(0, -10)} *** *** ${lastFour}`;
      onContinue(formattedPhone);
    }
  };

  return (
    <div className="">
		<div className='relative flex justify-center items-center'>
			{/* Position the button absolutely on the left */}
			<button 
				className="absolute left-0 text-[#708CAF] bg-white p-2 rounded-full cursor-not-allowed" 
				disabled
			>
				<MdOutlineArrowBackIos size={20} />
			</button>
			
			{/* The title will now be centered in the remaining space */}
			<h2 className="text-[28px] font-bold text-primary mb-3 text-center">
				Add your phone number
			</h2>
		</div>
      
      <p className="text-primaryLight font-medium text-base text-left mb-6">
        We’ll text a code to your phone number to finish setting up your account.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        
        <div className="phone-input-container"> 
          <PhoneInput
            international
            defaultCountry="NG" 
            placeholder="Phone Number" 
            value={phone}
            onChange={setPhone}
            className="w-full font-medium text-lg text-primary placeholder:text-gray-400 outline-none" 
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