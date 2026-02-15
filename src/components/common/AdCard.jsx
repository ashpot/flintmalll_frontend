import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { FaCrown } from 'react-icons/fa';
import { IoLocationOutline, IoCubeOutline, IoEyeOutline } from 'react-icons/io5'; // <-- Added footer icons
import { API_ENDPOINTS } from '../../services/api';

const AdCard = ({
  id,
  image,
  title,
  price,
  city,
  state,
  condition,
  timePosted,
  views,
  isVerified,
  adType = 'trending', 
}) => {
  
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
  //   const handleFavoriteSave = async()=>{
  //   const token = localStorage.getItem('authToken');
  //   try {
  //     const response = await fetch(API_ENDPOINTS.SAVE_AD(id), {
  //       method: "GET",
  //       headers:{
  //         "Content-Type": "application/json",
  //         Authorization: `Token ${token}`
  //       }
  //     })
  //     const data = await response.json();
  //     if(response.ok){
  //       alert(`${data.message}` || 'ad saved successfully')
  //     }else{
  //       alert('internal error saving ads')
  //     }
  //   } catch (error) {
  //     alert('error from catch block')
  //   }
  // }

  //   if (isFavorite) {
  //     handleFavoriteSave();
  //   }
    const checkIfAdIsSaved = async()=>{
      const token = localStorage.getItem('authToken');
      try {
          const response = await fetch(API_ENDPOINTS.CHECK_AD_SAVED(id), {
            method: "GET",
            headers: {
              "Content-Type":"application/json",
              Authorization: `Token ${token}`
            }
          })
          const data = await response.json();
          if (response.ok) {
            setIsFavorite(data.is_saved)
          }else{
            console.log('error checking for saved ad')
          }
      } catch (error) {
        console.log('network error checking saved ad')
      }
    }
    checkIfAdIsSaved();
  }, []);
  
  const handleCardClick = () => {
    navigate(`/product-details/${id}`);
  };
  
  // const handleFavoriteClick = (e) => {
  //   e.stopPropagation();
  //   setIsFavorite(prev=> !prev);
  // };

  const isPremium = adType === 'premium';
  
  const priceColor = isPremium ? 'text-[#FDB813]' : 'text-secondary';
  const bottomBorderColor = isPremium ? 'border-b-[#FDB813]' : 'border-b-secondary';

  const formattedPrice = `₦${Number(price).toLocaleString()}`;

  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer border border-gray-200 border-b-4 ${bottomBorderColor}`}
      onClick={handleCardClick}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        {isVerified && (
          <span className="absolute top-3 left-3 bg-[#E5F9FE] text-[#33CBF5] text-xs font-medium px-2.5 py-1 rounded-full flex items-center shadow">
            Verified
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {/* <button
            onClick={handleFavoriteClick}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-100"
            aria-label="Favorite"
          >
            {isFavorite ? (
              <IoMdHeart className="w-5 h-5 text-secondary" />
            ) : (
              <IoMdHeartEmpty className="w-5 h-5 text-gray-700" />
            )}
          </button> */}
          <div className="bg-white rounded-full p-2 shadow hover:bg-gray-100">
            {isFavorite && <IoMdHeart className="w-5 h-5 text-secondary" />}
          </div>

          {isPremium && (
            <div
              className="bg-[#FDF4E1] rounded-full p-2 shadow"
              aria-label="Premium Ad"
            >
              <FaCrown className="w-5 h-5 text-[#FDB813]" />
            </div>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        
        <h3 className="md:text-base text-[#1E1E1E] font-semibold mb-2 min-h-[3.5rem]" title={title}>
          {title}
        </h3>
        
        <p className={`font-bold text-xl mb-3 ${priceColor}`}>
          {formattedPrice}
        </p>

        {/* --- 2. THE FIX: UPDATED FOOTER --- */}
        <div className="border-t border-[#E5E5E5] pt-3 mt-auto">
          {/* Line 1: Location | Condition */}
          <div className="flex justify-between items-center font-medium text-[#666666] text-sm mb-2">
            <span className="flex items-center">
              <IoLocationOutline className="mr-1.5" />
              {city}, {state}
            </span>
            <span className="flex items-center">
              <IoCubeOutline className="mr-1.5" />
              {condition}
            </span>
          </div>
          
          {/* Line 2: Time Posted | Views */}
          <div className="flex justify-between items-center font-medium text-[#666666] text-sm">
            <span>{new Date(timePosted).toDateString()}</span>
            <span className="flex items-center">
              <IoEyeOutline className="mr-1.5" />
              {views} views
            </span>
          </div>
        </div>
        {/* --- END OF FIX --- */}

      </div>
    </div>
  );
};

export default AdCard;