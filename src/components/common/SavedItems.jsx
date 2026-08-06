// this component handles rendering of saved items.
import { cn } from '../../lib/Utils';
import { IoIosArrowBack, IoIosNotifications } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import { HiOutlineHeart, HiOutlineMapPin, HiOutlineCube, HiOutlineEye } from 'react-icons/hi2';
import product from '/src/assets/images/g-shock.jpg';
import AccountDropdown from '../layout/AccountDropdown';
import { TbTag } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../../services/api';


const H1 = ({children})=>{
    return(
        <h1 className="text-center mb-10 text-center text-[var(--color-primary)] text-xl xs:text-2xl sm:text-3xl font-bold tracking-[0.015]">
            {children}
        </h1>
    )
}
const Label = ({children})=>{
    return (
        <label className='mb-2 text-[var(--color-label)] font-semibold text-base sm:text-lg'>
            {children}
        </label>
    )
}
const Input = ({type, holder, value, onChange, others})=>{
    return (
        <input
            type={type}
            placeholder={holder} 
            value={value}
            onChange={onChange}
            className={cn('w-full px-4 py-3 font-medium text-lg text-[#708CAF]', 
                'border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-secondary', 
                'placeholder:text-[#708CAF] outline-none',
            others)}
        />
    )
}
const ProductCard = () => {
    return (
    <div className="max-w-sm bg-white rounded-[1.3rem] border-2 border-[#00C2F3] overflow-hidden font-sans shadow-sm">
      {/* Image Container */}
      <div className="relative">
        <img 
          src={product}
          alt="MacBook Pro" 
          className="w-full h-72 object-contain rounded-[1.3rem]"
        />
        
        {/* Verified Badge */}
        <div className="absolute top-3 left-2 bg-[#D6F8FF] text-[#00C2F3] px-5 py-2 rounded-full text-xs font-semibold">
          Verified
        </div>

        {/* Heart Icon */}
        <button className="absolute top-1 right-2 bg-white p-3 rounded-full shadow-lg text-gray-800 hover:scale-110 transition-transform flex items-center justify-center">
          <HiOutlineHeart size={28} strokeWidth={2} />
        </button>
      </div>

      {/* Content Section */}
      <div className="pt-5 pb-3.5 px-4">
        <h2 className="text-lg font-semibold text-gray-800 leading-tight">
          Apple MacBook Pro M4 - 14-inch
        </h2>
        
        <div className="text-xl font-bold text-[#00C2F3] mt-1 mb-2.5">
          ₦3,500,000
        </div>

        <hr className="border-gray-300 mb-2.5" />

        {/* Footer Info Grid */}
        <div className="grid grid-cols-2 gap-y-2 text-gray-500">
          {/* Location */}
          <div className="flex items-center gap-1">
            <HiOutlineMapPin size={20} strokeWidth={2}/>
            <span className="text-sm">Ikeja, Lagos</span>
          </div>
          
          {/* Condition */}
          <div className="flex items-center gap-1 justify-end">
            <HiOutlineCube size={20} strokeWidth={2}/>
            <span className="text-sm">New</span>
          </div>

          {/* Time Posted */}
          <div className="text-sm">Posted 2 hours ago</div>

          {/* Views */}
          <div className="flex items-center gap-1 justify-end">
            <HiOutlineEye size={20} strokeWidth={2}/>
            <span className="text-sm">3.7K views</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const SavedItems = () => {
    const navigate = useNavigate();
    const [savedAds, setSavedAds] = useState([]);
    useEffect(()=>{
      const getSavedAds = async()=>{
        const token = localStorage.getItem("authToken");
        try {
          const response = await fetch(API_ENDPOINTS.MY_SAVED_ADS, {
            method: "GET",
            headers:{
              "Content-Type": "application/json",
              Authorization: `Token ${token}`
            }
          })
          const data = await response.json()
          if (response.ok) {
            setSavedAds(data.saved_items)
            alert('all saved ads loaded successfully')
            console.log(savedAds)
          } else {
            alert('server error')
          }
        } catch (error) {
          alert('network error')
        }
      }
      getSavedAds();
    },[])

  return (
    <div>
        <title>Flintmall - Saved items</title>
     <Navbar
        centerContent={
            <div className='w-full'>
            <input
              type="text"
              placeholder="What are you looking for?"
            //   value={searchQuery}
            //   onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2.5 border border-[#E5E5E5] text-[#B7B7B7] font-medium text-sm md:text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        }
        rightContent={
          <div className="flex items-center gap-4 md:space-x-4 text-xs md:text-lg font-medium cursor-pointer">
                <IoIosNotifications size={27} className="text-[#B7B7B7]" />
                <AccountDropdown />
            <button
                onClick={() => {navigate("/post-ad")}} //navigate to post ad page
                className="bg-secondary hover:bg-secondaryLight text-white px-3 py-2 font-medium md:text-lg rounded-2xl flex items-center gap-3"
                >
                <TbTag size={18} /> Post Ad
            </button>
          </div>
        }
      />
        <main className='min-h-screen max-w-[78rem] mx-auto space-y-6 py-10'>
            <section className='relative bg-white sm:p-6 p-4'>
                <button onClick={()=>navigate(-1)} className='flex items-center sm:gap-1 absolute sm:left-2 sm:top-8 top-5 left-1'>
                    <IoIosArrowBack size={25}/>
                    <span className='font-bold sm:text-lg'>Back</span>
                </button>
                <H1>Saved Items</H1>    
                    {/* grid container for rendering of the saved items */}
                <div className='grid justify-center  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12'>
                    <ProductCard />
                </div>
                
            </section>
        </main>
        
    </div>
  )
  
}

export default SavedItems;
