import React from 'react'
import { formatPrice } from '../../lib/formatPrice'
import { MdLocationOn } from 'react-icons/md'
import { IoTimeOutline } from 'react-icons/io5'
import { formatDate } from '../../lib/formatDate'
import { cn } from '../../lib/Utils'

const AdDetail = ({details, condition}) => {
    const labelClasses = `bg-sky-100 border border-sky-300 text-sky-600 sm:text-sm font-semibold sm:px-3 sm:py-2 rounded-full
                           px-2 py-1 text-sm`;
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <p className="sm:text-lg text-base text-[#1E1E1E] font-medium mb-1">{details.ad.category.title} • {details.ad.sub_category.title}</p>
        <h1 className="sm:text-[28px] text-2xl font-bold text-[#1E1E1E] mb-2">{details.ad.title}</h1>

        {/* price and is_negotiable container */}
        <div className='flex space-x-3 items-center mb-3'>
            <p className="sm:text-4xl text-3xl font-bold text-primary">₦{formatPrice(details.ad.price)}</p>
            <span className={cn('flex justify-center items-center', labelClasses)}>
                {details.ad.is_negotiable ? "Negotiable" : "Fixed"}
            </span>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
            <span className={labelClasses}>
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
