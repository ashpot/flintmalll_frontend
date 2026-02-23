import Navbar from '../../components/layout/Navbar'
import { IoIosNotifications } from "react-icons/io";
import { TbTag } from "react-icons/tb";
import ProductOverview from '../../components/common/ProductOverview';
import AccountDropdown from '../../components/layout/AccountDropdown';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '../../services/api';
import ContactSellerFlow from './ContactSellerFlow';
import { OpenModalContext, OpenReportModalContext } from './Context';
import ReportModal from '../../components/modals/ReportModal';
import { lockScroll } from '../../lib/LockScroll';

const ProductDetails = () => {
	const [details, setDetails] = useState(null);
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [openReport, setOpenReport] = useState(false);
	const shouldLockScroll = isOpen || openReport;
	const {id} = useParams();
	const token = localStorage.getItem("authToken");
	useEffect(() => {
		if (!id) return;

		const fetchData = async () => {
			try {
			setLoading(true);

			const res = await fetch(API_ENDPOINTS.AD_DETAILS(id), {
				headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${token}`,
				},
			});

			const data = await res.json();

			if (res.ok) {
				setDetails(data);
			}
			} catch (err) {
			console.log("Network error");
			} finally {
			setLoading(false);
			}
		};

		fetchData();
		}, [id]);
		
		// lock page scrolling when a modal is open
		useEffect(() => {
			lockScroll(shouldLockScroll)
		}, [openReport, isOpen]);

  return (
		<div className='relative'>
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
	<OpenReportModalContext.Provider value={{openReport, setOpenReport}}>
	<OpenModalContext.Provider value={{isOpen, setIsOpen}}>
		<div className='my-10 space-y-6'>
			{loading ? (
				<div className="w-full min-h-screen flex items-center justify-center">
				<div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-secondary rounded-full"></div>
				</div>
			) : details ? (
				<>
				<p className='w-[85%] mx-auto mb-5 text-lg font-medium'>
					Home/{details.ad.category.title}/{details.ad.sub_category.title}/{details.ad.title}
				</p>
					<ProductOverview details={details} id={id} />
				</>
			) : (
				<p className="text-center mt-10">No products found.</p>
			)}
			</div>
	  			{isOpen && 
					<ContactSellerFlow 
						title={details.ad.title}
						info={details.ad.user} 
						negotiable={details.ad.is_negotiable} 
						price={details.ad.price} />}
				{openReport && <ReportModal onClose={()=>setOpenReport(false)}/>}
			</OpenModalContext.Provider>
			</OpenReportModalContext.Provider>
			
	</div>
	
  )
}

export default ProductDetails
