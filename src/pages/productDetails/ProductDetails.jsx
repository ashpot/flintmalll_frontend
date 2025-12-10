import React from 'react'
import Navbar from '../../components/layout/Navbar'
import { LuCircleUserRound } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { TbTag } from "react-icons/tb";
import ProductOverview from '../../components/common/ProductOverview';
import AccountDropdown from '../../components/layout/AccountDropdown';

const ProductDetails = () => {
	

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
		<div className='mt-10 space-y-6'>
			<p className='w-[85%] mx-auto mb-5 text-lg font-medium'>Home/Vehicles/Cars/Innoson </p>
			<ProductOverview />
			
		</div>
	  
	</div>
  )
}

export default ProductDetails
