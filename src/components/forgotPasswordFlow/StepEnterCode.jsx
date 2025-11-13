import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const Step_EnterCode_Forgot = ({ target, onVerified, onBack }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState(47); 
  const [error, setError] = useState('');
  const [isVerified, setIsVerified] = useState(false); 
  const inputsRef = useRef([]);

  // Timer logic (stops when verified)
  useEffect(() => {
    if (timer > 0 && !isVerified) { 
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer, isVerified]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (isNaN(value) || isVerified) return; // Ignore input if verified

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError(''); 

    // Focus next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
    
    // Automatically check when the last digit is entered
    if (index === 5 && value) {
      handleVerify(newOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    if (isVerified) return;
    // Focus previous input on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Function to handle verification
  const handleVerify = (code) => {
     if (code.length < 6) {
      setError('Please enter a valid code.');
      return;
    }
    
    // --- Mock verification ---
    console.log("Verifying code:", code);
    if (code === "123456") { // Fake correct code
      setError('');
      setIsVerified(true);
      // Automatically move to the next step after a short delay
      setTimeout(() => {
          onVerified();
      }, 1000); // 1 second delay
    } else {
      setError('Please enter a valid code.'); // Show error
      setOtp(new Array(6).fill('')); // Clear OTP on error
      inputsRef.current[0].focus(); // Focus first input
    }
  };

  // Check if all 6 boxes are filled
  const isFilled = otp.every(digit => digit !== '');

  return (
    // Use your layout structure
    <div className=""> 
      {/* Back Button with your styling */}
      <button onClick={onBack} className="text-[#708CAF] float-left bg-white p-2 rounded-full mr-5">
        <MdOutlineArrowBackIos size={20} />
      </button>
      {/* Heading with your styling */}
      <h2 className="text-[28px] font-bold text-primary mb-6 text-center"> 
        Enter Code
      </h2>
      {/* Subheading with your styling */}
      <p className="text-primaryLight text-base font-medium mb-6 text-center"> 
        Please enter the code we sent to {target}.
      </p>

      {/* Form with your styling */}
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleVerify(otp.join('')); }}>
        {/* OTP Boxes with your styling */}
        <div className="flex justify-between"> 
          {otp.map((data, index) => (
            <div 
              key={index}
              className={`w-12 h-12 relative border bg-white rounded-lg ${
                error ? 'border-red-500' : (isVerified || data ? 'border-secondary' : 'border-[#9FB3C9]') // Use 'secondary' for filled/verified
              }`}
            >
              <input
                type="tel"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                disabled={isVerified} // Disable input when verified
                className="w-full h-full text-center text-2xl font-semibold text-transparent bg-transparent outline-none caret-transparent" // Hide text and caret
              />
              {/* The Dot with your styling */}
              {(data || isVerified) && ( // Show dot if filled or verified
                <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${
                  error ? 'bg-red-500' : 'bg-secondary' // Use 'secondary' for dot
                }`}></span>
              )}
            </div>
          ))}
        </div>
        
        {error && <p className="text-red-500 text-sm -mt-2 text-center">{error}</p>}
        {isVerified && <p className="text-green-600 font-semibold text-sm -mt-2 text-center">Verified</p>}

        {/* Verify Button (Hidden when verified, per design 142928) */}
        {!isVerified && (
           <button
            type="submit"
            disabled={!isFilled} // Keep disabled logic
            className={`w-full px-4 py-3 font-semibold text-lg rounded-2xl text-white transition ${
              isFilled 
                ? 'bg-secondary hover:bg-secondaryLight' // Use your active colors
                : 'bg-cyan-200 cursor-not-allowed' // Use your disabled color
            }`}
          >
            Verify
          </button>
        )}

        {/* Timer/Resend/Other Options with your styling */}
        <div className="text-base text-primaryLight text-center font-medium pt-2">
          {timer > 0 && !isVerified ? (
            <span>You can resend code in <span className="font-bold text-primaryLight">00:{timer < 10 ? `0${timer}` : timer}</span></span>
          ) : !isVerified ? (
            <span>Didn't receive code? <button type="button" className="font-bold text-primaryLight hover:underline">Resend</button></span>
          ) : null } {/* Hide timer/resend when verified */}
          {!isVerified && ( // Show "Other options" only if not verified
             <p className="mt-2"><button type="button" className="font-medium text-primaryLight hover:underline">Other verification Options</button></p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Step_EnterCode_Forgot;