import React from 'react';
import { GoDotFill } from "react-icons/go";

const PricingCard = ({ plan, price, duration, features }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-[#E5E5E5] ">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="text-2xl text-[#1E1E1E] font-semibold">{plan}</h4>
        <p className="text-lg font-medium text-[#666666]">{duration}</p>
      </div>
      <p className='text-2xl font-bold text-[#00BEF3] '>
        {price}
      </p>
    </div>
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-700">
          <GoDotFill size={18} className="text-[#52DB8B]" />
          <span className='text-[#1E1E1E] text-lg font-medium'>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="flex gap-3">
      <button className="flex-1 py-2 px-4 text-primaryLight font-medium text-lg border border-primaryInput rounded-lg hover:bg-[#E7ECF2]">Edit Pricing</button>
      <button className="flex-1 py-2 px-4 text-primaryLight font-medium text-lg border border-primaryInput rounded-lg hover:bg-[#E7ECF2]">Edit Features</button>
    </div>
  </div>
);

export default function PricingConfiguration() {
  return (
    <div className="space-y-6">

      {/* The Pricing Configuration Section */}
      <div className='bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm'>
        <h3 className="text-2xl text-[#1E1E1E] font-semibold">Promotion Pricing Configuration</h3>
        <p className="text-lg font-medium text-[#666666]">Manage promotional offering prices and features</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          <PricingCard
            plan="Basic"
            price="Free"
            duration="Unlimited"
            isFree={true}
            features={[
              "Standard listing visibility.",
              "Unlimited listing duration.",
              "Up to 10 images.",
              "Standard search placement."
            ]}
          />
          <PricingCard
            plan="Enhanced"
            price="₦4,000"
            duration="14 days"
            features={[
              "All Basic benefits.",
              "Higher search ranking.",
              "Appear in recommended ads.",
              "Highlighted border in listings.",
              "Priority customer support."
            ]}
          />
          <PricingCard
            plan="Enhanced"
            price="₦7,000"
            duration="30 days"
            features={[
              "All Basic benefits.",
              "Higher search ranking.",
              "Appear in recommended ads.",
              "Highlighted border in listings.",
              "Priority customer support."
            ]}
          />
          <PricingCard
            plan="Premium"
            price="₦15,000"
            duration="14 days"
            features={[
              "All Enhanced benefits.",
              "Top placement in search.",
              "Homepage spotlight feature.",
              "Up to 15 photos.",
              "Dedicated account manager."
            ]}
          />
          <PricingCard
            plan="Premium"
            price="₦25,000"
            duration="30 days"
            features={[
              "All Enhanced benefits.",
              "Top placement in search.",
              "Homepage spotlight feature.",
              "Up to 15 photos.",
              "Dedicated account manager."
            ]}
          />
        </div>
      </div>

      {/* Pricing Strategy Notes */}
      <div className="bg-[#E7ECF2] p-6 rounded-xl shadow-sm">
        <h4 className="font-bold text-lg text-[#285386] mb-2">Pricing Strategy Notes</h4>
        <ul className="list-disc list-inside text-base font-medium text-primaryInput mt-2 space-y-2">
          <li>Enhanced promotion shows 3x better performance than basic listings.</li>
          <li>Premium 30-day offers 40% better sales compared to 14-day option.</li>
          <li>Consider seasonal pricing adjustments for peak periods (Black Friday, Christmas).</li>
        </ul>
      </div>
      
    </div>
  );
}