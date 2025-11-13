import React, { useState } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaCreditCard, FaUniversity, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { BiSolidCopy } from "react-icons/bi";;

// Content for the Card Payment Tab
const CardPayment = () => {
  return (
    <div>
      {/* Email Address */}
      <div className="mb-8 space-y-2">
        <label htmlFor="email" className="block text-lg text-[#1E1E1E] font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="jogndoe@mail.com"
          className="w-full p-3 text-primaryLight font-medium text-lg border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Card Information */}
      <div className="mb-8 space-y-2">
        <label className="block text-lg text-[#1E1E1E] font-medium mb-2">Card Information</label>
        
        {/* Card Number field with icons */}
        <div className="relative mb-3 text-primaryLight font-medium text-lg">
          <input
            type="text"
            placeholder="Card number"
            className="w-full p-3 pl-4 pr-24 bg-[#E7ECF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-primaryLight placeholder:font-medium placeholder:text-lg"
          />
          <div className="absolute inset-y-0 right-4 flex items-center space-x-2">
            <FaCcVisa size={24} className="text-blue-900" />
            <FaCcMastercard size={24} className="text-red-600" />
          </div>
        </div>
        
        {/* MM/YY and CVV fields */}
        <div className="flex space-x-3 text-primaryLight font-medium text-lg">
          <input
            type="text"
            placeholder="MM/YY"
            className="w-1/2 p-3 bg-[#E7ECF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-primaryLight placeholder:font-medium placeholder:text-lg"
          />
          <input
            type="text"
            placeholder="CVV"
            className="w-1/2 p-3 bg-[#E7ECF2] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-primaryLight placeholder:font-medium placeholder:text-lg"
          />
        </div>
      </div>

      {/* Cardholder Name */}
      <div className="mb-8 space-y-2">
        <label htmlFor="cardholderName" className="block text-lg text-[#1E1E1E] font-medium mb-1">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardholderName"
          placeholder="John Doe" 
          className="w-full p-3 text-primaryLight font-medium text-lg border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Pay Now Button */}
      <button className="w-full bg-primary text-lg text-white font-bold py-3 rounded-lg shadow-md hover:text-primary hover:bg-[#E7ECF2] transition-colors">
        Pay Now
      </button>
    </div>
  );
};

// Content for the Bank Transfer Tab
const BankTransferPayment = () => {
  // Simple copy to clipboard function
  const handleCopy = () => {
    navigator.clipboard.writeText("1234567890")
      .then(() => alert("Account number copied!"))
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <div>
      <p className="text-[#1E1E1E] font-medium text-lg mb-8">
        Transfer the <strong className='font-bold'>₦15,000.00</strong> from your bank to the account below.
      </p>

      {/* Bank Details Box */}
      <div className="bg-[#F2F2F2] rounded-lg p-6 mb-6">
        <div className="mb-4">
          <span className="block text-lg font-medium text-[#666666] pb-2">Bank Name</span>
          <span className="block text-2xl font-bold text-[#1E1E1E]">First Bank of Nigeria</span>
        </div>
        
        <div className="mb-4">
          <span className="block text-lg font-medium text-[#666666] pb-2">Account Number</span>
          <div className="flex justify-between items-center">
            <span className="block text-2xl font-bold text-[#1E1E1E]">1234567890</span>
            <button 
              onClick={handleCopy} 
              className="flex items-center space-x-1.5 text-lg bg-white font-bold text-[#666666] hover:text-blue-600 p-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <BiSolidCopy />
              <span>Copy</span>
            </button>
          </div>
        </div>
        
        <div>
          <span className="block text-lg font-medium text-[#666666] pb-2">Account Name</span>
          <span className="block text-2xl font-bold text-[#1E1E1E]">FlintMall Ltd.</span>
        </div>
      </div>

      {/* Warning Box */}
      <div className="border border-[#FFC53B] bg-[#FDF4E1] rounded-xl px-4 py-5 mb-8">
        <p className="text-lg font-medium text-[#C99507] mb-2">Ensure you send the amount indicated only once.</p>
        <p className="text-lg font-medium text-[#C99507]">This account will expire in 58 minutes 38 seconds. Do not save for future use.</p>
      </div>

      {/* Button */}
      <button className="w-full bg-primary text-lg text-white font-bold py-3 rounded-lg shadow-md hover:text-primary hover:bg-[#E7ECF2] transition-colors">
        I have made the transfer
      </button>
    </div>
  );
};

const PaymentMethod = () => {
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
				<span>Payment</span>
			</div>
		</header>

		<main className="w-[70%] mx-auto rounded-2xl bg-white p-6 sm:p-8 shadow-lg">
      
			{/* Tab Switcher */}
			<div className="bg-gray-100 p-2 rounded-xl flex justify-between items-center mb-10">
				<span className="text-base md:text-2xl font-semibold text-primary pl-4">
				Payment Method
				</span>
				<div className="flex space-x-1 sm:space-x-2 ">
					<button 
						onClick={() => setActiveTab('card')}
						className={`${tabStyle} ${activeTab === 'card' ? activeTabStyle : inactiveTabStyle}`}
					>
						<FaCreditCard />
						<span>Card </span>
					</button>
					<button 
						onClick={() => setActiveTab('bank')}
						className={`${tabStyle} ${activeTab === 'bank' ? activeTabStyle : inactiveTabStyle}`}
					>
						<FaUniversity />
						<span>Bank Transfer</span>
					</button>
				</div>
			</div>

			{/* Amount Section (Common) */}
			<div className="mb-10 space-y-3 border-b border-[#CFD9E4] pb-6">
				<span className="text-lg text-[#1E1E1E] font-medium">Amount to pay:</span>
				<p className="text-4xl font-bold text-primary">₦15,000.00</p>
			</div>

			{/* Conditional Content */}
			<div>
				{activeTab === 'card' ? <CardPayment /> : <BankTransferPayment />}
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

export default PaymentMethod
