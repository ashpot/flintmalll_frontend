import React, { useState } from 'react';
import logo from '../../../assets/images/Logo.png';
import forgotPassword from '../../../assets/images/forgotpassword.png';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { adminForgotPassword } from '../../../services/adminAuthService';
import Alert from '../../../components/ui/Alert';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      setIsLoading(false);
      return;
    }

    try {
      await adminForgotPassword({ email });
      setMessage("Reset code sent to your email.");
      setTimeout(() => {
        navigate('/dashboard/check-email', { state: { email } });
      }, 800);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 w-[90%] mx-auto">
      <div className="flex mb-6">
		    <img src={logo} alt="Flintmall Logo" className="h-10" />
      </div>

      <div className="max-w-md w-full mx-auto items-center justify-center">

        <div className="flex justify-center mb-6">
			    <img src={forgotPassword} alt="Forgot Password" className='w-[50%]' />
        </div>

        {/* Title and Description */}
        <h2 className="text-[34px] font-bold text-primary text-center mb-2">Forgot your password?</h2>
        <p className="text-primaryInput font-medium text-sm text-center mb-6">Enter your email so that we can send you password reset link</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full p-3 text-[16.61px] border border-[#E7ECF2] bg-[#F7F7F7] text-[#666666] font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryLight placeholder:text-[#666666] ${
                error ? 'border-red-500' : ''
              }`}
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-[#F5F5F5] hover:text-primary ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Email'}
          </button>
        </form>

        {/* Back to Login */}
        <a
          href="/dashboard/signin"
          className="flex justify-center items-center font-semibold text-[18.99px] mt-4 p-3 rounded-md bg-[#F7F7F7] text-[#666666] hover:text-secondary "
        > <IoIosArrowBack className='mr-7'/> Back to login
        </a>

        <Alert type="success" message={message} onClose={() => setMessage('')} />
        <Alert type="error" message={error} onClose={() => setError('')} />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;