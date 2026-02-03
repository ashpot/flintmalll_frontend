import React, { useState } from "react";
import { API_ENDPOINTS } from "../../services/api";
import Navbar from '../../components/layout/Navbar'; 
import ForgotPasswordScreen from '../../assets/images/ForgotPasswordScreen.jpg';  
import Step_ChooseMethod from "../../components/forgotPasswordFlow/StepChooseMethod";
import Step_InputIdentifier from "../../components/forgotPasswordFlow/Step_InputIdentifier";
import Step_EnterCode_Forgot from "../../components/forgotPasswordFlow/StepEnterCode";
import Step_EnterNewPassword from "../../components/forgotPasswordFlow/StepNewPassword";
import Step_PasswordChanged from "../../components/forgotPasswordFlow/StepPasswordChanged";

const ForgotPassword = () => {
  const [step, setStep] = useState('chooseMethod'); 
  const [type, setType] = useState('');
  const [target, setTarget] = useState(''); // email or phone string
  const [loading, setLoading] = useState(false);

  const handleFinalReset = async (password) => {
    setLoading(true);
    const payload = {
      type: type,
      target: target,
      password: password,
    };
    const url = API_ENDPOINTS.RESET_PASSWORD_OFFLINE
    console.log(payload)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStep('passwordChanged');
      } else {
        alert("Reset failed. Please check your details.");
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 'chooseMethod':
        return <Step_ChooseMethod onMethodChosen={(m) => {
          setType(m); 
          setStep('inputIdentifier'); 
        }} />;
      
      case 'inputIdentifier':
        return <Step_InputIdentifier 
                  method={type} 
                  onBack={() => setStep('chooseMethod')} 
                  loading={loading}
                  onNext={async (value) => {
                    setTarget(value);
                    const url = type === 'email' ? API_ENDPOINTS.SEND_RESET_OTP_EMAIL : API_ENDPOINTS.SEND_RESET_OTP_PHONE;
                    const bodyContent = type === 'email' ? JSON.stringify({ email: target }) : JSON.stringify({ phone: target });
                    console.log(bodyContent)
                    try {
                      setLoading(true)
                      const response = await fetch(url, {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: bodyContent,
                      })
                      if(response.status === 404) {
                        alert('user not found')
                      }
                      if(response.ok) {
                        setStep('enterCode')
                      }
                    } catch (error) {
                      console.error("Failed to send OTP", error);
                      alert('network error')
                    } finally{
                      setLoading(false)
                    }
                  }} 
               />;

      case 'enterCode':
        return <Step_EnterCode_Forgot
                target={target}
                isLoading={loading} // Pass loading state
                onBack={() => setStep('inputIdentifier')}
                onVerify={async (otpCode) => {
                  setLoading(true);
                  const url = type === 'email' ? API_ENDPOINTS.CONFIRM_RESET_OTP_EMAIL : API_ENDPOINTS.CONFIRM_RESET_OTP_PHONE
                  try {
                    const response = await fetch(url, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        target: target,
                        otp: otpCode
                      })
                    });

                    if (response.ok) {
                      setStep('enterNewPassword');
                    } else {
                      alert("Invalid OTP. Please try again.");
                    }
                  } catch (error) {
                    console.error("Verification error:", error);
                  } finally {
                    setLoading(false);
                  }
                }}
              />;

      case 'enterNewPassword':
        return <Step_EnterNewPassword 
                  isLoading={loading}
                  onPasswordSet={(pass) => handleFinalReset(pass)} 
               />;

      case 'passwordChanged':
        return <Step_PasswordChanged />;
        
      default:
        return <Step_ChooseMethod onMethodChosen={() => {}} />;
    }
  };

  return (
    <div>
      <Navbar rightContent={<p className='text-black text-lg font-medium'>Back to <a href="/login" className='text-primary font-bold'>Sign In</a></p>} />
      <div className="w-full min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${ForgotPasswordScreen})` }}>
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-lg p-8">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;