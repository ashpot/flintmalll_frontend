// this components handles rendering of published and pending ads of a logged in user.

// TODO: edit functionality, delete functionality
import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import { cn } from '../../lib/Utils';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import SmallFooter from '../layout/SmallFooter';
import { PublishedCard, PendingCard } from '../ui/Adcard';
import { API_ENDPOINTS } from '../../services/api';

const MyAds = () => {
    const [activeTab, setActiveTab] = useState('published')
    const [pendingAds, setPendingAds] = useState([])
    const [liveAds, setLiveAds] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const baseClasses = 'sm:text-xl xs:text-lg text-base tracking-[0.015] py-3 w-[50%] rounded-xl text-[#708CAF]';
    const activeClass = 'bg-[--color-toggle-btn] text-white';
    useEffect(()=>{
       const getUserAds = async()=>{
        const token = localStorage.getItem('authToken');
        try {
          setLoading(true)
          const response = await fetch(API_ENDPOINTS.MY_ADS, {
            method: "GET",
            headers:{
              "Content-Type": "application/json",
              Authorization: `Token ${token}`
            }
          })
          const data = await response.json()
          if (response.ok){
            alert('all ads loaded successfully')
            setLiveAds(data.live_ads)
            setPendingAds(data.pending_ads)
            console.log(data)
          }else{
            alert('error from try block')
          }
        } catch (error) {
          alert('error from catch block')
        }finally{
          setLoading(false)
        }
       } 
       getUserAds();
    }, [])
    
  return (
    <>
    {loading ? (<div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-secondary rounded-full"></div>
      </div>) : 
      (
        <div className='bg-[#F7F7F7]'>
          <title>Flintmall - My Ads</title>
              <nav className={cn('text-[var(--color-header)] flex items-center justify-between px-6 md:px-36 py-4 md:py-8 shadow-sm bg-white',
                'text-xl xs:text-2xl sm:text-3xl font-bold tracking-[0.015]'
              )}>
                <button onClick={()=>navigate('/profile')}>
                    <IoIosArrowBack size={25} className='text-[var(--color-header)]'/>
                </button>
                <h1>My Ads</h1>
                <div></div>
              </nav>
              <main className='min-h-screen sm:max-w-6xl mx-auto py-10 space-y-6'>
                <section className='rounded-xl font-bold bg-[var(--color-toggle)] py-2 sm:py-3.5 sm:px-3 mx-auto max-w-[90%] sm:max-w-[67%] flex items-start justify-center gap-5'>
                    <button onClick={()=>setActiveTab('published')} className={cn(baseClasses,
                        activeTab === 'published' ? activeClass : ''
                    )}>Published Ads</button>
                    <button onClick={()=>setActiveTab('pending')} className={cn(baseClasses, 
                        activeTab === 'pending' ? activeClass : ''
                    )}>Pending Ads</button>
                </section>

                <section className='space-y-6'>
                    {
                      activeTab === 'published' ? <PublishedCard ads={liveAds}/> : <PendingCard ads={pendingAds}/>
                    }
                </section>
            </main>
          <SmallFooter />
        </div>
      )}
          </>
  )
}

export default MyAds;
