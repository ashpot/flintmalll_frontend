import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { API_ENDPOINTS } from '../../services/api';

const Step_EnterCode = ({ phoneNumber, onVerify, onBack }) => {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [timer, setTimer] = useState(47); // From your screenshot
  const [error, setError] = useState('');
  const [resend, setResend] = useState(false)
  const inputsRef = useRef([]);

  // Timer logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (isNaN(value)) return; 

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only allow one digit
    setOtp(newOtp);
    setError(''); // Clear error on new input

    // Focus next input
    if (value && index < 4) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Focus previous input on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const code = otp.join('');
  const userId = localStorage.getItem('currentUser')
  try {
    const payload = {
      phone: phoneNumber,
      user_id: userId.user.id,
      otp: code,
    }
    const response = await fetch(API_ENDPOINTS.VERIFY_PHONE_OTP, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      onVerify(); // Move to verifying/complete screen
    } else {
      setError('Invalid code. Please try again.');
    }
  } catch (err) {
    setError('Server error. Try again later.');
  }
};


  // Check if all 4 boxes are filled
  const isFilled = otp.every(digit => digit !== '');
const handleResendOtp = async (e) => {
  e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.RESEND_PHONE_OTP, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phoneNumber })
      });
      if (response.ok) {
        setTimer(47);
        setError('');  
        setOtp(new Array(4).fill(''));
    } else {
      setError("Failed to resend code. Try again.");
    }
    } catch (err) {
      console.error("Failed to send OTP", err);
    }
    
  };

  return (
    <div className="">
      <button onClick={onBack} className="text-[#708CAF] float-left bg-white p-2 rounded-full mr-5">
        <MdOutlineArrowBackIos size={20} />
      </button>
      <h2 className="text-[28px] font-bold text-primary mb-6">
        Enter Code
      </h2>
      <p className="text-primaryLight text-base font-medium mb-6">
        Please enter the code we sent to {phoneNumber}.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* OTP Boxes */}
        <div className="flex justify-between">
          {otp.map((data, index) => (
            <div 
              key={index}
              className={`w-12 h-12 relative border bg-white rounded-lg ${
                error ? 'border-red-500' : (data ? 'border-secondary' : 'border-[#9FB3C9]')
              }`}
            >
              <input
                type="tel"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                className="w-full h-full text-center text-2xl font-semibold text-transparent bg-transparent outline-none caret-transparent" // Hide text and caret
              />
              {/* The Dot */}
              {data && (
                <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
                  error ? 'bg-red-500' : 'bg-secondary'
                }`}></span>
              )}
            </div>
          ))}
        </div>
        
        {error && <p className="text-red-500 text-sm -mt-2">{error}</p>}

        {/* Verify Button */}
        <button
          type="submit"
          disabled={!isFilled}
          className={`w-full px-4 py-3 font-semibold text-lg rounded-2xl text-white transition ${
            isFilled 
              ? 'bg-secondary hover:bg-secondaryLight' // Active color
              : 'bg-cyan-200 cursor-not-allowed' // Disabled color
          }`}
        >
          Verify
        </button>

        {/* Timer/Resend */}
        <div className="text-base text-primaryLight text-center font-medium">
          {timer > 0 ? (
            <span>You can resend code in <span className="font-bold text-primaryLight">00:{timer < 10 ? `0${timer}` : timer}</span></span>
          ) : (
            <span>Didn't receive code? <button type="button" onClick={(e)=>{handleResendOtp(e)}} className="font-bold text-primaryLight hover:underline">Resend</button></span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Step_EnterCode;