import React, { useEffect, useRef, useState } from 'react';
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
import { formatPrice } from '../../lib/formatPrice';
import AddressDetails from './AddressDetails';
import BusinessDetails from './BusinessDetails';
import { API_ENDPOINTS } from '../../services/api';
import LoadSpinner from '../ui/LoadSpinner';
import SpecItem from './SpecItem';
import AdDetail from './AdDetail';
import { formatKey } from '../../lib/formatKey';

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

const ProductOverview = ({ details, id }) => { 
    const isBusiness = details.ad.user.type === 'Business';
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    let specs;
      try {
        specs = JSON.parse(details.ad.attributes);
      } catch (error) {
        console.error("Failed to parse attributes:", error);
        specs = {};
      }

    // states related to similar ads
    const [isLoading, setIsLoading] = useState(false);
    const sectionRef = useRef(null);
    const [hasFetched, setHasFetched] = useState(false);
    const token = localStorage.getItem('authToken')
    const [similar, setSimilar] = useState(null)
    
    useEffect(()=>{
      if(!sectionRef.current || hasFetched) return;
      const fetchSimilarAds = async ()=>{
            try {
              setIsLoading(true)
              const res = await fetch(API_ENDPOINTS.SIMILAR_ADS(id), {
                method: "GET",
                headers:{
                  Authorization: `Token ${token}`
                },
            })
            if(!res.ok){
              console.log('error fetching data')
            }
              const data = await res.json();
              setHasFetched(true)
              setSimilar(data)
            } catch (error) {
              console.log('error from catch block')
            } finally{
              setIsLoading(false)
            }
          }
      const observer = new IntersectionObserver(([entry])=>{
        if(entry.isIntersecting){
          fetchSimilarAds()
        }
      }, {threshold: 0.3})
      observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, [hasFetched, id, token])
    // images = [details.ad.cover_photo, details.photos.ad.photo_url]
  // --- Mock Data ---
  const mockFormData = {
    images: [
      Fashion, Gadgets, Property, Vehicles, Beauty, HomeAppliances
    ], 
    brand: 'Apple',
    model: 'iPhone 13 Pro',
    storage: '256GB',
    ram: '6GB',
    battery: '3095mAh',
    display: 'Super Retina XDR 120Hz',
    issue: 'None',
    description: "Neatly used iPhone 13 Pro in great condition. Phone has no major issues, all functions work perfectly. Lightly used, clean body with minor signs of handling. Face ID and cameras are fully functional. Comes with original box and charger.",
  };

  const data = mockFormData;
  // const imagesToShow = Array.isArray(images) && images.length > 0 ? images : [];
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
  return (
    // Your main container styles
    <div className=" bg-white p-7 sm:p-10 rounded-2xl shadow-lg w-full md:w-[85%] mx-auto my-10">
      
      {/* --- Main Ad Preview Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
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
             <button 
              onClick={()=>console.log(specs)}
              className="absolute top-3 right-3 bg-white/70 rounded-full p-2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
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

         <div className="space-y-4">
           {/* ad detail child component */}
           <AdDetail condition={specs.condition} details={details}/>
           {/* business details */}
            <BusinessDetails seller={details.ad.user}/>
            {isBusiness && <AddressDetails info={details.ad.user} />}
            
          </div>
        </div>

      {/* --- About this Product --- */}
      <div className='border-t border-[#B7B7B7] my-10'>
          <h2 className="text-[28px] font-bold text-[#1E1E1E] mt-10 mb-6">About this Product</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
            {/* first filter out condition before mapping */}
            {Object.entries(specs).filter(([key, value])=>key !== 'condition').map(([key, value])=>{
                return (
                    <SpecItem label={formatKey(key)} value={value} key={key}/>
                )
            })}
          </div>
      </div>

      {/* --- Description --- */}
      <div className='border-t border-[#B7B7B7] my-10'>
        <h2 className="text-[28px] text-[#1E1E1E] font-bold mt-10 mb-4">Description</h2>
        <p className="text-[#666666] font-medium text-2xl leading-relaxed">{details.ad.description}</p>
      </div>
      {/* --- ADDED: Safety Tips Section --- */}
      <div className="border-t border-[#B7B7B7] my-10 pt-10"> 
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
      {/* similar ad-section */}
      <div ref={sectionRef}>
        {isLoading && <LoadSpinner />}

        {!isLoading && Array.isArray(similar) && similar.length > 0 && (
          <AdSection title="Similar Ads" ads={similar} />
        )}
      </div>

    </div>
  );
};
export default ProductOverview;


