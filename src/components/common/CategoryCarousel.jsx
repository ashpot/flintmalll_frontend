// import React from "react";

// const CategoryCarousel = ({ title, categories = [], basePath = '/category/' }) => {
//   return (
//     <div className="w-full md:w-[85%] mx-auto mb-10">
//       {title && (
//         <h2 className="font-bold text-[28px] text-primary mb-10">{title}</h2>
//       )}

//       <div className="flex justify-between gap-6 overflow-x-auto no-scrollbar py-2"> 
//         {categories.map((cat, index) => (
          
//           <a 
//             href={basePath} 
//             key={cat.id || index}
//             className="flex flex-col items-center cursor-pointer group flex-shrink-0" // Added flex-shrink-0
//           >
//             <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition">
//               <img
//                 src={cat.image}
//                 alt={cat.label}
//                 className="object-contain w-full h-full" // Changed object-cover to object-contain
//               />
//             </div>
//             <span 
//               className="mt-3 font-medium text-lg text-[#1E1E1E] text-center group-hover:underline decoration-[#666666] decoration-2 underline-offset-4"
//             >
//               {cat.label}
//             </span>
//           </a>
//         ))}
//       </div>

//       <div className="flex justify-center mt-7 gap-2">
//         <span className="w-4 h-2 bg-secondary rounded-3xl"></span>
//         <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
//         <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
//       </div>
//     </div>
//   );
// };

// export default CategoryCarousel;


import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -right-0 md:-right-4 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer z-10 hover:bg-gray-50"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-gray-700" size={20} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -left-0 md:-left-4 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer z-10 hover:bg-gray-50"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-gray-700" size={20} />
    </div>
  );
};

const CategoryCarousel = ({ title, categories = [], basePath = '/category/' }) => {
  
  
  const settings = {
    dots: true, 
    infinite: false,
    speed: 500,
    slidesToShow: 6,   
    slidesToScroll: 2, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small Mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
    appendDots: dots => (
      <div>
        <ul className="category-dots-list">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="w-full md:w-[85%] mx-auto mb-16 px-4 relative">
      
      {/* styles for the dots */}
      <style>{`
        .category-dots-list {
          display: flex !important;
          justify-content: center;
          gap: 8px;
          margin-top: 28px;
        }
        .category-dots-list li {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .category-dots-list li button {
          padding: 0;
          font-size: 0; /* Hides the default text */
        }
        .category-dots-list li button::before {
          content: ''; 
          width: 8px;
          height: 8px;
          margin-top: 4px;
          background-color: #D1D5DB;
          border-radius: 9999px;
          display: block;
          opacity: 1;
          transition: all 300ms ease;
        }
        .category-dots-list li.slick-active button::before {
          width: 16px; 
          background-color: #00BEF3; 
        }
      `}</style>

      {title && (
        <h2 className="font-bold text-xl md:text-[28px] text-primary mb-10">{title}</h2>
      )}

      <Slider {...settings}>
        {categories.map((cat, index) => (
          
          <div key={cat.id || index} className="px-2">
            <Link
              to={`${basePath}`}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition">
                <img
                  src={cat.photo_url}
                  alt={cat.title}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="mt-3 font-medium text-lg text-[#1E1E1E] text-center group-hover:underline decoration-[#666666] decoration-2 underline-offset-4">
                {cat.label}
              </span>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;