// import React, { useState } from 'react';
// import { MdOutlineArrowBackIos } from 'react-icons/md';
// import Stepper from '../../components/postAd/Stepper';
// import PostAdLanding from '../../components/postAd/PostAdLanding'
// import Navbar from '../../components/layout/Navbar';
// import { LuCircleUserRound } from "react-icons/lu";
// import { IoIosNotifications } from "react-icons/io";
// import Footer from '../../components/layout/Footer';
// import Step2_Photos from '../../components/postAd/Step2Photos';
// import Step3_Details from '../../components/postAd/Step3Details';
// import Step4_Promote from '../../components/postAd/Step4PromoteAd';
// import Step5_Review from '../../components/postAd/Step5Review';
// import Step_SubmissionSuccess from '../../components/postAd/StepSubmissionSuccess';

// const PostAdFlow = () => {
//   const [step, setStep] = useState(1);

//   // --- State Management Functions ---
//   const nextStep = () => {
//     if (step < 5) {
//       window.scrollTo(0, 0); // Scroll to top on step change
//       setStep(step + 1);
//     }
//   };

//   const prevStep = () => {
//     if (step > 1) {
//       window.scrollTo(0, 0); // Scroll to top on step change
//       setStep(step - 1);
//     }
//   };

//   const clearForm = () => {
//     // You can also reset any form data state here
//     setStep(1);
//   };

//   // --- This function renders the correct step component ---
//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return <PostAdLanding onNext={nextStep} />; 
//       case 2:
//         return <Step2_Photos onNext={nextStep} onBack={prevStep} />;
// 	    case 3:
// 		    return <Step3_Details onNext={nextStep} onBack={prevStep} />;
// 	    case 4:
// 		    return <Step4_Promote onNext={nextStep} onBack={prevStep} />;
//       case 5:
//         return <Step5_Review onNext={nextStep} onBack={prevStep} />;
//       case 'submitted':
//         return <Step_SubmissionSuccess />;
//       default:
//         return <PostAdLanding onNext={nextStep} />;
//     }
//   };

//   return (
//     <div className="bg-[#F7F7F7] min-h-screen">
//       <Navbar 
//         rightContent={
//           <div className='flex items-center gap-4 space-x-4 text-lg font-medium cursor-pointer'>
//             <IoIosNotifications size={27} className=' text-[#B7B7B7]' />
//             <LuCircleUserRound size={27} className='' />
//             My Account
//           </div>
//         }
//       />
//       <div className="bg-white px-6 rounded-2xl shadow-sm my-8 py-8 max-w-4xl mx-auto">
//         <header className="flex justify-between items-center mb-6 font-bold ">
//           <button 
//       onClick={prevStep} 
//       className={`p-2 rounded-full cursor-pointer ${step === 1 ? 'text-primaryInput hover:text-secondary' : 'text-gray-600 hover:bg-gray-100'}`}
//       disabled={step === 1} // Disable button on step 1
//     >
//       <MdOutlineArrowBackIos size={20} />
//           </button>
//     <h1 className="text-[28px] text-primary">Post Ad</h1>
//           <button onClick={clearForm} className="text-secondary text-lg hover:text-cyan-600">
//             Clear
//           </button>
//         </header>
        
//         <p className="text-[#666666] font-medium text-lg mb-6">Complete the steps below to list your item.</p>
        
//         {/* --- Stepper UI (Always Visible) --- */}
//         <Stepper currentStep={step} />
//       </div>

//       <div className="max-w-7xl mx-auto px-6">
        
//         {renderStep()}
//       </div>

// 	    <Footer />
//     </div>
//   );
// };

// export default PostAdFlow;

import React, { useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import Stepper from '../../components/postAd/Stepper';
import PostAdLanding from '../../components/postAd/PostAdLanding';
import Navbar from '../../components/layout/Navbar';
import { LuCircleUserRound } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import Footer from '../../components/layout/Footer';
import Step2_Photos from '../../components/postAd/Step2Photos';
import Step3_Details from '../../components/postAd/Step3Details';
import Step4_Promote from '../../components/postAd/Step4PromoteAd';
import Step5_Review from '../../components/postAd/Step5Review';
import Step_SubmissionSuccess from '../../components/postAd/StepSubmissionSuccess';
import AccountDropdown from '../../components/layout/AccountDropdown';

// Define the initial state for your whole form (if you haven't already)
const initialFormData = { 
  price: 0,
 };

const PostAdFlow = () => {
  // Step can now be a number (1-5) or the string 'submitted'
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState(initialFormData); // Add state for form data

  // --- State Management Functions ---
  const nextStep = () => {
    // UPDATED: Handle step 5 transition
    if (step === 5) {
      handleSubmitForm(); // Call submission logic
    } else if (step < 5) {
      window.scrollTo(0, 0); 
      setStep(step + 1);
    }
    // No 'else' needed, stays on 'submitted' screen
  };

  const prevStep = () => {
    // UPDATED: Prevent going back from 'submitted'
    if (step > 1 && step <= 5) { // Check if step is a number > 1
      window.scrollTo(0, 0);
      setStep(step - 1);
    }
  };

  // ADDED: Function to jump to a step (for Step 5 edit buttons)
  const goToStep = (stepNumber) => {
    if (step !== 'submitted' && stepNumber >= 1 && stepNumber <= 5) {
      window.scrollTo(0, 0);
      setStep(stepNumber);
    }
  };


  const clearForm = () => {
    setFormData(initialFormData); // Reset form data
    setStep(1); // Go back to step 1
  };

  // ADDED: Submission Logic
  const handleSubmitForm = () => {
    // This is where you would send all `formData` to your backend API
    console.log("FINAL FORM DATA TO SUBMIT:", formData);
    // After successful submission (or simulation):
    setStep('submitted'); // <-- CHANGE STEP TO 'submitted'
    window.scrollTo(0, 0); 
  };

  // --- This function renders the correct step component ---
  const renderStep = () => {
    // Pass formData, setFormData, and goToStep down
    switch (step) {
      case 1:
        return <PostAdLanding 
                  onNext={nextStep} 
                  formData={formData} 
                  setFormData={setFormData} 
                />; 
      case 2:
        return <Step2_Photos 
                  onNext={nextStep} 
                  onBack={prevStep} 
                  formData={formData} 
                  setFormData={setFormData} 
                />;
      case 3:
        return <Step3_Details 
                  onNext={nextStep} 
                  onBack={prevStep} 
                  formData={formData} 
                  setFormData={setFormData} 
                />;
      case 4:
        return <Step4_Promote 
                  onNext={nextStep} 
                  onBack={prevStep} 
                  formData={formData} 
                  setFormData={setFormData} 
                />;
      case 5:
        return <Step5_Review 
                  onNext={nextStep} // Will now call handleSubmitForm
                  onBack={prevStep} 
                  goToStep={goToStep} // Pass the goToStep function
                  formData={formData} 
                  // sellerData={...} // Pass seller data if needed
                />;
      case 'submitted':
        return <Step_SubmissionSuccess />;
      default:
        return <PostAdLanding onNext={nextStep} formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen flex flex-col"> {/* Added flex flex-col */}
      <Navbar 
        rightContent={
          <div className='flex items-center gap-4 space-x-4 text-lg font-medium cursor-pointer'>
            <IoIosNotifications size={27} className=' text-[#B7B7B7]' />
            <AccountDropdown />
                      
          </div>
        }
      />
      
      {/* UPDATED: Conditionally render the header/stepper */}
      {step !== 'submitted' && (
        <div className="bg-white px-6 rounded-2xl shadow-sm my-8 py-8 max-w-4xl mx-auto w-full"> {/* Added w-full */}
          <header className="flex justify-between items-center mb-6 font-bold ">
            <button 
              onClick={prevStep} 
              className={`p-2 rounded-full cursor-pointer ${step === 1 ? 'text-primaryInput hover:text-secondary' : 'text-gray-600 hover:bg-gray-100'}`}
              disabled={step === 1} 
            >
              <MdOutlineArrowBackIos size={20} />
            </button>
            <h1 className="text-[28px] text-primary">Post Ad</h1>
            <button onClick={clearForm} className="text-secondary text-lg hover:text-cyan-600">
              Clear
            </button>
          </header>
          
          <p className="text-[#666666] font-medium text-lg mb-6">Complete the steps below to list your item.</p>
          
          <Stepper currentStep={step} />
        </div>
      )}

      {/* Make main content area grow */}
      <main className="max-w-7xl mx-auto px-6 flex-grow w-full"> {/* Added flex-grow w-full */}
        {renderStep()}
      </main>

      <Footer />
    </div>
  );
};

export default PostAdFlow;