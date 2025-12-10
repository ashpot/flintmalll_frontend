import React, { useState } from 'react';
import { MdOutlinePhoneIphone, MdOutlineStorage } from "react-icons/md";
import { RiRam2Fill } from "react-icons/ri";
import { BiSolidError } from "react-icons/bi";
import { FaTag } from "react-icons/fa6";
import { TbBattery3Filled } from "react-icons/tb";
import { MdChevronLeft, MdChevronRight, MdFavoriteBorder, MdVerified, MdLocationOn, MdDeliveryDining } from 'react-icons/md';
import { BsDisplay } from 'react-icons/bs';
import AdSection from './AdSection';
import { FaStar, FaCheckCircle } from 'react-icons/fa'; 
import Laptop from '../../assets/images/Laptop.jpg'
import iphone from '../../assets/images/iphone.png'
import Fashion from '../../assets/images/Fashion.png';
import Gadgets from '../../assets/images/Gadgets.png';
import Property from '../../assets/images/Property.png';
import Vehicles from '../../assets/images/Vehicles.png';
import Beauty from '../../assets/images/Health and beauty.png';
import profilePhoto from '../../assets/images/profilePhoto.png';
import HomeAppliances from '../../assets/images/Home Appliances.png'; 


const SpecItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3">
    <div className="flex-shrink-0 text-[#9FB3C9]">{icon}</div>
    <div>
      <p className="text-lg font-semibold text-[#666666]">{label}</p>
      <p className="font-semibold text-2xl text-[#1E1E1E]">{value}</p>
    </div>
  </div>
);

// For Star Rating Display
const StarRating = ({ rating, size = 16 }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating); 

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          size={size}
          className={index < filledStars ? 'text-yellow-400' : 'text-gray-300'}
          style={{ marginRight: '2px' }} 
        />
      ))}
    </div>
  );
};

// For a Single Review Item
const ReviewItem = ({ review }) => {
  return (
    <div className="flex space-x-4 py-4 border-b border-gray-100 last:border-b-0">
      <img
        src={review.avatarUrl || profilePhoto} // Fallback avatar
        alt={review.name}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-800">{review.name}</span>
            <StarRating rating={review.rating} size={14} />
          </div>
          <span className="text-xs text-gray-500">{review.date}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
      </div>
    </div>
  );
};


// --- Main ProductOverview Component ---

// Removed unused props like onNext, goToStep for now, adjust if needed
const ProductOverview = ({ formData, sellerData }) => { 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- Mock Data ---
  const mockFormData = {
    category: 'Gadgets • Phones',
    title: 'Apple iPhone 13 Pro 256GB - Gold (Unlocked)',
    price: 1300000,
    priceType: 'Negotiable',
    condition: 'Used',
    location: 'Ikeja, Lagos',
    images: [
      Fashion, Gadgets, Property, Vehicles, Beauty, HomeAppliances // Added HomeAppliances
    ], 
    brand: 'Apple',
    model: 'iPhone 13 Pro',
    storage: '256GB',
    ram: '6GB',
    battery: '3095mAh',
    display: 'Super Retina XDR 120Hz',
    issue: 'None',
    description: "Neatly used iPhone 13 Pro in great condition. Phone has no major issues, all functions work perfectly. Lightly used, clean body with minor signs of handling. Face ID and cameras are fully functional. Comes with original box and charger.",
    // Added Mock Reviews Data
    rating: 4.8,
    reviewCount: 189,
    reviews: [
      { id: 1, name: 'Michael Adebayo', rating: 5, date: '3 days ago', comment: 'Great experience buying from TechHub Store. Fast delivery and genuine product. Highly recommended!', avatarUrl: null },
      { id: 2, name: 'Michael Adebayo', rating: 5, date: '3 days ago', comment: 'Great experience buying from TechHub Store. Fast delivery and genuine product. Highly recommended!', avatarUrl: null },
      { id: 3, name: 'Michael Adebayo', rating: 5, date: '3 days ago', comment: 'Great experience buying from TechHub Store. Fast delivery and genuine product. Highly recommended!', avatarUrl: null },
    ],
  };
  
  const mockSellerData = {
    name: 'Galaxy Stores',
    isVerified: true,
    address: '21, Feyi Dami Kazeem, Ikeja, Lagos, Nigeria',
    delivery: 'Nationwide Delivery Available',
    avatarUrl: profilePhoto, 
  };

  const data = formData || mockFormData;
  const seller = sellerData || mockSellerData;
  const imagesToShow = Array.isArray(data.images) && data.images.length > 0 ? data.images : [];
  // --- End Mock Data ---

  // Image Carousel Functions
  const nextImage = () => {
    if (imagesToShow.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex === imagesToShow.length - 1 ? 0 : prevIndex + 1));
    }
  };
  const prevImage = () => {
     if (imagesToShow.length > 0) {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagesToShow.length - 1 : prevIndex - 1));
     }
  };

  // Safety Tips Data
  const safetyTips = [
    'Meet in a safe, public place for transactions.',
    'Inspect the item carefully before making payment.',
    'Never pay in advance without seeing the product.',
    'Use secure payment methods when possible.',
  ];

  const similarAds = [
		{
		  image: iphone,
		  title: "Apple iPhone 13 Pro 256GB - Gold",
		  price: "₦1,300,000",
		  location: "Warri, Delta",
		  posted: "Posted 5 hours ago",
		  views: "9K",
		  isVerified: true,
		  condition: "New"
		},
		{
		  image: Laptop,
		  title: "Apple MacBook Pro M4-14-inch",
		  price: "₦3,500,000",
		  location: "Abuja, FCT",
		  posted: "Posted 11 hours ago",
		  views: "12K",
		  isVerified: true,
		  condition: "Used"
		},
		{
		  image: Vehicles,
		  title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
		  price: '₦21,000,000',
		  location: 'Wari, Delta',
		  condition: 'New',
		  timePosted: '5 hours ago',
		  views: '9K views',
		  isVerified: true,
		},
		{
		  image: Gadgets,
		  title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
		  price: '₦21,000,000',
		  location: 'Wari, Delta',
		  condition: 'New',
		  timePosted: '5 hours ago',
		  views: '9K views',
		  isVerified: true,
		},
		{
		  image: iphone,
		  title: "Apple iPhone 13 Pro 256GB - Gold",
		  price: "₦1,300,000",
		  location: "Warri, Delta",
		  posted: "Posted 5 hours ago",
		  views: "9K",
		  isVerified: true,
		  condition: "New"
		},
		{
		  image: Laptop,
		  title: "Apple MacBook Pro M4-14-inch",
		  price: "₦3,500,000",
		  location: "Abuja, FCT",
		  posted: "Posted 11 hours ago",
		  views: "12K",
		  isVerified: true,
		  condition: "Used"
		},
		{
		  image: Vehicles,
		  title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
		  price: '₦21,000,000',
		  location: 'Wari, Delta',
		  condition: 'New',
		  timePosted: '5 hours ago',
		  views: '9K views',
		  isVerified: true,
		},
		{
		  image: Gadgets,
		  title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
		  price: '₦21,000,000',
		  location: 'Wari, Delta',
		  condition: 'New',
		  timePosted: '5 hours ago',
		  views: '9K views',
		  isVerified: true,
		},
	];

  return (
    // Your main container styles
    <div className=" bg-white p-7 sm:p-10 rounded-2xl shadow-lg w-full md:w-[85%] mx-auto my-10"> {/* Added my-10 */}
      
      {/* --- Main Ad Preview Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ... (Image Gallery - No changes needed) ... */}
          <div className="space-y-3">
             <div className="relative w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
             {imagesToShow.length > 0 ? (
               <img 
                 src={imagesToShow[currentImageIndex]} 
                 alt="Ad preview" 
                 className="w-full h-full object-cover"
               />
             ) : (
               <div className="w-full h-full flex items-center justify-center text-[#666666]">No Images Provided</div>
             )}
             {imagesToShow.length > 1 && (
               <>
                 <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                   <MdChevronLeft size={24} />
                 </button>
                 <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                   <MdChevronRight size={24} />
                 </button>
               </>
             )}
             <button className="absolute top-3 right-3 bg-white/70 rounded-full p-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
               <MdFavoriteBorder size={24} className="text-gray-700" />
             </button>
           </div>
           {imagesToShow.length > 1 && (
             <div className="flex flex-wrap gap-2"> 
               {imagesToShow.map((imgSrc, index) => (
                 <img
                   key={index}
                   src={imgSrc}
                   alt={`thumbnail ${index + 1}`}
                   onClick={() => setCurrentImageIndex(index)}
                   className={`w-[calc(20%-0.4rem)] h-20 object-cover rounded-lg cursor-pointer border-2 ${ 
                     index === currentImageIndex ? 'border-cyan-500' : 'border-transparent'
                   }`}
                 />
               ))}
             </div>
           )}
         </div>

         {/* ... (Details & Seller Cards - No changes needed) ... */}
         <div className="space-y-4">
           <div className="bg-white p-6 rounded-2xl shadow-sm border">
             <p className="text-lg text-[#1E1E1E] font-medium mb-1">{data.category}</p>
             <h1 className="text-[28px] font-bold text-[#1E1E1E] mb-2">{data.title}</h1>
             <p className="text-4xl font-bold text-primary mb-3">₦{data.price.toLocaleString()}</p>
             <div className="flex flex-wrap gap-2 mb-4">
               {data.priceType === 'Negotiable' && (
                 <span className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">{data.priceType}</span>
               )}
               <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">{data.condition}</span>
             </div>
             <div className="flex items-center text-[#666666]">
               <MdLocationOn className="mr-2 flex-shrink-0" />
               <span className="text-sm font-semibold text-[#666666]">{data.location}</span>
             </div>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border">
             <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">Business Details</h3>
             <div className="flex items-center space-x-3 mb-4">
               <img src={seller.avatarUrl} alt={seller.name} className="w-12 h-12 rounded-full bg-gray-200" />
               <div>
                 <div className="flex items-center space-x-2">
                   <p className="font-semibold text-2xl text-[#1E1E1E]">{seller.name}</p>
                   {seller.isVerified && (
                     <span className="flex items-center space-x-1 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                       <MdVerified size={14} />
                       <span>Verified</span>
                     </span>
                   )}
                 </div>
               </div>
             </div>
             <div className="flex items-center text-[#666666] space-x-3 mb-3">
               <div>
                 <MdLocationOn size={20} className=" flex-shrink-0" /> 
               </div>
               <div>
                 <p className='text-sm font-semibold'>Store Address</p>
                 <p className="text-lg font-semibold text-[#1E1E1E]">{seller.address}</p>
               </div>
             </div>
             <div className="flex items-center text-gray-600 space-x-3">
               <MdDeliveryDining size={20} className="flex-shrink-0" />
               <span className="text-[#0DAC4F] font-medium text-lg border border-[#7EE4A8] bg-[#E9FAF1] rounded-2xl px-3">{seller.delivery}</span>
             </div>
           </div>
         </div>
      </div>

      {/* --- About this Product --- */}
      <div className='border-t border-[#B7B7B7] my-10'>
          <h2 className="text-[28px] font-bold text-[#1E1E1E] mt-10 mb-6">About this Product</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
            <SpecItem icon={<MdOutlinePhoneIphone size={24} />} label="Brand" value={data.brand} />
            <SpecItem icon={<FaTag size={24} />} label="Model" value={data.model} />
            <SpecItem icon={<MdOutlineStorage size={24} />} label="Storage" value={data.storage} />
            <SpecItem icon={<RiRam2Fill size={24} />} label="RAM" value={data.ram} />
            <SpecItem icon={<TbBattery3Filled size={24} />} label="Battery" value={data.battery} />
            <SpecItem icon={<BsDisplay size={24} />} label="Display" value={data.display} />
            <SpecItem icon={<BiSolidError size={24} />} label="Issue" value={data.issue} />
          </div>
      </div>

      {/* --- Description --- */}
      <div className='border-t border-[#B7B7B7] my-10'>
        <h2 className="text-[28px] text-[#1E1E1E] font-bold mt-10 mb-4">Description</h2>
        <p className="text-[#666666] font-medium text-2xl leading-relaxed">{data.description}</p>
      </div>

      {/* --- ADDED: Ratings & Reviews Section --- */}
      <div className="border-t border-[#B7B7B7] my-10 pt-10"> {/* Added pt-10 */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Ratings & Reviews</h2>
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
            See all reviews
          </a>
        </div>
        
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-4xl font-bold text-gray-800">{data.rating?.toFixed(1) || 'N/A'}</span>
          <StarRating rating={data.rating || 0} size={20} />
          <span className="text-sm text-gray-500">({data.reviewCount || 0} reviews)</span>
        </div>

        {/* List of Reviews */}
        <div>
          {data.reviews?.length > 0 ? (
            data.reviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))
          ) : (
            <p className="text-sm text-gray-500">No reviews yet.</p> 
          )}
        </div>
      </div>
      {/* --- END: Ratings & Reviews Section --- */}

      {/* --- ADDED: Safety Tips Section --- */}
      <div className="border-t border-[#B7B7B7] my-10 pt-10"> {/* Added pt-10 */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Safety Tips</h2>
        <ul className="space-y-3">
          {safetyTips.map((tip, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

	  

    </div>
  );
};

export default ProductOverview;


/*
<AdSection  title="Similar Ads" ads={similarAds} />
*/