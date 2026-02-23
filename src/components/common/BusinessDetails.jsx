import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import profilePhoto from '../../assets/images/profilePhoto.png';
import { MdOutlineReportProblem } from 'react-icons/md';
import { useContext } from "react";
import { OpenModalContext, OpenReportModalContext } from '../../pages/productDetails/Context';


const BusinessDetails = ({seller}) => {
    const isBusiness = seller.type && seller.type === 'Business';
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const isCurrentUserPost = currentUser.user.id === seller.id
    const { setIsOpen } = useContext(OpenModalContext);
    const { setOpenReport } = useContext(OpenReportModalContext);

    const handleOpenModal = ()=>{
      setIsOpen(true);
    }
    const handleOpenReportModal = ()=>{
      setOpenReport(true)
    }
    
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
            <img
              src={seller.photo_url || profilePhoto}
              alt="seller"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Seller Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h2 className="sm:text-2xl text-xl font-bold text-gray-800 capitalize">
                {isBusiness ? seller.business_name : `${seller.first_name} ${seller.last_name}`}
              </h2>

              {/* Verified Badge */}
              {seller.is_verified && <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-300 text-green-600 text-sm font-medium">
                <FaCheckCircle />
                Verified
              </div>}
              
            </div>
                {seller.address && <p className="text-gray-500 mt-1"></p>}
            

            {/* Response Time */}
            <div className="flex items-center gap-2 text-green-600 mt-2">
              <span className="hidden sm:block w-3 h-3 bg-green-600 rounded-full" />
              <span className="font-medium sm:text-base text-sm">
                Typically replies in a few minutes.
              </span>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        {!isCurrentUserPost && 
        <>
          <button 
          onClick={handleOpenModal}
          className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 rounded-2xl transition">
          Contact Seller
        </button>
        <button 
          onClick={handleOpenReportModal}
          className="border border-[#CC071E] flex justify-center items-center gap-2 mt-6 w-full hover:bg-[#CC071E] hover:text-white text-[#CC071E] font-semibold py-4 rounded-2xl transition">
          <MdOutlineReportProblem size={25} />
          Report Abuse
        </button>
        </>}
        
      </div>

  )
}

export default BusinessDetails;
