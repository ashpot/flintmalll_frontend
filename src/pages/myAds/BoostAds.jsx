import React, { useState } from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const PricingCard = ({
  plan,
  price,
  features,
  isPopular,
  isPremium,
  duration,
  onDurationChange,
}) => {
  const isFree = price === 'Free';

  const cardClasses = `
    p-6 sm:p-8 rounded-2xl flex flex-col 
    ${isPopular ? 'border-2 border-[#33CBF5] bg-[#E5F9FE]' : ''}
    ${isPremium ? 'bg-primary border-[#9FB3C9] text-white' : ''}
    ${!isPopular && !isPremium ? 'bg-white border border-[#9FB3C9]' : ''}
  `;

  const buttonClasses = `
    w-full py-3 mt-8 rounded-2xl font-semibold transition-transform duration-200 hover:scale-105
    ${isPopular ? 'bg-secondary text-white' : ''}
    ${isPremium ? 'bg-[#E5F9FE] text-[#285386]' : ''}
    ${!isPopular && !isPremium ? 'bg-primary text-white' : ''}
  `;
  
  const featureDotClasses = `
    w-3 h-3 rounded-full mr-3 mt-1.5 flex-shrink-0
    ${isPopular ? 'bg-secondary' : ''}
    ${isPremium ? 'bg-[#80DFF9]' : ''}
    ${!isPopular && !isPremium ? 'bg-[#708CAF]' : ''}
  `;

  return (
    <div className={cardClasses}>
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-semibold">{plan}</h3>
        <p className={`mt-4 text-3xl sm:text-4xl font-bold ${isPopular ? 'text-cyan-500' : ''}`}>
          {isFree ? 'Free' : `₦${price.toLocaleString()}`}
        </p>
      </div>

      {duration && (
        <div className="flex justify-between items-center space-x-2 sm:space-x-4 mt-6">
          <button
            onClick={() => onDurationChange(14)}
            className={`py-2 px-4 sm:px-7 flex items-center justify-center text-sm sm:text-base font-semibold rounded-3xl border transition-colors ${
              duration === 14
                ? isPopular
                  ? 'bg-secondary text-white border-[#B2ECFB]'
                  : 'bg-[#E5F9FE] text-primaryLight border-[#9FB3C9]' 
                : 'bg-transparent' 
            }`}
          >
            14 Days
          </button>
          <button
            onClick={() => onDurationChange(30)}
            className={`py-2 px-4 sm:px-7 flex items-center justify-center text-sm sm:text-base font-semibold rounded-3xl border transition-colors ${
              duration === 30
                ? isPopular
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-[#E5F9FE] text-primaryLight border-[#9FB3C9]' 
                : 'bg-transparent' 
            }`}
          >
            30 Days
          </button>
        </div>
      )}

      {isFree && (
        <p className="bg-[#B2ECFB] text-primaryLight rounded-full text-center font-semibold py-2 mt-6">
          Unlimited
        </p>
      )}

      <div className="flex-grow">
        <p className="font-semibold mt-7 mb-4">Features include:</p>
        <ul className="space-y-3 font-medium">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <span className={featureDotClasses}></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className={buttonClasses}>Continue</button>
    </div>
  );
};



const BoostAds = () => {
  const [enhancedDuration, setEnhancedDuration] = useState(14);
  const [premiumDuration, setPremiumDuration] = useState(14);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const plans = {
    basic: {
      plan: 'Basic',
      price: 'Free',
      features: [
        'Standard listing visibility.',
        'Unlimited listing duration.',
        'Up to 10 images.',
        'Standard search placement.',
      ],
    },
    enhanced: {
      plan: 'Enhanced',
      price: enhancedDuration === 14 ? 4000 : 7500,
      features: [
        'All Basic benefits.',
        'Higher search ranking.',
        'Appear in recommended ads.',
        'Highlighted border in listings.',
        'Priority customer support.',
      ],
    },
    premium: {
      plan: 'Premium',
      price: premiumDuration === 14 ? 15000 : 28000,
      features: [
        'All Enhanced benefits.',
        'Top placement in search.',
        'Homepage spotlight feature.',
        'Up to 15 photos.',
        'Dedicated account manager.',
      ],
    },
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen flex flex-col">
      <header className=" md:text-[28px] font-bold p-7 mb-6 bg-white text-primary">
        <div className='w-[90%] max-w-7xl mx-auto relative flex justify-center items-center'>
          <MdOutlineArrowBackIos 
            className='absolute left-0 cursor-pointer' 
            onClick={handleBack} 
          />
          <span>Promote Your Ad</span>
        </div>
     </header>

      <main className="w-[90%] max-w-7xl mx-auto rounded-2xl bg-white ">
        <div className="p-4 sm:p-8">
          <p className="text-center font-semibold text-base sm:text-lg text-[#666666] pt-4 mb-8 sm:mb-12">
            Select how you'd like to promote your ad to reach more buyers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start">
            <PricingCard {...plans.basic} />
            <PricingCard
              {...plans.enhanced}
              isPopular
              duration={enhancedDuration}
              onDurationChange={setEnhancedDuration}
            />
            <PricingCard
              {...plans.premium}
              isPremium
              duration={premiumDuration}
              onDurationChange={setPremiumDuration}
            />
          </div>
        </div>
      </main>

      <footer className='max-w-[90%] mx-auto w-full pt-9 pb-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
        <p className='font-medium text-sm mb-4 md:mb-0'>&copy; 2025 Flintmall. All Rights Reserved</p>
        <div className='font-medium text-sm space-x-5'>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </footer>

    </div>
  )
}

export default BoostAds;