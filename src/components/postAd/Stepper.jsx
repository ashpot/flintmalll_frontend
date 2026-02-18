import React from 'react';
import { MdCheck } from 'react-icons/md';

// Helper function to get styles
const getStepClass = (stepNumber, currentStep) => {
  if (stepNumber < currentStep) {
    // Completed step
    return 'bg-primary text-white';
  } else if (stepNumber === currentStep) {
    // Active step
    return 'bg-secondary text-white shadow-lg scale-110';
  } else {
    // Future step
    return 'bg-white text-primary border-2 border-primary';
  }
};

const Stepper = ({ currentStep }) => {
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div 
            className={`sm:w-10 sm:h-10 w-8 h-8 rounded-full flex items-center justify-center font-bold sm:text-2xl text-xl transition-all duration-300 ${getStepClass(step, currentStep)}`}
          >
            {step < currentStep ? <MdCheck size={24} /> : step}
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-1 transition-all duration-300 ${step < currentStep ? 'bg-primary' : 'bg-gray-300'}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;