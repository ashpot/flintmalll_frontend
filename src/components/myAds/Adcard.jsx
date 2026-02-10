import {
  FiTrendingUp,
  FiEdit2,
  FiTrash2,
  FiEdit,
} from "react-icons/fi";
import { cn } from '../../lib/Utils';
import product from '/src/assets/images/g-shock.jpg';
import { GoClock } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export const PublishedCard = ({ads, onDelete}) => {
    const conditionClass = 'px-3 py-[5px] text-xs rounded-full font-medium';
    const navigate = useNavigate();
  return (
    <>
    {ads.length === 0 ? (
      <div className="text-center py-10 text-gray-500">
              No live ads yet.
            </div>
    ) : (
      ads.map((ad)=>{
        return (
          
      <div className="relative sm:w-[95%] xl:w-full w-[95%] mx-auto bg-white rounded-2xl sm:p-8 p-3 pt-8 flex sm:flex-row flex-col items-center">
      {/* left */}
      <div className="flex sm:flex-row flex-col gap-7">
        {/* Image */}
        <div className="sm:w-[80px] sm:h-[80px] h-[100%] w-[60%] rounded-md bg-[#F5EFEA] flex items-center justify-center">
          <img
            src={product}
            alt="iPhone"
            className="rounded-md object-cover"
          />
        </div>

        {/* Details */}
        <div className='space-y-3'>
          {/* Title */}
          <h3 className="font-semibold text-gray-900 sm:text-lg text-base">
            iPhone 13 Pro - Gold
          </h3>

          {/* Price & Badges */}
          <div className="flex sm:flex-row flex-col sm:items-center gap-2">
            <span className="sm:text-xl text-lg font-bold text-gray-900">
              ₦900,000
            </span>
            <div className='flex gap-2'>
            <span className={cn('bg-sky-100 text-sky-600', conditionClass)}>
              Fixed
            </span>

            <span className={cn('bg-[#0B3C74] text-white', conditionClass)}>
              Premium
            </span>
            </div>
            
          </div>

          {/* Category */}
          <p className="text-sm text-gray-500">
            Gadgets • Phones
          </p>

          {/* Actions */}
          <div className="flex sm:flex-row flex-col sm:items-center gap-3">
            <button className="flex items-center bg-sky-500 text-white rounded-lg text-sm font-medium hover:bg-sky-600 transition">
                <div onClick={()=>navigate('/promote-ads')} className='flex justify-center items-center border px-4 py-2 w-full gap-3'>
                    <FiTrendingUp size={16} />
                    Promote
                </div>
              
            </button>

            <div className='flex gap-3'>
            <button className="w-[50%] flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
              <FiEdit size={16} />
              Edit
            </button>

              <button 
                onClick={() => onDelete(ad)}
                className="w-[50%] flex items-center justify-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition">
                  <FiTrash2 size={16} />
                  Delete
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="sm:w-full sm:gap-14 w-[95%] flex sm:flex-col sm:relative absolute top-4 sm:top-0 sm:items-end sm:justify-start justify-between">
        <span className="px-3 py-[3px] text-xs rounded-full bg-green-100 text-green-600 font-medium">
          Live
        </span>

        <span className="text-sm text-gray-400 sm:mb-10">
          2 days ago
        </span>
      </div>
    </div>
        )
      })
    ) }
      
    </>
    
  );
}

export const PendingCard = ({ads, onDelete}) => {
    const conditionClass = 'px-3 py-[5px] text-xs rounded-full font-medium';
   const formatPrice = (amount, decimals = 2) => {
      if (!amount) return "0.00";

      return Number(amount).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    };
  return (
    <>
      {ads.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
              No pending ads yet.
          </div>
      ) : (
        ads.map((ad)=>{
          return (
            <section className="relative bg-white sm:w-[95%] xl:w-full w-[95%] mx-auto rounded-2xl sm:p-8 p-3 pt-8" key={ad.id}>
              <div className="flex sm:flex-row flex-col items-center">
            {/* left */}
            <div className="flex sm:flex-row flex-col gap-7">
              {/* Image */}
              <div className="sm:w-[80px] sm:h-[80px] h-[100%] w-[60%] rounded-md bg-[#F5EFEA] flex items-center justify-center">
                <img
                  src={ad.cover_photo}
                  alt="iPhone"
                  className="rounded-md object-cover"
                />
              </div>

              {/* Details */}
              <div className='space-y-3 mb-5'>
                {/* Title */}
                <h3 className="font-semibold text-gray-900 sm:text-lg text-base">
                  {ad.title}
                </h3>

                {/* Price & Badges */}
                <div className="flex sm:flex-row flex-col sm:items-center gap-2">
                  <span className="sm:text-xl text-lg font-bold text-gray-900">
                    ₦{formatPrice(ad.price)}
                  </span>
                  <div className='flex gap-2'>
                  <span className={cn('bg-sky-100 text-sky-600', conditionClass)}>
                    {ad.is_negotiable ? 'Negotiable' : 'Fixed'}
                  </span>

                  <span className={cn('bg-[--color-toggle-btn] text-white', conditionClass)}>
                    {ad.ad_type.name}
                  </span>
                  </div>
                  
                </div>

                {/* Category */}
                <p className="text-sm text-gray-500">
                  {ad.category.title} • {ad.sub_category.title}
                </p>
                
              </div>
            </div>

            {/* RIGHT */}
            <div className="sm:w-full sm:gap-14 w-[95%] flex sm:flex-col sm:relative absolute top-2 sm:top-0 sm:items-end sm:justify-start justify-between">
              <span className="sm:px-5 sm:py-[10px] px-3 py-[3px] text-xs rounded-full bg-[#FDF4E1] text-[#C99507] font-medium">
                Under Review
              </span>

              <span className="text-sm font-semibold sm:mb-10">
                {new Date(ad.date_added).toLocaleString()}
              </span>
            </div>
            
          </div>


          <div className="flex sm:justify-end">
              <div className="flex flex-col sm:w-[90%] gap-5">
                      <div className='sm:text-base text-sm font-semibold bg-[#E5F9FE] text-[#406694] flex items-center sm:py-1.5 sm:pl-3 pl-2 py-1 w-full gap-3 rounded-2xl'>
                          <GoClock size={20} strokeWidth={1} />
                          Typically approved within 30-60 mins
                      </div>
                  <div className='flex gap-3'>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                    <FiEdit size={16} />
                    Edit
                  </button>

                  <button 
                    onClick={() => onDelete(ad)}
                    className=" flex items-center justify-center gap-2 px-4 py-2 border border-red-400 text-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition">
                    <FiTrash2 size={16} />
                    Delete
                  </button>
                  </div>
                  
                </div>
          </div>
          
          </section>
          )
        })

      )}
    </>
    
    
  );
}
