import React, { useState } from 'react';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

const Step_EnterNewPassword = ({ onPasswordSet }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Basic Validation
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    console.log("Setting new password:", password);
    onPasswordSet(); // Move to the success screen
  };

  return (
    <div className="text-center">
      {/* Heading with your styling */}
      <h2 className="text-[28px] font-bold text-primary mb-3"> 
        Enter New password
      </h2>
      {/* Subheading with your styling */}
      <p className="text-primaryLight text-base font-medium mb-6"> 
        Make sure it's alphanumeric
      </p>

      {/* Form with your styling */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* New Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // Use your input styling
            className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none pr-10" 
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-[#708CAF]" // Match placeholder color
          >
            {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Password" // Design shows 'Password' again
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            // Use your input styling
            className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none pr-10"
          />
          <button 
            type="button" 
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-[#708CAF]" // Match placeholder color
          >
            {showConfirmPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
          </button>
        </div>
        
        {error && <p className="text-red-500 text-sm text-left">{error}</p>}

        {/* Continue Button with your styling */}
        <button
          type="submit"
          className="w-full px-4 py-3 font-semibold text-lg rounded-2xl bg-secondary hover:bg-secondaryLight text-white transition mt-6" 
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Step_EnterNewPassword;