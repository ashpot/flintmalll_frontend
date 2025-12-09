import React, { useState } from 'react';

// 1. COPIED PricingCard component from your BoostAds.jsx
// I added one prop: onContinueClick
const PricingCard = ({
  plan,
  price,
  features,
  isPopular,
  isPremium,
  duration,
  onDurationChange,
  onContinueClick, // <-- THE NEW PROP
}) => {
  const isFree = price === 'Free';

  const cardClasses = `
    p-8 rounded-2xl flex flex-col
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
    <div className={cardClasses} >
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{plan}</h3>
        <p className={`mt-4 text-4xl font-bold ${isPopular ? 'text-cyan-500' : ''}`}>
          {isFree ? 'Free' : `₦${price.toLocaleString()}`}
        </p>
      </div>

      {duration && (
        <div className="flex justify-between items-center space-x-4 mt-6">
          <button
            onClick={() => onDurationChange(14)}
            className={`py-2 px-7 flex items-center justify-center font-semibold rounded-3xl border transition-colors ${
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
            className={`py-2 px-7 flex items-center justify-center font-semibold rounded-3xl border transition-colors ${
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
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <span className={featureDotClasses}></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* This button now calls the prop */}
      <button onClick={onContinueClick} className={buttonClasses}>Continue</button>
    </div>
  );
};

// 2. This is the main Step 4 component
// It receives onNext from the PostAdFlow
const Step4_Promote = ({ formData, setFormData, onNext }) => {
  // COPIED state and plans from your BoostAds.jsx
  const [enhancedDuration, setEnhancedDuration] = useState(14);
  const [premiumDuration, setPremiumDuration] = useState(14);

  const plans = {
    basic: {
      plan: 'Basic', price: 'Free',
      features: [
        'Standard listing visibility.',
        'Unlimited listing duration.',
        'Up to 10 images.',
        'Standard search placement.',
      ],
    },
    enhanced: {
      plan: 'Enhanced', price: enhancedDuration === 14 ? 4000 : 7500,
      features: [
        'All Basic benefits.',
        'Higher search ranking.',
        'Appear in recommended ads.',
        'Highlighted border in listings.',
        'Priority customer support.',
      ],
    },
    premium: {
      plan: 'Premium', price: premiumDuration === 14 ? 15000 : 28000,
      features: [
        'All Enhanced benefits.',
        'Top placement in search.',
        'Homepage spotlight feature.',
        'Up to 15 photos.',
        'Dedicated account manager.',
      ],
    },
  };

  // 3. This is the wrapper that matches your other steps
  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg my-10">
      <h2 className="text-2xl font-bold text-center text-primary">Promote Your Ad</h2>
      <p className="text-center font-semibold text-lg text-[#666666] mb-10">
        Select how you'd like to promote your ad to reach more buyers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Pass the onNext function to each card's continue button */}
        <PricingCard 
          {...plans.basic} 
          onContinueClick={onNext} 
        />
        <PricingCard
          {...plans.enhanced}
          isPopular
          duration={enhancedDuration}
          onDurationChange={setEnhancedDuration}
          onContinueClick={onNext}
        />
        <PricingCard
          {...plans.premium}
          isPremium
          duration={premiumDuration}
          onDurationChange={setPremiumDuration}
          onContinueClick={onNext}
        />
      </div>
    </div>
  );
};

export default Step4_Promote;