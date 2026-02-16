import React from 'react'
import { formatPrice } from '../../lib/formatPrice'
import { MdLocationOn } from 'react-icons/md'
import { IoTimeOutline } from 'react-icons/io5'
import { formatDate } from '../../lib/formatDate'

const AdDetail = ({details, condition}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <p className="text-lg text-[#1E1E1E] font-medium mb-1">{details.ad.category.title} • {details.ad.sub_category.title}</p>
        <h1 className="text-[28px] font-bold text-[#1E1E1E] mb-2">{details.ad.title}</h1>

        <div className='flex space-x-3 items-center mb-3'>
            <p className="text-4xl font-bold text-primary">₦{formatPrice(details.ad.price)}</p>
            <span className='flex justify-center items-center bg-sky-100 border border-sky-300 text-sky-600 text-sm font-semibold px-3 py-2 rounded-full'>
                {details.ad.is_negotiable ? "Negotiable" : "Fixed"}
            </span>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
            <span className="bg-sky-100 border border-sky-300 text-sky-600 text-sm font-semibold px-3 py-2 rounded-full">
            {condition}
            </span>

            <div className="flex items-center text-[#666666]">
            <MdLocationOn size={26} className="mr-1 flex-shrink-0" />
            <span className="text-base font-semibold text-[#666666]">{details.ad.city}, {details.ad.state} State</span>
            </div>

             <div className="flex items-center text-[#666666]">
            <IoTimeOutline size={26} className="mr-1 flex-shrink-0" />
            <span className="text-base font-semibold text-[#666666]">{formatDate(details.ad.date_added)}</span>
            </div>

        </div>
        
        </div>
  )
}

export default AdDetail
