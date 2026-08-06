import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CategoryCarousel = ({ title, categories = [], basePath }) => {
  return (
    <div className="w-full md:w-[85%] mx-auto mb-16 px-4 relative">
      {title && (
        <h2 className="font-bold text-xl md:text-[28px] text-primary mb-10">
          {title}
        </h2>
      )}

      {/* Custom arrows */}
      <div className="swiper-button-prev-custom absolute hidden sm:flex -left-0 md:-left-4 top-2/4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center cursor-pointer z-10 hover:bg-gray-50">
        <IoIosArrowBack className="text-gray-700" size={20} />
      </div>

      <div className="swiper-button-next-custom hidden absolute sm:flex -right-0 md:-right-4 top-2/4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center cursor-pointer z-10 hover:bg-gray-50">
        <IoIosArrowForward className="text-gray-700" size={20} />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={6}
        slidesPerGroup={2}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        pagination={{
          clickable: true,
          el: '.category-swiper-pagination',
          bulletClass: 'category-bullet',
          bulletActiveClass: 'category-bullet-active',
        }}
        breakpoints={{
          0: { slidesPerView: 2, slidesPerGroup: 2 },
          480: { slidesPerView: 3, slidesPerGroup: 2 },
          640: { slidesPerView: 3, slidesPerGroup: 2 },
          1024: { slidesPerView: 4, slidesPerGroup: 2 },
          1280: { slidesPerView: 6, slidesPerGroup: 2 },
        }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <Link
              to={`${basePath}/${cat.id}`}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition">
                <img
                  src={cat.photo_url}
                  alt={cat.title}
                  className="object-contain w-full h-full"
                />
              </div>

              <span className="mt-3 font-medium text-lg text-[#1E1E1E] text-center group-hover:underline decoration-[#666666] decoration-2 underline-offset-4">
                {cat.title}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="category-swiper-pagination mt-8 flex justify-center gap-2" />

      <style>{`
        .category-bullet {
          width: 8px;
          height: 8px;
          background-color: #D1D5DB;
          border-radius: 9999px;
          transition: all 300ms ease;
        }
        .category-bullet-active {
          width: 16px;
          background-color: #00BEF3;
        }
      `}</style>
    </div>
  );
};

export default CategoryCarousel;
