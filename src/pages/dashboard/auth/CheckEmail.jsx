import React, { useState } from 'react';
import logo from '../../../assets/images/Logo.png';
import checkEmail from '../../../assets/images/checkEmail.png';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { adminForgotPassword, confirmResetOtp } from '../../../services/adminAuthService';
import Alert from '../../../components/ui/Alert';

const CheckEmail = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!email) {
      setError('Missing email. Please restart the password reset process.');
      return;
    }
    if (!otp.trim()) {
      setError('Please enter the code sent to your email.');
      return;
    }

    setIsLoading(true);
    try {
      await confirmResetOtp({ email, otp_code: otp.trim() });
      navigate('/dashboard/reset-password', { state: { email } });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = async () => {
    if (!email) {
      setError('Missing email. Please restart the password reset process.');
      return;
    }

    setIsResending(true);
    setMessage('');
    setError('');

    try {
      await adminForgotPassword({ email });
      setMessage('A new code has been sent to your email!');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen p-4 w-[90%] mx-auto">
      <div className="flex mb-6">
        <img src={logo} alt="Flintmall Logo" className="h-10" />
      </div>

      <div className="max-w-[48%] w-full mx-auto items-center justify-center">
        <div className="flex justify-center mb-6">
          <img src={checkEmail} alt="Check Email" className="w-[45%]" />
        </div>

        <h2 className="text-[34px] font-bold text-primary text-center mb-2">Check your email!</h2>
        <p className="text-primaryInput font-medium text-sm text-center mb-6">
          We sent a verification code to {email || 'your email'}. Enter it below to continue.
          Didn't get it? Contact
          <a href="mailto:support@flintmall.com" className="ml-1 hover:underline">
            support@flintmall.com
          </a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter code"
            maxLength={6}
            className="w-full p-3 text-center tracking-[0.5em] text-[18px] border border-[#E7ECF2] bg-[#F7F7F7] text-[#1E1E1E] font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-secondaryLight"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`w-full py-3 bg-primary text-white text-[18.99px] font-semibold rounded-xl hover:bg-[#F5F5F5] hover:text-primary ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'Verify Code'}
          </button>
        </form>

        <a
          href="/"
          onClick={(e) => { e.preventDefault(); handleResendEmail(); }}
          className="flex justify-center items-center font-semibold text-[18.99px] mt-4 p-3 rounded-xl bg-[#F7F7F7] text-[#666666] hover:text-secondary "
        >
          <IoIosArrowBack className="mr-7"/> {isResending ? 'Resending...' : 'Resend Code'}
        </a>

        <Alert type="success" message={message} onClose={() => setMessage('')} />
        <Alert type="error" message={error} onClose={() => setError('')} />
      </div>
    </div>
  );
};

export default CheckEmail;