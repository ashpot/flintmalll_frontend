import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'; 

const Navbar = ({ centerContent, rightContent }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-24 py-4 md:py-8 shadow-sm bg-white">
      
      <div onClick={() => navigate('/')} className="cursor-pointer z-20">
        <img src={Logo} alt="Logo" className="w-32 md:w-[40%]" />
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div>{centerContent}</div>
        <div>{rightContent}</div>
      </div>

      <div className="md:hidden z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary" 
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiOutlineX size={30} />
          ) : (
            <HiOutlineMenuAlt3 size={30} />
          )}
        </button>
      </div>

      {isOpen && (
        <div 
          className="
            md:hidden absolute top-full left-0 w-full 
            bg-white shadow-lg p-6 z-10
            border-t border-gray-100
          "
        >
          <div className="flex flex-col items-center gap-6">
            <div>{centerContent}</div>
            <div>{rightContent}</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
