import React, { useState, useEffect } from "react";
import Navbar from '../../components/layout/Navbar';
import SignInScreen from '../../assets/images/SignInScreen.png';
import Step_EnterPhone from "../../components/addPhoneNumber/Step_EnterPhone";
import Step_EnterCode from "../../components/addPhoneNumber/Step_EnterCode";
import Step_Verifying from "../../components/addPhoneNumber/Step_Verifying";
import Step_Complete from "../../components/addPhoneNumber/Step_Complete";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/Utils";
import SmallFooter from "../../components/layout/SmallFooter";
import SkipModal from "../../components/modals/SkipModal";

const AddPhoneNumber = () => {
  const [step, setStep] = useState('enterPhone'); 
  const [openModal, setOpenModal] = useState(false);
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  
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
            openModal={()=>{setOpenModal(true)}}
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
    <div className="relative">
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
                <div className={cn("bg-white/80 backdrop-blur-md rounded-2xl shadow-xl lg:w-[40%] md:w-[55%] sm:w-[70%] w-full mx-auto",
            "md:p-10 p-6"
          )}>
                  {renderStep()}
                </div>
            </div>
            {/* skip modal */}
            {openModal && <SkipModal onClose={()=>setOpenModal(false)}/>}
            <SmallFooter />
        </div>
    </div>
  );
};

export default AddPhoneNumber;