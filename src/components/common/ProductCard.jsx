import { HiOutlineCube, HiOutlineEye, HiOutlineHeart } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { formatPrice } from "../../lib/formatPrice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
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
    adType,
}) => {
    const navigate = useNavigate();
    const is_premium = adType === 'premium';
    const handleCardClick = () => {
        navigate(`/product-details/${id}`);
    };
    return (
    <div 
        onClick={handleCardClick}
        className="max-w-sm bg-white rounded-[1.3rem] border-2 border-[#00C2F3] overflow-hidden font-sans shadow-sm"
    >
      {/* Image Container */}
      <div className="relative">
        <img 
          src={image}
          alt="MacBook Pro" 
          className="w-full h-72 object-contain rounded-[1.3rem]"
        />
        
        {/* Verified Badge */}
        {isVerified && (
             <div className="absolute top-3 left-2 bg-[#D6F8FF] text-[#00C2F3] px-5 py-2 rounded-full text-xs font-semibold">
          Verified
        </div>
        )}
       

        {/* Heart Icon */}
        {/* <button className="absolute top-1 right-2 bg-white p-3 rounded-full shadow-lg text-gray-800 hover:scale-110 transition-transform flex items-center justify-center">
          <HiOutlineHeart size={28} strokeWidth={2} />
        </button> */}

        {/* crown for isPremium */}
        {is_premium && (
            <div
                className="bg-[#FDF4E1] rounded-full p-2 shadow"
                aria-label="Premium Ad"
            >
                <FaCrown className="w-5 h-5 text-[#FDB813]" />
            </div>
        )}
        
      </div>

      {/* Content Section */}
      <div className="pt-5 pb-3.5 px-4">
        <h2 className="text-lg font-semibold text-gray-800 leading-tight">
          {title}
        </h2>
        
        <div className="text-xl font-bold text-[#00C2F3] mt-1 mb-2.5">
          ₦{formatPrice(price)}
        </div>

        <hr className="border-gray-300 mb-2.5" />

        {/* Footer Info Grid */}
        <div className="grid grid-cols-2 gap-y-2 text-gray-500">
          {/* Location */}
          <div className="flex items-center gap-1">
            <HiOutlineMapPin size={20} strokeWidth={2}/>
            <span className="text-sm">{city}, {state}</span>
          </div>
          
          {/* Condition */}
          <div className="flex items-center gap-1 justify-end">
            <HiOutlineCube size={20} strokeWidth={2}/>
            <span className="text-sm">{condition}</span>
          </div>

          {/* Time Posted */}
          <div className="text-sm">{new Date(timePosted).toDateString()}</div>

          {/* Views */}
          <div className="flex items-center gap-1 justify-end">
            <HiOutlineEye size={20} strokeWidth={2}/>
            <span className="text-sm">{views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;