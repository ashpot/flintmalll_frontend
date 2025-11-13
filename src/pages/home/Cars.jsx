import React from 'react'
import Navbar from '../../components/layout/Navbar'
import { LuCircleUserRound } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { TbTag } from "react-icons/tb";
import CategoryCarousel from '../../components/common/CategoryCarousel';

import HomeAppliances from '../../assets/images/Home Appliances.png'
import Fashion from '../../assets/images/Fashion.png'
import Gadgets from '../../assets/images/Gadgets.png'
import Property from '../../assets/images/Property.png'
import Vehicless from '../../assets/images/Vehicles.png'
import Beauty from '../../assets/images/Health and beauty.png'
import iphone from '../../assets/images/iphone.png'
import Laptop from '../../assets/images/Laptop.jpg'
import AdSection from '../../components/common/AdSection'
import AccountDropdown from '../../components/layout/AccountDropdown';

const Cars = () => {
	const categories = [
		{ label: "Vehicles", image: Vehicless },
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
		  posted: "Posted 5 hours ago",
		  views: "9K",
		  isVerified: true,
		  condition: "New"
		},
		{
		  image: Laptop,
		  title: "Apple MacBook Pro M4-14-inch",
		  price: "₦3,500,000",
		  location: "Abuja, FCT",
		  posted: "Posted 11 hours ago",
		  views: "12K",
		  isVerified: true,
		  condition: "Used"
		},
		{
		  image: Vehicless,
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
		  views: '9K views',
		  isVerified: true,
		},
	];
	
	const recentAds = [
		{
		  image: iphone,
		  title: "Apple iPhone 13 Pro 256GB - Gold",
		  price: "₦1,300,000",
		  location: "Warri, Delta",
		  posted: "Posted 5 hours ago",
		  views: "9K",
		  isVerified: true,
		  condition: "New"
		},
		{
		  image: Laptop,
		  title: "Apple MacBook Pro M4-14-inch",
		  price: "₦3,500,000",
		  location: "Abuja, FCT",
		  posted: "Posted 11 hours ago",
		  views: "12K",
		  isVerified: true,
		  condition: "Used"
		},
		{
		  image: Vehicless,
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
		  views: '9K views',
		  isVerified: true,
		},
		 {
		  image: Vehicless,
		  title: "BMW M4 2018 (Automatic) – Yellow",
		  price: "₦30,000,000",
		  location: "Maitama, FCT",
		  posted: "Posted 6 hours ago",
		  views: "5.9K",
		  isVerified: true,
		  condition: "Used"
		},
		{
		  image: iphone,
		  title: "Apple iPhone 13 Pro 256GB - Gold",
		  price: "₦1,300,000",
		  location: "Warri, Delta",
		  posted: "Posted 5 hours ago",
		  views: "9K",
		  isVerified: true,
		  condition: "New"
		},
		{
		  image: Laptop,
		  title: "Apple MacBook Pro M4-14-inch",
		  price: "₦3,500,000",
		  location: "Abuja, FCT",
		  posted: "Posted 11 hours ago",
		  views: "12K",
		  isVerified: true,
		  condition: "Used"
		},
		{
		  image: Vehicless,
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
		  views: '9K views',
		  isVerified: true,
		},
		 {
		  image: Vehicless,
		  title: "BMW M4 2018 (Automatic) – Yellow",
		  price: "₦30,000,000",
		  location: "Maitama, FCT",
		  posted: "Posted 6 hours ago",
		  views: "5.9K",
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
		  image: Vehicless,
		  title: "BMW M4 2018 (Automatic) – Yellow",
		  price: "₦30,000,000",
		  location: "Maitama, FCT",
		  posted: "Posted 6 hours ago",
		  views: "5.9K",
		  isVerified: true,
		  condition: "Used"
		},
	];

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
			<p className='w-[85%] mx-auto mb-5 text-lg font-medium'>Home/Vehicles/Cars </p>
			<CategoryCarousel title="Top Brands" categories={categories} basePath='/category/vehicles/cars' />
			<div className="space-y-10 mb-10">
				<AdSection title="Premium Ads" ads={premiumAds} adType="premium" />
				<AdSection title="Recent Ads" ads={recentAds} adType="trending" />
			</div>
		</div>
		
	  
	</div>
  )
}

export default Cars
