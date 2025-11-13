import React, { useState } from 'react';
import { MdOutlinePhoneIphone, MdOutlineStorage } from "react-icons/md";
import { RiRam2Fill } from "react-icons/ri";
import { BiSolidError } from "react-icons/bi";
import { FaTag } from "react-icons/fa6";
import { TbBattery3Filled } from "react-icons/tb";
import { MdChevronLeft, MdChevronRight, MdFavoriteBorder, MdVerified, MdLocationOn,MdDeliveryDining} from 'react-icons/md';
import { BsDisplay } from 'react-icons/bs';
import Fashion from '../../assets/images/Fashion.png';
import Gadgets from '../../assets/images/Gadgets.png';
import Property from '../../assets/images/Property.png';
import Vehicles from '../../assets/images/Vehicles.png';
import Beauty from '../../assets/images/Health and beauty.png';
import profilePhoto from '../../assets/images/profilePhoto.png';

const SpecItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3">
    <div className="flex-shrink-0 text-[#9FB3C9]">{icon}</div>
    <div>
      <p className="text-lg font-semibold text-[#666666]">{label}</p>
      <p className="font-semibold text-2xl text-[#1E1E1E]">{value}</p>
    </div>
  </div>
);

const Step5_Review = ({ onNext, goToStep, formData, sellerData }) => { 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mockFormData = {
    category: 'Gadgets • Phones',
    title: 'Apple iPhone 13 Pro 256GB - Gold (Unlocked)',
    price: 1300000,
    priceType: 'Negotiable',
    condition: 'Used',
    location: 'Ikeja, Lagos',
    images: [
      Fashion, Gadgets, Property, Vehicles, Beauty
    ], 
    brand: 'Apple',
    model: 'iPhone 13 Pro',
    storage: '256GB',
    ram: '6GB',
    battery: '3095mAh',
    display: 'Super Retina XDR 120Hz',
    issue: 'None',
    description: "Neatly used iPhone 13 Pro in great condition. Phone has no major issues, all functions work perfectly. Lightly used, clean body with minor signs of handling. Face ID and cameras are fully functional. Comes with original box and charger."
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

  return (
    <div className=" bg-white p-7 my-10 sm:p-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-primary">Preview Your Ad</h2>
      <p className="text-center font-semibold text-lg text-[#666666]">
        Review your ad before publishing.
      </p>

      {/* --- Main Ad Preview Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        
        {/* --- Image Gallery --- */}
        <div className="space-y-3">
          {/* Main Image Display */}
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
            {/* TODO: Add Crown Icon for 'Promoted' logic */}
          </div>

          {imagesToShow.length > 1 && (
            // Use flex-wrap and gap for wrapping
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

        {/* --- Details & Seller Cards --- */}
        <div className="space-y-4">
          {/* Ad Details */}
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
          
          {/* Business Details */}
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

      {/* --- Edit Actions --- */}
      <div className='border-t border-[#B7B7B7] my-10'>
        <p className="text-[#666666] text-lg font-medium mt-8 mb-4">Need to make changes? Click on any section to edit:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button 
            onClick={() => goToStep(1)} 
            className="bg-white border border-[#9FB3C9] text-lg font-bold text-[#708CAF] py-3 rounded-lg hover:bg-gray-50"
          >
            Edit Category/Location
          </button>
          <button 
            onClick={() => goToStep(2)} 
            className="bg-white border border-[#9FB3C9] text-lg font-bold text-[#708CAF] py-3 rounded-lg hover:bg-gray-50"
          >
            Edit Photos
          </button>
          <button 
            onClick={() => goToStep(3)} 
            className="bg-white border  border-[#9FB3C9] text-lg font-bold text-[#708CAF] py-3 rounded-lg hover:bg-gray-50"
          >
            Edit Product Details
          </button>
        </div>
      </div>
      
      {/* --- Publish Button --- */}
      <div className="pt-6 w-[60%] mx-auto">
        <button
          onClick={onNext}
          className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primaryLight transition-colors"
        >
          Publish Ad
        </button>
      </div>
    </div>
  );
};

export default Step5_Review;