import React, { useState } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaCreditCard, FaUniversity, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { BiSolidCopy } from "react-icons/bi";;



const PaymentSuccessful = () => {
    const [activeTab, setActiveTab] = useState('card'); // 'card' or 'bank'

  // Common styles for tabs
    const tabStyle = "flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 rounded-lg text-lg font-semibold transition-colors";
    const activeTabStyle = "bg-primary text-white shadow-md"; // Active is blue
    const inactiveTabStyle = "text-gray-600 hover:bg-gray-200";

  return (
    <div className="bg-[#F7F7F7] min-h-screen flex flex-col">
        <header className="text-[28px] font-bold p-6 mb-6 bg-white text-primary">
            <div className='max-w-[90%] mx-auto relative flex justify-center items-center'>
                <MdOutlineArrowBackIos className='absolute left-0 cursor-pointer' />
                <span>Payment Successful</span>
            </div>
        </header>

        <main className="w-[70%] mx-auto rounded-2xl bg-white p-6 sm:p-8 shadow-lg">
      
            {/* Amount Section (Common) */}
            <div className="mb-10 space-y-3 text-center pb-6">
                <span className="text-lg text-[#1E1E1E] font-medium">Your payment was successful</span>
                
            </div>

            

        </main>

        <footer className='max-w-[90%] mx-auto w-full pt-9 pb-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
            <p className='font-medium text-sm mb-4 md:mb-0'>&copy; 2025 Flintmall. All Rights Reserved</p>
            <div className='font-medium text-sm space-x-5'>
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
            </div>
        </footer>

      
    </div>
  )
}

export default PaymentSuccessful
