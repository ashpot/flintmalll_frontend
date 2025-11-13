
import React, { useState, useEffect } from "react";
import Navbar from '../../components/layout/Navbar';
import SignInScreen from '../../assets/images/SignInScreen.png';
import Step_EnterPhone from "../../components/addPhoneNumber/Step_EnterPhone";
import Step_EnterCode from "../../components/addPhoneNumber/Step_EnterCode";
import Step_Verifying from "../../components/addPhoneNumber/Step_Verifying";
import Step_Complete from "../../components/addPhoneNumber/Step_Complete";

const AddPhoneNumber = () => {
  const [step, setStep] = useState('enterPhone'); 
  
  const [phoneNumber, setPhoneNumber] = useState('');
  
  useEffect(() => {
    if (step === 'verifying') {
      // Simulate an API call
      const timer = setTimeout(() => {
        setStep('complete'); 
      }, 2000); 
      return () => clearTimeout(timer);
    }
  }, [step]); 

  const renderStep = () => {
    switch (step) {
      case 'enterPhone':
        return (
          <Step_EnterPhone 
            onContinue={(phone) => {
              setPhoneNumber(phone);
              setStep('enterCode');
            }} 
          />
        );
      case 'enterCode':
        return (
          <Step_EnterCode 
            phoneNumber={phoneNumber}
            onVerify={() => setStep('verifying')}
            onBack={() => setStep('enterPhone')} 
          />
        );
      case 'verifying':
        return <Step_Verifying />;
      case 'complete':
        return <Step_Complete />;
      default:
        return <Step_EnterPhone onContinue={() => {}} />;
    }
  };

  return (
    <div>
        <Navbar 
            rightContent={<a href="/signup" className='text-black text-lg font-medium'>Already have an account? <span className='text-primary'>Sign In</span></a>}
        />

        <div
            className="pt-10 w-full h-screen bg-cover bg-center flex flex-col" 
                style={{
                    backgroundImage:
                    "url(" + SignInScreen + ")",
                }}
            >

            <div className="flex flex-1 items-center justify-center px-4">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-[40%] mx-auto p-8">
                  {renderStep()}
                </div>
            </div>

            <footer className="flex flex-col md:flex-row justify-between w-full max-w-6xl mx-auto text-white text-sm pb-6 px-6">
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

export default AddPhoneNumber;