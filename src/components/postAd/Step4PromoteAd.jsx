import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../services/api';
const PricingCard = ({
  plan,
  price,
  features,
  duration, 
  isSelected,
  onSelect
}) => {
  const isFree = plan === "Basic";

  const cardClasses = `p-8 rounded-2xl flex flex-col border-2 border-[#708CAF]/50 
  hover:bg-[#E5F9FE] ${isSelected ? "bg-[#E5F9FE]" : ""}`;
  
  const featureDotClasses = `w-3 h-3 rounded-full mr-3 mt-1.5 flex-shrink-0 bg-[#708CAF]`;

  return (
    <div className={cardClasses} onClick={onSelect}>
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-cyan-700">{plan}</h3>
        <p className={`mt-4 text-4xl font-bold text-cyan-500`}>
          {isFree ? 'Free' : `₦${Number(price).toLocaleString()}.00`}
        </p>
      </div>

    
        <p className="bg-[#B2ECFB] text-primaryLight rounded-full text-center font-semibold py-2 mt-6 mx-auto w-[65%]">
          {isFree ? "Unlimited" : `Duration: ${duration} days`}
        </p>

      <div className="flex-grow">
        <p className="font-semibold mt-7 mb-4">Features include:</p>
        <ul className="space-y-3">
          {/* check if features is an array before mapping */}
          {Array.isArray(features) && features.map((feature, index) => (
            <li key={index} className="flex">
              <span className={featureDotClasses}></span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};


const Step4_Promote = ({ formData, setFormData, onNext }) => {
  const [adTypes, setAdTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const buttonClasses = `w-full py-3 mt-8 rounded-2xl font-semibold transition-transform duration-200 
  hover:scale-105 bg-secondary text-white`;
  useEffect(()=>{
    const getAdTypes = async ()=>{
    const token = localStorage.getItem("authToken");
    const localSavedTypes = JSON.parse(localStorage.getItem("adTypes"));
    console.log(localSavedTypes)
    if (localSavedTypes !== null) {
      setAdTypes(localSavedTypes);
    } else {
        try {
        setLoading(true)
        const res = await fetch(API_ENDPOINTS.AD_TYPES, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`
          },
        });
        const data = await res.json();
        if (res.ok){
          console.log(data);
          setAdTypes(data.ad_types || []);
          // cache the data to local storage to avoid making another request on page mount 
          localStorage.setItem("adTypes", JSON.stringify(data.ad_types || []));
        } else{alert('server error')}
      } catch (error) {
        console.log('network error' + error)
      } finally{
        setLoading(false)
      }
    }
    }
    getAdTypes();
}, [])
  const handleSelectPlan = (adType) => {
    setFormData({ ...formData, ad_type: adType.id });
  };
  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg my-10">
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-secondary rounded-full"></div>
        </div>
      ) : (
        <>
        <h2 className="text-2xl font-bold text-center text-primary">Promote Your Ad</h2>
        <p className="text-center font-semibold text-lg text-[#666666] mb-10">
          Select how you'd like to promote your ad to reach more buyers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {adTypes.map((adType)=>(
            <PricingCard 
              key={adType.id} 
              plan={adType.name} 
              price={adType.price} 
              features={adType.features} 
              duration={adType.duration}
              isSelected={formData.ad_type === adType.id}
              onSelect={() => handleSelectPlan(adType)}
            />)
            )}
          
        </div>
        <button 
          onClick={onNext} 
          disabled={!formData.ad_type}
          className={buttonClasses}
        >
          Continue
        </button>
      </>
    )}
    </div>
  );
};

export default Step4_Promote;