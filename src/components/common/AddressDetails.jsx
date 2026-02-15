import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { TbTruckDelivery } from 'react-icons/tb'

const AddressDetails = ({info}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">

        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Business Details
        </h3>

        {/* Address */}
        <div className="flex items-start gap-3 mb-5">
          <IoLocationOutline className="text-gray-400 mt-1" size={22} />
          <div>
            <p className="text-gray-500 font-medium">Store Address</p>
            <p className="text-gray-800 text-lg">
              {info.business_address}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-green-100 border border-green-300 text-green-600 font-medium mb-6">
          <TbTruckDelivery size={18} />
          Nationwide Delivery Available
        </div>

        <div className="flex items-center gap-6 text-gray-400">
          <a href={info.whatsapp_link} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={22} className="hover:text-green-600 cursor-pointer transition" />
          </a>
          <a href={info.instagram_link} target="_blank" rel="noopener noreferrer">
          <FaInstagram size={22} className="hover:text-pink-500 cursor-pointer transition" />
          </a>
          <a href={info.facebook_link} target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={22} className="hover:text-blue-600 cursor-pointer transition" />
          </a>
        </div>
      </div>

  )
}

export default AddressDetails
