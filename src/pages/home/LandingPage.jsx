import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/common/HeroSection";
import HeroSearch from "../../components/common/HeroSearch";
import CategoryCarousel from "../../components/common/CategoryCarousel";
import AdSection from "../../components/common/AdSection";
import Button from "../../components/ui/Button";
import Footer from "../../components/layout/Footer";
import AccountDropdown from "../../components/layout/AccountDropdown";
import { IoIosNotifications } from "react-icons/io";
import { TbTag } from "react-icons/tb";
import { API_ENDPOINTS } from "../../services/api";
import SignInModal from "../../components/modals/SignInModal";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/Utils";
        

const LandingPage = () => {
  const [categories, setCategories] = useState([]);
  const [premiumAds, setPremiumAds] = useState([]);
  const [trendingAds, setTrendingAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [notifications, setNotifications] = useState(0)
  const navigate = useNavigate();


  useEffect(() => {
      const fetchHomeData = async () => {
      const token  =  localStorage.getItem('authToken');
      const headers = { "Content-Type": "application/json" }
      if (token) {
        headers["Authorization"] = `Token ${token}`;
      }
      const url = token ? API_ENDPOINTS.HOME_DATA_AUTH : API_ENDPOINTS.HOME_DATA_GUEST;
      try {
      const response = await fetch(
        url, 
        {
          method: "GET",
          headers: headers,
        }
      );

        if (!response.ok) {
          throw new Error("Failed to load home data");
        }

        const data = await response.json();
        setCategories(data.categories || []);
        setPremiumAds(data.premium_ads || []);
        setTrendingAds(data.trending_ads || []);
        setNotifications(data.notification_items)
        console.log(data.trending_ads)
      } catch (error) {
        console.error("Error loading home data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchHomeData();
    }, []);

  // Loading spinner
  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-secondary rounded-full"></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar
        rightContent={
          <div className="flex items-center gap-4 md:space-x-4 text-xs md:text-lg font-medium cursor-pointer">
            <div className="relative">
              {(notifications > 0) &&  <span className={cn("block absolute h-2 w-2 bg-secondary rounded-full", 
              "top-[15%] -translate-y-[15%] translate-x-[15%] right-[15%]")}></span>}
              <IoIosNotifications size={28} className="text-[#B7B7B7]" onClick={()=> navigate('/Notifications')}/>
            </div>
            <AccountDropdown />
            <button
              onClick={() => {
                const user = JSON.parse(localStorage.getItem("currentUser"));
                if (!user) {
                  setShowSignInModal(true);
                } else {
                  navigate("/post-ad");
                }
              }}
              className="bg-secondary hover:bg-secondaryLight text-white px-3 py-2 font-medium md:text-lg rounded-2xl flex items-center gap-3"
            >
              <TbTag size={18} /> Post Ad
            </button>
          </div>
        }
      />

      <Hero />
      <HeroSearch />

      <CategoryCarousel
        title="Browse Categories"
        categories={categories}
        basePath="category"
      />

      <div className="space-y-10 mb-10">
        <AdSection title="Premium Ads" ads={premiumAds} adType="premium" />
        <AdSection title="Trending Ads" ads={trendingAds} adType="trending" />
      </div>

      {/* <Button buttonTitle="Loading More Ads" /> */}
      <Footer />
      {showSignInModal && (
        <SignInModal onClose={() => setShowSignInModal(false)} />
      )}
    </div>
  );
};

export default LandingPage;

