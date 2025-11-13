import React, { useState, useEffect } from 'react';
import heroImageBuyers from '../../assets/images/Hero Frame 1.png';
import heroImageSellers from '../../assets/images/Hero Frame 2.png';
import { HashLink as Link } from 'react-router-hash-link';

const slides = [
  {
    image: heroImageBuyers,
    preTitle: 'for buyers',
    title: 'Find Anything You Need',
    subtitle: 'Discover thousands of items for sale from your local community.',
    buttonText: 'Start Browsing',
    buttonLink: '#adSection', 
  },
  {
    image: heroImageSellers,
    preTitle: 'for sellers',
    title: 'Post Your Ad in Minutes',
    subtitle: 'Showcase your products and start selling today.',
    buttonText: 'Post Your Ad',
    buttonLink: '/post-ad', 
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative md:my-10">
      <div
        className="relative w-full md:w-[85%] mx-auto bg-no-repeat rounded-b-[30px] md:rounded-3xl flex items-center justify-start transition-all duration-500"
        loading="lazy"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          minHeight: '100vh',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <div className="text-left relative text-white">
          <div className="space-y-4 px-6 sm:px-12 md:pl-20">
            <h6 className="uppercase font-medium text-xs md:text-lg">{slide.preTitle}</h6>
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl">
              {slide.title}
            </h1>
            <p className="font-medium text-base md:text-2xl max-w-md">
              {slide.subtitle}
            </p>

            <Link
              to={slide.buttonLink}
              smooth 
              className="inline-block bg-secondary p-4 font-medium text-sm md:text-lg rounded-2xl hover:bg-secondaryLight transition-colors"
            >
              {slide.buttonText}
            </Link>

          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              currentSlide === index
                ? 'w-6 h-3 rounded-full bg-secondary'
                : 'w-3 h-3 rounded-full bg-[#E5E5E5]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;