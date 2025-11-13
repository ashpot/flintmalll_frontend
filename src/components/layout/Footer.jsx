// import React from 'react'
// import fllogo from '../../assets/images/LogoWhite.png'
// import FooterImage from '../../assets/images/Footer.png'
// // import { BiLogoPlayStore } from "react-icons/bi";
// // import { GrAppleAppStore } from "react-icons/gr";
// import { FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa6";

// const Footer = () => {
//   return (
// 	<section className='text-white mb-10'>
// 		<div className='relative md:w-[97%] mx-auto bg-no-repeat rounded-b-[30px] md:rounded-3xl flex items-center justify-start' loading='lazy'
// 			style={{
// 				backgroundImage: `url(${FooterImage})`,
// 				backgroundBlendMode: 'overlay',
// 				backgroundSize: 'cover',
// 				backgroundPosition: 'top',
// 				minHeight: '20vh',
// 				paddingTop: '20px',
// 				paddingBottom: '20px',
// 			}}>
// 			<div className=' w-[88%] mx-auto  relative rounded-2xl'>
			
// 				<div className='flex flex-col md:flex-row justify-between py-8 items-start '>
// 					<div className='w-[95%] md:w-[32%] mx-auto md:mx-0 text-center md:text-left'>
// 						<div className='flex justify-center md:block'>
// 							<img src={fllogo} alt="early start logo" className='mb-5 w-2/4 ' />
// 						</div>
// 						<p className='font-medium text-sm md:text-lg'>
// 							Your trusted market place for buying and selling goods and services.
// 						</p>
// 						<div className='md:flex justify-start my-8 space-x-10 hidden '>
// 							<a href='' className='bg-primaryLight p-2 rounded-full text-white'><FaFacebook size={20}/></a>
// 							<a href='' className='bg-primaryLight p-2 rounded-full text-white'><FaInstagram size={20}/></a>
// 							<a href='' className='bg-primaryLight p-2 rounded-full text-white'><FaXTwitter size={20}/></a>
// 							<a href='' className='bg-primaryLight p-2 rounded-full text-white'><FaLinkedin size={20}/></a>
// 						</div>
// 					</div>
					

// 					<div className='flex justify-between gap-5 md:gap-10 mt-5 p-5 md:mt-0 md:p-0'>
// 						<div className='flex flex-col md:space-y-3  '>
// 							<h4 className='font-semibold text-primaryDull text-xs md:text-sm mb-6'>POPULAR CATEGORIES</h4>
// 							<ul className='md:space-y-4 space-y-2 font-medium text-xs md:text-lg'>
// 								<li><a href="">Gadgets</a> </li>
// 								<li><a href="">Vehicles</a> </li>
// 								<li><a href="">Fashion</a> </li>
// 								<li><a href="">Property</a> </li>
// 								<li><a href="">Home Appliances</a> </li>
// 							</ul>
// 						</div>

// 						<div className='flex flex-col md:space-y-3 '>
// 							<h4 className='font-semibold text-primaryDull text-xs md:text-sm mb-6 '>SERVICES</h4>
// 							<ul className='md:space-y-4 space-y-2 font-medium text-xs md:text-lg'>
// 								<li><a href=''>Help Center</a></li>
// 								<li><a href="">Safety Tips</a> </li>
// 								<li><a href="">FAQs</a> </li>
// 								<li><a href="">Report Abuse</a> </li>
// 							</ul>
// 						</div>
// 					</div>

// 					<div className='flex flex-col space-y-3 md:w-[28%] w-[85%] mx-auto md:mx-0'>
// 						<h4 className='font-semibold text-primaryDull text-xs md:text-sm md:mb-5 text-center md:text-left'>GET THE APP</h4>
// 						<div className='flex flex-col gap-4'>
// 							<p className='font-medium text-sm md:text-lg'>
// 								Get the best deals on the go. Buy and sell anytime, anywhere with our mobile app.
// 							</p>

// 						</div>
// 						<div className='flex justify-between pt-7 md:hidden '>
// 							<a href='' className='bg-primaryLight p-2 rounded-full text-white'><FaFacebook size={30}/></a>
// 							<a href='' className='bg-primaryLight p-2 rounded-full text-white'><FaInstagram size={30}/></a>
// 							<a href='' className='bg-primaryLight p-2 rounded-full text-white'><FaXTwitter size={30}/></a>
// 							<a href='' className='bg-primaryLight p-2 rounded-full text-white'><FaLinkedin size={30}/></a>
// 						</div>
// 					</div>

// 				</div>

// 				<div className=' text-primaryDull w-11/12 md:w-auto mx-auto mb-4 flex justify-between border-t border-white/20'>
// 					<p className='font-normal text-xs md:text-sm mt-5'>&copy; 2025 Flintmall. <span className='ml-2'>All Rights Reserved</span></p>
// 					<div className='font-normal text-xs md:text-sm mt-5 space-x-5'>
// 						<a href="/privacy-policy">Privacy Policy</a>
// 						<a href="">Terms of Service</a>
// 					</div>
// 				</div>

// 			</div>
// 		</div>
		
// 	</section>
//   )
// }

// export default Footer


import React from 'react';
import fllogo from '../../assets/images/LogoWhite.png';
import FooterImage from '../../assets/images/Footer.png';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <section className="text-white md:mb-10">
      <div
        className="relative w-full md:w-[97%] mx-auto bg-no-repeat md:rounded-b-[30px] md:rounded-3xl flex items-center justify-start"
        loading="lazy"
        style={{
          backgroundImage: `url(${FooterImage})`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          minHeight: '20vh',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <div className="w-full md:w-[88%] mx-auto px-6 md:px-0 relative rounded-2xl">
          
          <div className="flex flex-col md:flex-row justify-between py-8 items-start gap-10">
           
            <div className="w-full md:w-[32%] mx-auto md:mx-0 text-center md:text-left">
              <div className="flex justify-center md:block">
                <img src={fllogo} alt="flintmall logo" className="mb-5 w-1/2" />
              </div>
              <p className="font-medium text-sm md:text-lg">
                Your trusted market place for buying and selling goods and
                services.
              </p>
              <div className="md:flex justify-start my-8 space-x-10 hidden ">
                <a href="" className="bg-primaryLight p-2 rounded-full text-white">
                  <FaFacebook size={20} />
                </a>
                <a href="" className="bg-primaryLight p-2 rounded-full text-white">
                  <FaInstagram size={20} />
                </a>
                <a href="" className="bg-primaryLight p-2 rounded-full text-white">
                  <FaXTwitter size={20} />
                </a>
                <a href="" className="bg-primaryLight p-2 rounded-full text-white">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            <div className="flex justify-around md:justify-between gap-5 md:gap-10 w-full md:w-auto">
              <div className="flex flex-col space-y-3">
                <h4 className="font-semibold text-primaryDull text-xs md:text-sm mb-6">
                  POPULAR CATEGORIES
                </h4>
                <ul className="space-y-2 md:space-y-4 font-medium text-xs md:text-lg">
                  <li><a href="">Gadgets</a></li>
                  <li><a href="">Vehicles</a></li>
                  <li><a href="">Fashion</a></li>
                  <li><a href="">Property</a></li>
                  <li><a href="">Home Appliances</a></li>
                </ul>
              </div>

              <div className="flex flex-col space-y-3">
                <h4 className="font-semibold text-primaryDull text-xs md:text-sm mb-6">
                  SERVICES
                </h4>
                <ul className="space-y-2 md:space-y-4 font-medium text-xs md:text-lg">
                  <li><a href="">Help Center</a></li>
                  <li><a href="">Safety Tips</a></li>
                  <li><a href="">FAQs</a></li>
                  <li><a href="">Report Abuse</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-y-3 w-full md:w-[28%] mx-auto md:mx-0 text-center md:text-left">
              <h4 className="font-semibold text-primaryDull text-xs md:text-sm md:mb-5">
                GET THE APP
              </h4>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-sm md:text-lg">
                  Get the best deals on the go. Buy and sell anytime, anywhere
                  with our mobile app.
                </p>
              </div>
              <div className="flex justify-center gap-6 pt-7 md:hidden">
                <a href="" className="bg-primaryLight p-2 rounded-full text-white">
                  <FaFacebook size={30} />
                </a>
                <a href="" className="bg-primaryLight p-2 rounded-full text-white">
                  <FaInstagram size={30} />
                </a>
                <a href="" className="bg-primaryLight p-2 rounded-full text-white">
                  <FaXTwitter size={30} />
                </a>
                <a href="" className="bg-primaryLight p-2 rounded-full text-white">
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-11/12 md:w-auto mx-auto mb-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left border-t border-white/20 pt-5">
            <p className="font-normal text-xs md:text-sm">
              &copy; 2025 Flintmall.
              <span className="block md:inline ml-0 md:ml-2">
                All Rights Reserved
              </span>
            </p>
            <div className="font-normal text-xs md:text-sm space-x-5 mt-4 md:mt-0">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
