import { IoClose } from "react-icons/io5";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { TbHandClick } from "react-icons/tb";
import avatar from "../../assets/images/profilePhoto.png"

const ContactSellerModal = ({seller, onClose, onNextOffer, onNextMessage, negotiable}) => {
  const isBusiness = seller.type === 'Business';
  
  return (
      <div className="relative bg-white rounded-3xl w-[90%] max-w-md p-8">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-300 hover:text-gray-500"
        >
          <IoClose size={28} />
        </button>

        <h2 className="text-xl font-semibold mb-6 capitalize">
          Contact {isBusiness ? seller.business_name : `${seller.first_name} ${seller.last_name}`}
        </h2>

        <hr className="mb-6" />

        {/* Seller Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
            <img
              src={seller.photo_url || avatar}
              alt="seller"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg capitalize">
                {isBusiness ? seller.business_name : `${seller.first_name} ${seller.last_name}`}
              </h3>
              {seller.is_verified && <FaCheckCircle className="text-green-500" />}
            </div>
            <p className="text-gray-500">{isBusiness ? seller.business_address : seller.address}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-4">

          {/* <button className="w-full flex items-center justify-center gap-3 bg-green-600 text-white py-4 rounded-2xl font-medium hover:bg-green-500 transition">
            <FaPhoneAlt />
            Call Seller
          </button> */}

          <button 
            onClick={onNextMessage}
            className="w-full flex items-center justify-center gap-3 bg-cyan-500 text-white py-4 rounded-2xl font-medium hover:bg-cyan-400 transition">
              <FiMessageSquare />
              Message Seller
          </button>
            {negotiable && 
              <button
                onClick={onNextOffer} 
                className="w-full flex items-center justify-center gap-3 bg-blue-200 text-blue-900 py-4 rounded-2xl font-medium hover:bg-blue-300 transition"
                >
                  <TbHandClick />
                  Make Offer
              </button>
              }
          
        </div>

        <p className="text-xs text-gray-500 mt-6">
          By contacting this seller, you agree to our terms of service and privacy policy
        </p>
      </div>
  );
};

export default ContactSellerModal;
