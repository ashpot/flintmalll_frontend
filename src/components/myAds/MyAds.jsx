// this components handles rendering of published and pending ads of a logged in user.

// TODO: edit functionality, delete functionality
import React, { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import { cn } from '../../lib/Utils';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import SmallFooter from '../layout/SmallFooter';
import { PublishedCard, PendingCard } from './Adcard';
import { API_ENDPOINTS } from '../../services/api';
import { IoClose } from 'react-icons/io5';
import deleteIcon from '../../assets/images/deleteIcon.png';

const MyAds = () => {
  const [activeTab, setActiveTab] = useState('published')
  const [pendingAds, setPendingAds] = useState([])
  const [liveAds, setLiveAds] = useState([])
  const [loading, setLoading] = useState(false)

  // delete states
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedAd, setSelectedAd] = useState(null)
  const [selectedType, setSelectedType] = useState(null) // 'live' | 'pending'

  const navigate = useNavigate();
  const baseClasses = 'sm:text-xl xs:text-lg text-base tracking-[0.015] py-3 w-[50%] rounded-xl text-[#708CAF]';
  const activeClass = 'bg-[--color-toggle-btn] text-white';

  useEffect(() => {
    const getUserAds = async () => {
      const token = localStorage.getItem('authToken');
      try {
        setLoading(true)
        const response = await fetch(API_ENDPOINTS.MY_ADS, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          }
        })
        const data = await response.json()
        if (response.ok) {
          setLiveAds(data.live_ads)
          setPendingAds(data.pending_ads)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getUserAds();
  }, [])

  // open delete modal
  const handleDeleteClick = (ad, type) => {
    setSelectedAd(ad)
    setSelectedType(type)
    setShowDeleteModal(true)
  }

  // UI-only delete
  const confirmDelete = () => {
    if (selectedType === 'live') {
      setLiveAds(prev => prev.filter(ad => ad.id !== selectedAd.id))
    }

    if (selectedType === 'pending') {
      setPendingAds(prev => prev.filter(ad => ad.id !== selectedAd.id))
    }

    setShowDeleteModal(false)
    setSelectedAd(null)
    setSelectedType(null)
  }

  return (
    <>
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-secondary rounded-full"></div>
        </div>
      ) : (
        <div className='bg-[#F7F7F7]'>
          <title>Flintmall - My Ads</title>

          <nav className={cn(
            'text-[var(--color-header)] flex items-center justify-between px-6 md:px-36 py-4 md:py-8 shadow-sm bg-white',
            'text-xl xs:text-2xl sm:text-3xl font-bold tracking-[0.015]'
          )}>
            <button onClick={() => navigate('/profile')}>
              <IoIosArrowBack size={25} />
            </button>
            <h1>My Ads</h1>
            <div></div>
          </nav>

          <main className='min-h-screen sm:max-w-6xl mx-auto py-10 space-y-6'>
            <section className='rounded-xl font-bold bg-[var(--color-toggle)] py-2 sm:py-3.5 sm:px-3 mx-auto max-w-[90%] sm:max-w-[67%] flex gap-5'>
              <button
                onClick={() => setActiveTab('published')}
                className={cn(baseClasses, activeTab === 'published' && activeClass)}
              >
                Published Ads
              </button>
              <button
                onClick={() => setActiveTab('pending')}
                className={cn(baseClasses, activeTab === 'pending' && activeClass)}
              >
                Pending Ads
              </button>
            </section>

            <section className='space-y-6'>
              {activeTab === 'published' ? (
                <PublishedCard
                  ads={liveAds}
                  onDelete={(ad) => handleDeleteClick(ad, 'live')}
                />
              ) : (
                <PendingCard
                  ads={pendingAds}
                  onDelete={(ad) => handleDeleteClick(ad, 'pending')}
                />
              )}
            </section>
          </main>

          <SmallFooter />
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="absolute top-4 right-4"
            >
              <IoClose size={24} />
            </button>
            <div className="mx-auto flex justify-center">
              <img src={deleteIcon} alt="deleteIcon" />
            </div>

            <h2 className="text-2xl font-semibold text-center">Are you sure?</h2>
            <p className="text-center text-gray-500 mt-3">
              Do you really want to delete this ad?
            </p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-3 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-3 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MyAds;

