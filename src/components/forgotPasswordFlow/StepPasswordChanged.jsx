import React from 'react';
import { useNavigate } from 'react-router-dom';
import passwordChanged from '../../assets/images/passwordChanged.png';

const Step_PasswordChanged = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">

      <h2 className="text-[28px] font-bold text-primary mb-3">
        Password Changed!
      </h2>
      <p className="text-[#1E1E1E] font-medium text-lg mb-8">
        Your password has been reset successfully
      </p>

      <div className="mx-auto mb-6 flex items-center justify-center ">
         <img src={passwordChanged} alt="password changed image" />
      </div>
      
      <button
        onClick={() => navigate('/login')} 
        className="w-full px-4 py-3 font-semibold text-lg rounded-2xl bg-secondary hover:bg-secondaryLight text-white transition"
      >
        Back to Sign In
      </button>
    </div>
  );
};

export default Step_PasswordChanged;