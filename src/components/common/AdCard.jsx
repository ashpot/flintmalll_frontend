// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaMapMarkerAlt, FaCheck, FaEye } from 'react-icons/fa'; // Example icons
// import { MdFavoriteBorder, MdVerified } from 'react-icons/md'; // Example icons

// // 2. Add 'id' to the destructured props
// const AdCard = ({ /*id, */ image, title, price, location, condition, timePosted, views, isVerified }) => {
//   const navigate = useNavigate(); // 3. Get the navigate function

//   const handleClick = () => {
//     // 4. Navigate to the product details page using the ad's ID
//     navigate(`/productdetails`); 
//   };

//   // Helper to format price if needed
//   const formattedPrice = typeof price === 'number' ? `₦${price.toLocaleString()}` : price;

//   return (
//     // 5. Add onClick handler and cursor-pointer to the main div
//     <div 
//       className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer border border-gray-200"
//       onClick={handleClick} 
//     >
//       <div className="relative">
//         {/* Make sure image fits well */}
//         <img src={image} alt={title} className="w-full h-48 object-cover" /> 
        
//         {/* Verified Badge (Using MdVerified for consistency) */}
//         {isVerified && (
//           <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
//             <MdVerified className="w-4 h-4 mr-1" /> 
//             Verified
//           </span>
//         )}
        
//         {/* Favorite Button */}
//         <button 
//           onClick={(e) => { e.stopPropagation(); /* Add favorite logic here */ console.log('Favorite clicked'); }} 
//           className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
//         >
//           <MdFavoriteBorder className="w-5 h-5 text-gray-600" />
//         </button>
//       </div>

//       {/* Content Area */}
//       <div className="p-4 flex flex-col flex-grow"> {/* Added flex-grow */}
//         <h3 className="text-lg text-[#1E1E1E] font-semibold mb-1 truncate" title={title}> {/* Added truncate */}
//             {title}
//         </h3>
//         <p className="text-primary font-bold text-xl mb-2"> {/* Matched your color, changed size */}
//             {formattedPrice}
//         </p>
        
//         {/* Location & Condition */}
//         <div className="flex justify-between items-center text-gray-600 text-sm mb-3 pt-2 border-t border-gray-100"> 
//           <span className="flex items-center truncate mr-2"> {/* Added truncate */}
//             <FaMapMarkerAlt className="w-4 h-4 mr-1 text-gray-400 flex-shrink-0" />
//             {location}
//           </span>
//           <span className="flex items-center flex-shrink-0 bg-gray-100 px-2 py-0.5 rounded text-xs"> {/* Added styling */}
//             <FaCheck className="w-3 h-3 mr-1 text-gray-400" /> 
//             {condition}
//           </span>
//         </div>
        
//         {/* Time Posted & Views */}
//         <div className="flex justify-between items-center text-gray-500 text-xs mt-auto"> {/* Added mt-auto to push to bottom */}
//           <span>Posted {timePosted}</span>
//           <span className="flex items-center">
//             <FaEye className="w-4 h-4 mr-1 text-gray-400" /> 
//             {views}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdCard;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
// import { FaCrown } from 'react-icons/fa';

// const AdCard = ({
//   id,
//   image,
//   title,
//   price,
//   location,
//   condition,
//   timePosted,
//   views,
//   isVerified,
//   adType = 'trending', // Default to 'trending'
// }) => {
//   const navigate = useNavigate();
//   const [isFavorited, setIsFavorited] = useState(false);

//   const handleCardClick = () => {
//     navigate(`/productdetails/${id}`);
//   };

//   const handleFavoriteClick = (e) => {
//     e.stopPropagation();
//     setIsFavorited(!isFavorited);
//   };

//   const isPremium = adType === 'premium';
  
//   const priceColor = isPremium ? 'text-[#FDB813]' : 'text-secondary';
  
//   const bottomBorderColor = isPremium ? 'border-b-[#FDB813]' : 'border-b-secondary';

//   const formattedPrice = `₦${Number(price).toLocaleString()}`;

//   return (
//     <div
//       className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col cursor-pointer border border-gray-200 border-b-4 ${bottomBorderColor}`}
//       onClick={handleCardClick}
//     >
//       <div className="relative">
//         <img src={image} alt={title} className="w-full h-48 object-cover" />

//         {/* Verified Badge */}
//         {isVerified && (
//           <span className="absolute top-3 left-3 bg-[#E5F9FE] text-[#33CBF5] text-xs font-medium px-2.5 py-1 rounded-full flex items-center shadow">
//             Verified
//           </span>
//         )}

//         {/* Icon Buttons */}
//         <div className="absolute top-3 right-3 flex flex-col gap-2">
//           {/* Favorite Button */}
//           <button
//             onClick={handleFavoriteClick}
//             className="bg-white rounded-full p-2 shadow hover:bg-gray-100"
//             aria-label="Favorite"
//           >
//             {isFavorited ? (
//               <IoMdHeart className="w-5 h-5 text-secondary" />
//             ) : (
//               <IoMdHeartEmpty className="w-5 h-5 text-gray-700" />
//             )}
//           </button>

//           {/* Premium Crown Icon (Conditional) */}
//           {isPremium && (
//             <div
//               className="bg-[#FDF4E1] rounded-full p-2 shadow"
//               aria-label="Premium Ad"
//             >
//               <FaCrown className="w-5 h-5 text-[#FDB813]" />
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="p-4 flex flex-col flex-grow">
        
//         <h3 className="text-base text-[#1E1E1E] font-medium mb-2 min-h-[3.5rem]" title={title}>
//           {title}
//         </h3>
        
//         <p className={`font-bold text-xl mb-3 ${priceColor}`}>
//           {formattedPrice}
//         </p>

//         <div className="border-t border-gray-100 pt-3 mt-auto">
//           <div className="flex justify-between items-center text-gray-500 text-xs mb-2">
//             <span>{location}</span>
//             <span>{timePosted}</span>
//           </div>
//           <div className="flex justify-between items-center text-gray-500 text-xs">
//             <span>{condition}</span>
//             <span>{views} views</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdCard;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// 1. IMPORT THE ICONS YOU NEEDED
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { FaCrown } from 'react-icons/fa';
import { IoLocationOutline, IoCubeOutline, IoEyeOutline } from 'react-icons/io5'; // <-- Added footer icons

const AdCard = ({
  id,
  image,
  title,
  price,
  location,
  condition,
  timePosted,
  views,
  isVerified,
  adType = 'trending', // Default to 'trending'
}) => {
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);

  const handleCardClick = () => {
    navigate(`/productdetails/${id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const isPremium = adType === 'premium';
  
  // Your colors are correct
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

        {/* Your Verified Badge - Corrected */}
        {isVerified && (
          <span className="absolute top-3 left-3 bg-[#E5F9FE] text-[#33CBF5] text-xs font-medium px-2.5 py-1 rounded-full flex items-center shadow">
            Verified
          </span>
        )}

        {/* Your Icon Buttons - Corrected */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={handleFavoriteClick}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-100"
            aria-label="Favorite"
          >
            {isFavorited ? (
              <IoMdHeart className="w-5 h-5 text-secondary" />
            ) : (
              <IoMdHeartEmpty className="w-5 h-5 text-gray-700" />
            )}
          </button>

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
              {location}
            </span>
            <span className="flex items-center">
              <IoCubeOutline className="mr-1.5" />
              {condition}
            </span>
          </div>
          
          {/* Line 2: Time Posted | Views */}
          <div className="flex justify-between items-center font-medium text-[#666666] text-sm">
            <span>{timePosted}</span>
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