import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step_Complete = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to your landing page
    navigate('/'); 
  };

  return (
    <div className="text-center">
      <h2 className="text-[28px] font-bold text-primary mb-6">
        Verification Complete
      </h2>
      <p className="text-primaryLight text-lg font-medium">
        Please click Continue to go to your dashboard.
      </p>
      
      {/* 6 Dots */}
      <div className="flex justify-between my-10">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="w-12 h-12 relative rounded-xl bg-white shadow flex items-center justify-center"
          >
            {/* The Dot */}
            <span className="w-3 h-3 bg-secondary rounded-full"></span>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleContinue}
        className="w-full px-4 py-3 font-bold text-lg rounded-2xl bg-secondary hover:bg-secondaryLight text-white transition"
      >
        Continue
      </button>
    </div>
  );
};

export default Step_Complete;