import React from 'react';

const Step_Verifying = () => {
  return (
    <div className="text-center">
      <h2 className="text-[28px] font-bold text-primary mb-6">
        Almost Done
      </h2>
      <p className="text-primaryLight text-lg font-medium">
        We're verifying your code
      </p>
      
      {/* 6 Boxes with a dot in each */}
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
      
      {/* Button with loading dots */}
      <button
        disabled
        className="w-full px-4 py-3 font-bold text-lg rounded-2xl bg-secondary text-white flex justify-center items-center"
      >
        <span className="w-3 h-3 bg-white rounded-full animate-bounce mx-1" style={{animationDelay: '0s'}}></span>
        <span className="w-3 h-3 bg-white rounded-full animate-bounce mx-1" style={{animationDelay: '0.2s'}}></span>
        <span className="w-3 h-3 bg-white rounded-full animate-bounce mx-1" style={{animationDelay: '0.4s'}}></span>
      </button>
    </div>
  );
};

export default Step_Verifying;