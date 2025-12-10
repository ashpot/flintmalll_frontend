import React, { useEffect, useState } from "react";
import Navbar from '../../components/layout/Navbar'
import { LuCircleUserRound } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { TbTag } from "react-icons/tb";
import CategoryCarousel from '../../components/common/CategoryCarousel';
import AdSection from '../../components/common/AdSection'
import AccountDropdown from '../../components/layout/AccountDropdown';
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../services/api";

const CategoryDetails = () => {
	const [categories, setCategories] = useState([]);
	const [premiumAds, setPremiumAds] = useState([]);
	const [trendingAds, setTrendingAds] = useState([]);
	const [loading, setLoading] = useState(true);
	const token = localStorage.getItem("authToken"); 
	const isAuthenticated = token !== null;
	const navigate = useNavigate();


	// Fetch home data: categories + premium_ads + trending_ads
	useEffect(() => {
	const fetchHomeData = async () => {
		try {
		
		const response = await fetch(API_ENDPOINTS.HOMEDATA_OFFLINE, {
			method: "GET",
			headers: {
			"Content-Type": "application/json",
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
				<div className='flex items-center gap-4 space-x-4 text-lg font-medium cursor-pointer'>
					<IoIosNotifications size={27} className=' text-[#B7B7B7]' />
					<AccountDropdown />
					
					<button 
					className='bg-secondary hover:bg-secondaryLight text-white px-3 py-2 font-medium text-lg rounded-2xl'>
						<a href='/post-ad' className='flex items-center gap-3'><TbTag size={20} />  Post Ad </a>
					</button>
				</div>
			}
		/>
		<div className='mt-10'>
			<p className='w-[85%] mx-auto mb-5 text-lg font-medium'>Home/Vehicles </p>
			<CategoryCarousel title="Vehicle Categories" categories={categories} basePath='/category/vehicles/cars' />
			<div className="space-y-10 mb-10">
				<AdSection title="Premium Ads" ads={premiumAds} adType="premium" />
				<AdSection title="Recent Ads" ads={trendingAds} adType="trending"/>
			</div>
		</div>
		
	  
	</div>
  )
}

export default CategoryDetails
