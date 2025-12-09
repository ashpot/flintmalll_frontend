/*
import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Hero from '../../components/common/HeroSection'
import HeroSearch from '../../components/common/HeroSearch'
import CategoryCarousel from '../../components/common/CategoryCarousel'
import HomeAppliances from '../../assets/images/Home Appliances.png'
import Fashion from '../../assets/images/Fashion.png'
import Gadgets from '../../assets/images/Gadgets.png'
import Property from '../../assets/images/Property.png'
import Vehicles from '../../assets/images/Vehicles.png'
import Beauty from '../../assets/images/Health and beauty.png'
import iphone from '../../assets/images/iphone.png'
import Laptop from '../../assets/images/Laptop.jpg'
import AdSection from '../../components/common/AdSection'
import Button from '../../components/ui/Button'
import Footer from '../../components/layout/Footer'
import { LuCircleUserRound } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { TbTag } from "react-icons/tb";
import AccountDropdown from '../../components/layout/AccountDropdown'

const LandingPage = () => {
	const categories = [
		{ label: "Vehicles", image: Vehicles },
		{ label: "Property", image: Property },
		{ label: "Gadgets", image: Gadgets },
		{ label: "Home Appliances", image: HomeAppliances },
		{ label: "Health & Beauty", image: Beauty },
		{ label: "Fashion", image: Fashion },
    { label: "Vehicles", image: Vehicles },
		{ label: "Property", image: Property },
		{ label: "Gadgets", image: Gadgets },
		{ label: "Home Appliances", image: HomeAppliances },
		{ label: "Health & Beauty", image: Beauty },
		{ label: "Fashion", image: Fashion },
	];

  

	const premiumAds = [
    {
      image: iphone,
      title: "Apple iPhone 13 Pro 256GB - Gold",
      price: "₦1,300,000",
      location: "Warri, Delta",
      timePosted: "5 hours ago",
      views: "9K",
      isVerified: true,
      condition: "New"
    },
    {
      image: Laptop,
      title: "Apple MacBook Pro M4-14-inch",
      price: "₦3,500,000",
      location: "Abuja, FCT",
      timePosted: "11 hours ago",
      views: "12K",
      isVerified: true,
      condition: "Used"
    },
    {
      image: Vehicles,
      title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
      price: '₦21,000,000',
      location: 'Wari, Delta',
      condition: 'New',
      timePosted: '5 hours ago',
      views: '9K',
      isVerified: true,
    },
    {
      image: Gadgets,
      title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
      price: '₦21,000,000',
      location: 'Wari, Delta',
      condition: 'New',
      timePosted: '5 hours ago',
      views: '9K ',
      isVerified: true,
    },
  ];

  const recentAds = [
    {
      image: iphone,
      title: "Apple iPhone 13 Pro 256GB - Gold",
      price: "₦1,300,000",
      location: "Warri, Delta",
      timePosted: "5 hours ago",
      views: "9K",
      isVerified: true,
      condition: "New"
    },
    {
      image: Laptop,
      title: "Apple MacBook Pro M4-14-inch",
      price: "₦3,500,000",
      location: "Abuja, FCT",
      timePosted: "5 hours ago",
      views: "9K",
      isVerified: true,
      condition: "Used"
    },
    {
      image: Vehicles,
      title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
      price: '₦21,000,000',
      location: 'Wari, Delta',
      condition: 'New',
      timePosted: '5 hours ago',
      views: '9K',
      isVerified: true,
    },
    {
      image: Gadgets,
      title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
      price: '₦21,000,000',
      location: 'Wari, Delta',
      condition: 'New',
      timePosted: '5 hours ago',
      views: '9K',
      isVerified: true,
    },
     {
      image: Vehicles,
      title: "BMW M4 2018 (Automatic) – Yellow",
      price: "₦30,000,000",
      location: "Maitama, FCT",
     timePosted: "5 hours ago",
      views: "9K",
      isVerified: true,
      condition: "Used"
    },
    {
      image: iphone,
      title: "Apple iPhone 13 Pro 256GB - Gold",
      price: "₦1,300,000",
      location: "Warri, Delta",
      timePosted: "5 hours ago",
      views: "9K",
      isVerified: true,
      condition: "New"
    },
    {
      image: Laptop,
      title: "Apple MacBook Pro M4-14-inch",
      price: "₦3,500,000",
      location: "Abuja, FCT",
      timePosted: "5 hours ago",
      views: "9K",
      isVerified: true,
      condition: "Used"
    },
    {
      image: Vehicles,
      title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
      price: '₦21,000,000',
      location: 'Wari, Delta',
      condition: 'New',
      timePosted: '5 hours ago',
      views: '9K views',
      isVerified: true,
    },
    {
      image: Gadgets,
      title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
      price: '₦21,000,000',
      location: 'Wari, Delta',
      condition: 'New',
      timePosted: '5 hours ago',
      views: '9K',
      isVerified: true,
    },
     {
      image: Vehicles,
      title: "BMW M4 2018 (Automatic) – Yellow",
      price: "₦30,000,000",
      location: "Maitama, FCT",
      timePosted: "5 hours ago",
      views: "9K",
      isVerified: true,
      condition: "Used"
    },
     {
      image: Gadgets,
      title: 'Mercedes Benz C350e 2016 (Automatic) - Silver',
      price: '₦21,000,000',
      location: 'Wari, Delta',
      condition: 'New',
      timePosted: '5 hours ago',
      views: '9K views',
      isVerified: true,
    },
    {
      image: Vehicles,
      title: "BMW M4 2018 (Automatic) – Yellow",
      price: "₦30,000,000",
      location: "Maitama, FCT",
      timePosted: "5 hours ago",
      views: "9K",
      isVerified: true,
      condition: "Used"
    },
  ];

  return (
	<div>
		<Navbar 
      rightContent={
        <div className='flex items-center gap-4 md:space-x-4 text-xs md:text-lg font-medium cursor-pointer'>
          <IoIosNotifications size={27} className=' text-[#B7B7B7]' />
          <AccountDropdown />
          
          <button 
            className='bg-secondary hover:bg-secondaryLight text-white px-3 py-2 font-medium md:text-lg rounded-2xl'>
               <a href='/post-ad' className='flex items-center gap-3'><TbTag size={18} md:size={20} />  Post Ad </a>
          </button>
        </div>
      }
    />
		<Hero />
		<HeroSearch />
		<CategoryCarousel title="Browse Categories" categories={categories} basePath='category/vehicles' />
		<div id='adSection' className="space-y-10 mb-10">
      <AdSection title="Premium Ads" ads={premiumAds} adType="premium" />
      <AdSection title="Trending Ads" ads={recentAds} adType="trending" />
    </div>
    <Button buttonTitle="Loading More Ads" linkTo='/productdetails' />
    <Footer />
	  
	</div>
  )
}

export default LandingPage
*/

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
        

const LandingPage = () => {
  const [categories, setCategories] = useState([]);
  const [premiumAds, setPremiumAds] = useState([]);
  const [trendingAds, setTrendingAds] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch home data: categories + premium_ads + trending_ads
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const token = localStorage.getItem("authToken"); 
        const response = await fetch(API_ENDPOINTS.HOMEDATA, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization" : "Token " + token
           },
        });

        if (!response.ok) {
          throw new Error("Failed to load home data");
        }

        const data = await response.json();

        setCategories(data.categories || []);
        setPremiumAds(data.premium_ads || []);
        setTrendingAds(data.trending_ads || []);

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
            <IoIosNotifications size={27} className="text-[#B7B7B7]" />
            <AccountDropdown />
            <button className="bg-secondary hover:bg-secondaryLight text-white px-3 py-2 font-medium md:text-lg rounded-2xl">
              <a href="/post-ad" className="flex items-center gap-3">
                <TbTag size={18} /> Post Ad
              </a>
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

      <div id="adSection" className="space-y-10 mb-10">
        <AdSection title="Premium Ads" ads={premiumAds} adType="premium" />
        <AdSection title="Trending Ads" ads={trendingAds} adType="trending" />
      </div>

      <Button buttonTitle="Loading More Ads" linkTo="/product-details" />
      <Footer />
    </div>
  );
};

export default LandingPage;

