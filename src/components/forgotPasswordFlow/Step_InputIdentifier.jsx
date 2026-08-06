import React, { useRef, useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';


const Step_InputIdentifier = ({ method, onNext, onBack, loading}) => {
  const [value, setValue] = useState('');
  return (
    <div className="text-left">
      <button onClick={onBack} className="mb-4 p-2 bg-white rounded-full shadow-md"><MdOutlineArrowBackIos /></button>
      <h2 className="text-2xl font-bold text-primary mb-4">Enter your {method}</h2>
      <input
        type={method === 'email' ? 'email' : 'tel'} 
        className="w-full p-4 border rounded-xl mb-6 outline-none focus:ring-2 ring-secondary"
        placeholder={method === 'email' ? 'yourmail@example.com' : 'phone number'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
          type="submit"
          onClick={()=>{onNext(value)}}
          disabled={loading}
          className={`w-full px-4 py-3 font-medium text-lg rounded-2xl text-white transition
            ${loading ? "bg-secondary/60 cursor-not-allowed" : "bg-secondary hover:bg-secondaryLight"}`}
        >
          {loading ? (
            <div className="flex justify-center items-center gap-2">
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              Continue
            </div>
          ) : (
            "Continue"
          )}
        </button>
    </div>
  );
};

export default Step_InputIdentifier;