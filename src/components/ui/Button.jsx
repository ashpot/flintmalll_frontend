
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Button = ({ buttonTitle, linkTo }) => { 
  const navigate = useNavigate();

  const handleClick = () => {
    if (linkTo) { 
      navigate(linkTo);
    }
  };

  return (
    <div className="flex justify-center mb-10">
      <button
        onClick={handleClick} 
        className="text-white md:text-lg font-semibold bg-primary p-5 rounded-3xl shadow hover:text-primary hover:bg-[#E7ECF2]"
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default Button;