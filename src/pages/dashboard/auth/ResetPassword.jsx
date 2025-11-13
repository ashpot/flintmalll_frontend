
import React, { useState } from 'react';
import logo from '../../../assets/images/Logo.png';
import resetPassword from '../../../assets/images/resetpassword.png';
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
// import { useNavigate, useParams } from "react-router-dom";
// import { adminResetPassword } from "../../services/authService";

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const navigate = useNavigate();

  // ✅ get token from URL param: /resetpassword/:token
//   const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');

    // Client-side validation
    if (!password.trim() || !confirmPassword.trim()) {
      setError('Both password and confirm password are required');
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // try {
    //   const data = await adminResetPassword({
    //     token,
    //     password,
    //     password2: confirmPassword,
    //   });

    //   setMessage(data.success || 'Password has been successfully reset!');
    //   navigate("/securedpassword");
    // } catch (err) {
    //   setError(err.message || 'Failed to reset password');
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="min-h-screen p-4 w-[90%] mx-auto">
      <div className="flex mb-6">
        <img src={logo} alt="BillPro Logo" className="h-10" />
      </div>

      <div className="max-w-md w-full mx-auto items-center justify-center">
        <div className="flex justify-center mb-6">
          <img src={resetPassword} alt="Reset Password" className="w-[45%]" />
        </div>

        {/* Title and Description */}
        <h2 className="text-[34px] font-bold text-primary text-center ">
          Reset your password!
        </h2>
        <p className="text-primaryInput font-medium text-sm text-center mb-6">
          Please kindly set your new password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              className="w-full p-3 text-[16.61px] border-[#E7ECF2] bg-[#F7F7F7] text-[#666666] font-medium text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryLight placeholder:text-[#666666] pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666]"
              aria-label={showPassword ? 'Hide new password' : 'Show new password'}
            >
              {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter Password"
              className="w-full p-3 text-[16.61px] border-[#E7ECF2] bg-[#F7F7F7] text-[#666666] font-medium text-base rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryLight placeholder:text-[#666666] pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666]"
              aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
            >
              {showConfirmPassword ? <IoEyeSharp /> : <FaEyeSlash />}
            </button>
          </div>

          <button
            type="submit"
            className={`w-full py-3 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-[#F5F5F5] hover:text-primary ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Resetting...' : 'Continue'}
          </button>
        </form>

        {message && <p className="text-center text-green-500 mt-4">{message}</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
