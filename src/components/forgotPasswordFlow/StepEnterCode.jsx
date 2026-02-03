import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const Step_EnterCode_Forgot = ({ target, onVerify, onBack, isLoading }) => {
  const [otp, setOtp] = useState(new Array(4).fill('')); // Changed to 4 based on your API
  const [timer, setTimer] = useState(47);
  const [error, setError] = useState('');
  const inputsRef = useRef([]);

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
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError('');

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }

    // Auto-submit when last digit is entered
    if (index === 3 && value) {
      onVerify(newOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const isFilled = otp.every(digit => digit !== '');

  return (
    <div className="">
      <button onClick={onBack} className="text-[#708CAF] float-left bg-white p-2 rounded-full mr-5 shadow-sm">
        <MdOutlineArrowBackIos size={20} />
      </button>
      <h2 className="text-[28px] font-bold text-primary mb-6 text-center">Enter Code</h2>
      <p className="text-primaryLight text-base font-medium mb-6 text-center">
        Please enter the 4-digit code sent to <br/><span className="text-primary font-bold">{target}</span>
      </p>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onVerify(otp.join('')); }}>
        <div className="flex justify-center gap-4">
          {otp.map((data, index) => (
            <div key={index} className={`w-14 h-14 relative border bg-white rounded-lg ${error ? 'border-red-500' : (data ? 'border-secondary' : 'border-[#9FB3C9]')}`}>
              <input
                type="tel"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                disabled={isLoading}
                className="w-full h-full text-center text-2xl font-semibold outline-none bg-transparent"
              />
            </div>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={!isFilled || isLoading}
          className={`w-full px-4 py-3 font-semibold text-lg rounded-2xl text-white transition ${
            isFilled && !isLoading ? 'bg-secondary hover:bg-secondaryLight' : 'bg-cyan-200 cursor-not-allowed'
          }`}
        >
          {isLoading ? 'Verifying...' : 'Verify'}
        </button>

        <div className="text-base text-primaryLight text-center font-medium pt-2">
          {timer > 0 ? (
            <span>Resend code in <span className="font-bold">00:{timer < 10 ? `0${timer}` : timer}</span></span>
          ) : (
            <button type="button" className="font-bold text-primary hover:underline">Resend Code</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Step_EnterCode_Forgot;