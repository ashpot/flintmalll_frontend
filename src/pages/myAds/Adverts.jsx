import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import iphone from '../../assets/images/iphone.png';
import deleteIcon from '../../assets/images/deleteIcon.png';
import { IoClose } from "react-icons/io5";
import { GrLineChart } from "react-icons/gr";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbClockHour4 } from "react-icons/tb";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Sidebar from '../../components/dashboard/Sidebar';

// --- MODAL
const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-center w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <IoClose size={30} />
        </button>
        <div className="mx-auto flex justify-center">
          <img src={deleteIcon} alt="deleteIcon" />
        </div>
        <h2 className="text-3xl sm:text-4xl text-primary font-semibold my-5">Are you sure?</h2>
        <p className="text-[#708CAF] w-[90%] mx-auto mt-2">
          Do you really want to delete this ad? This process cannot be undone.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between w-[95%] mx-auto mt-8 gap-4">
          <button 
            onClick={onClose} 
            className="w-full sm:w-auto bg-[#9FB3C9] text-white font-bold text-lg py-3 px-8 sm:px-12 rounded-lg hover:bg-[#E7ECF2] hover:text-[#406694]"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="w-full sm:w-auto bg-[#FF3030] text-white font-bold text-lg py-3 px-8 sm:px-12 rounded-lg hover:bg-[#FF5959]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};


// --- CardAds 
const CardAds = ({ ad, status, onDeleteClick }) => {
  const isPublished = status === 'published';

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-10 ">
    
      <div className="flex flex-col md:flex-row gap-4 md:space-x-5">
        
        <img 
          src={iphone} 
          alt={ad.title} 
          className="w-full h-40 object-cover rounded-2xl md:w-28 md:h-28 flex-shrink-0" 
        />
        
        <div className="flex-grow flex flex-col">
          <div className="flex justify-between items-start">
            <div className='space-y-1'>
              <p className="font-semibold text-lg sm:text-2xl">{ad.title}</p>
              
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xl sm:text-[28px] font-semibold">₦{ad.price.toLocaleString()}</p>
                {ad.negotiation && (
                  <span className="bg-[#E5F9FE] border border-[#B2ECFB] text-[#406694] text-xs sm:text-sm font-semibold px-2.5 sm:px-4 py-1 rounded-full">{ad.negotiation}</span>
                )}
                {ad.plan && (
                  <span className="bg-primary border border-primary text-white text-xs sm:text-sm font-semibold px-2.5 sm:px-4 py-1 rounded-full">{ad.plan}</span>
                )}
              </div>
              
              <p className="text-base sm:text-lg font-medium">{ad.category}</p>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
              {isPublished ? (
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Live</span>
              ) : (
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">Under Review</span>
              )}
              <p className="text-xs text-gray-400 mt-2">{ad.timeAgo}</p>
            </div>
          </div>
          
          {!isPublished && (
            <div className="flex items-center bg-[#E5F9FE] text-[#406694] font-medium text-sm sm:text-lg rounded-2xl p-3 my-3">
              <TbClockHour4 size={25} className=" mr-2 flex-shrink-0"/> 
              <span className="leading-tight">Typically approved within 30 - 45 mins</span>
            </div>
          )}

          <div className="mt-auto pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:space-x-3">
            {isPublished && (
              <button className="flex justify-center items-center border border-secondary bg-secondary text-white px-4 py-2 rounded-xl text-base sm:text-lg font-semibold hover:bg-white hover:text-secondary hover:border hover:border-secondary w-full sm:w-auto">
                <GrLineChart className=" mr-2" />
                Promote
              </button>
            )}
            <button className="flex justify-center items-center text-[#406694] border-[#9FB3C9] border px-4 py-2 rounded-xl text-base sm:text-lg font-semibold hover:bg-primary hover:text-white hover:border-primary w-full sm:w-auto">
              <TbEdit className=" mr-2" />
              Edit
            </button>
            <button 
              onClick={() => onDeleteClick(ad.id)}
              className="flex justify-center items-center border border-[#FF5959] text-[#FF3030] px-4 py-2 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#FF3030] hover:text-white hover:border-[#FF3030] w-full sm:w-auto"
            >
              <RiDeleteBinLine className=" mr-2" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- MyAdsPage Component ---
const MyAdsPage = () => {
  const [activeTab, setActiveTab] = useState('published');
  
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const initialPublishedAds = [
    { id: 1, title: 'iPhone 13 Pro - Gold', price: 900000, category: 'Gadgets . Phones', timeAgo: '2 days ago', negotiation: 'Fixed', plan: 'Premium' },
    { id: 2, title: 'iPhone 13 Pro - Gold', price: 750000, category: 'Gadgets . Phones', timeAgo: '6 days ago', negotiation: 'Negotiable', plan: 'Enhanced' },
  ];
  const initialPendingAds = [
    { id: 3, title: 'iPhone 13 Pro - Gold', price: 850000, category: 'Gadgets . Phones', timeAgo: '30 minutes ago', negotiation: 'Negotiable' },
    { id: 4, title: 'iPhone 13 Pro - Gold', price: 750000, category: 'Gadgets . Phones', timeAgo: '1 hour ago', negotiation: 'Fixed', plan: 'Enhanced' },
  ];

  const [publishedAds, setPublishedAds] = useState(initialPublishedAds);
  const [pendingAds, setPendingAds] = useState(initialPendingAds);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adToDelete, setAdToDelete] = useState(null);

  const handleOpenModal = (adId) => {
    setAdToDelete(adId);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setAdToDelete(null);
  };
  const handleConfirmDelete = () => {
    setPublishedAds(prevAds => prevAds.filter(ad => ad.id !== adToDelete));
    setPendingAds(prevAds => prevAds.filter(ad => ad.id !== adToDelete));
    handleCloseModal();
  };

  return (
    <div className="bg-[#F7F7F7] min-h-full">
      <header className="md:text-[28px] font-bold p-6 mb-6 bg-white text-primary">
          <div className='max-w-5xl mx-auto relative flex justify-center items-center px-4 sm:px-0'>
              <MdOutlineArrowBackIos 
                className='absolute left-4 sm:left-0 cursor-pointer' 
                onClick={handleBack} 
              />
              <span>My Ads</span>
          </div>
      </header>

      <div className="flex justify-center mb-8 px-4">
        <div className="bg-[#E7ECF2] p-2 md:p-3 rounded-2xl flex flex-col sm:flex-row gap-2 sm:space-x-10">
          <button
            onClick={() => setActiveTab('published')}
            className={`px-6 md:px-8 py-2  rounded-xl text-lg sm:text-[28px] font-semibold transition-all duration-300 ${
              activeTab === 'published' ? 'bg-secondary border border-[#4CD2F6] shadow text-white' : 'bg-transparent text-[#708CAF]'
            }`}
          >
            Published Ads
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-6 sm:px-8 py-2 rounded-xl text-lg sm:text-[28px] font-semibold transition-all duration-300 ${
              activeTab === 'pending' ? 'bg-secondary border border-[#4CD2F6] text-white shadow' : 'bg-transparent text-[#708CAF]'
            }`}
          >
            Pending Ads
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-0">
        <div className="space-y-4">
          {activeTab === 'published' && publishedAds.map(ad => (
            <CardAds key={ad.id} ad={ad} status="published" onDeleteClick={handleOpenModal} />
          ))}

          {activeTab === 'pending' && pendingAds.map(ad => (
            <CardAds key={ad.id} ad={ad} status="pending" onDeleteClick={handleOpenModal} />
          ))}
        </div>
      </div>
      
      <DeleteModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />

      <footer className='w-[80%] md:max-w-5xl mx-auto pt-9 pb-6 md:flex md:justify-between '>
        <p className='font-medium md:text-lg text-sm mt-5'>&copy; 2025 Flintmall. <span className='ml-2'>All Rights Reserved</span></p>
        <div className='font-medium md:text-lg text-sm mt-5 space-x-5'>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
      </footer>

    </div>
  );
};

export default MyAdsPage;