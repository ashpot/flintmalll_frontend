import React, { useState } from 'react'
import { IoChevronDown, IoClose } from 'react-icons/io5';
import { cn } from '../../lib/Utils';

const ReportModal = ({onClose}) => {
    const [des, setDes] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedReason, setSelectedReason] = useState("")
    const reasons = [
        "Wrong Category",
        "Seller asks for prepayment",
        "User is unreachable",
        "This is illegal/fraudulent",
        "This ad is spam",
        "The price is wrong",
        "Other",
    ];
  return (
    // modal overlay
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    {/* modal container */}
    <div className='relative bg-white rounded-3xl w-[90%] max-w-md p-8 space-y-7'>
        <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-300 hover:text-gray-500"
        >
            <IoClose size={30} />
        </button>
        <h1 className='font-bold text-xl'>Report Abuse</h1>
            
        <hr className="" />
        {/* trigger reasons dropdown */}
         <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn("w-full flex items-center justify-between border border-[#CFD9E4]",
                 "rounded-t-xl px-4 py-3 font-semibold text-[#666666]", isOpen ? "rounded-t-xl" : "rounded-xl")}
            >
            <span>
                {selectedReason || "Select Reason"}
            </span>

            <IoChevronDown
                size={25}
                className={`transition-transform ${
                isOpen ? "rotate-180" : ""
                }`}
            />
        </button>
        <div className="">
            <textarea
                rows="4"
                name="description"
                placeholder="Describe why you are reporting this ad."
                className={cn("w-full border border-[#CFD9E4] text-[#666666] sm:text-lg text-base font-semibold sm:rounded-2xl",
                            "focus:ring-2 focus:ring-secondary outline-none rounded-xl p-3 sm:p-3 px-1.5 py-2 resize-none"
                 )}
                maxLength="500"
                value={des}
                onChange={(e)=>setDes(e.target.value)}
            />
            <p className="text-xs text-right text-gray-400">{des?.length || 0}/500 characters</p>
        </div>

        <button 
            className="w-full bg-[#CC071E] hover:bg-[#CC071E]/80 text-white font-semibold py-4 rounded-2xl transition">
            Report Abuse
        </button>
         {/* Dropdown */}
        {isOpen && (
            <div className="absolute max-w-[85%] top-[10.5rem] w-full bg-white border border-[#CFD9E4] rounded-b-xl shadow-lg z-10 overflow-hidden">
            {reasons.map((reason) => (
                <button
                key={reason}
                type="button"
                onClick={() => {
                    setSelectedReason(reason);
                    setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-lg font-medium"
                >
                {reason}
                </button>
            ))}
            </div>
        )}

    </div>
       
    </div>
  )
}

export default ReportModal;
