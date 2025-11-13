import React, { useState } from "react";
import Navbar from '../../components/layout/Navbar'; 
import ForgotPasswordScreen from '../../assets/images/ForgotPasswordScreen.jpg';	
import Step_ChooseMethod from "../../components/forgotPasswordFlow/StepChooseMethod";
import Step_EnterCode_Forgot from "../../components/forgotPasswordFlow/StepEnterCode";
import Step_EnterNewPassword from "../../components/forgotPasswordFlow/StepNewPassword";
import Step_PasswordChanged from "../../components/forgotPasswordFlow/StepPasswordChanged";	

const ForgotPassword = () => {
  const [step, setStep] = useState('chooseMethod'); 
  const [verificationTarget, setVerificationTarget] = useState(''); 
  const [verificationMethod, setVerificationMethod] = useState(''); 

  const renderStep = () => {
    switch (step) {
      case 'chooseMethod':
        return (
          <Step_ChooseMethod 
            onMethodChosen={(method, target) => {
              setVerificationMethod(method);
              setVerificationTarget(target);
              setStep('enterCode');
            }} 
          />
        );
      case 'enterCode':
        return (
          <Step_EnterCode_Forgot
            method={verificationMethod}
            target={verificationTarget}
            onVerified={() => setStep('enterNewPassword')}
            onBack={() => setStep('chooseMethod')} 
          />
        );
      case 'enterNewPassword':
        return (
          <Step_EnterNewPassword
            onPasswordSet={() => setStep('passwordChanged')}
            onBack={() => setStep('enterCode')} // Or maybe 'chooseMethod'? Design doesn't show back here.
          />
        );
      case 'passwordChanged':
        return <Step_PasswordChanged />;
      default:
        return <Step_ChooseMethod onMethodChosen={() => {}} />;
    }
  };

  return (
    <div>
      <Navbar 
        rightContent={<p className='text-black text-lg font-medium'>Back to <a href="/login" className='text-primary font-bold'>Sign In</a></p>}
      />

      <div
        className="pt-20 w-full h-[100%] bg-cover bg-center flex flex-col" 
        style={{ backgroundImage: "url(" + ForgotPasswordScreen + ")" }}
      >
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-[45%] mx-auto p-8">
            {renderStep()}
          </div>
        </div>

        <footer className="flex flex-col md:flex-row justify-between w-full max-w-6xl mx-auto text-black font-medium text-lg pb-6 px-6 mt-10">
          <p>&copy; FlintMall. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ForgotPassword;