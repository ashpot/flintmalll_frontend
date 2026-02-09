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

  const cardClasses = `h-full sm:p-8 p-5 px-4 rounded-2xl flex flex-col border-2 border-[#708CAF]/50 
  hover:bg-[#E5F9FE] ${isSelected ? "bg-[#E5F9FE]" : ""}`;
  
  const featureDotClasses = `sm:w-3 sm:h-3 h-2 w-2 rounded-full sm:mr-3 mr-2 mt-1.5 flex-shrink-0 bg-[#708CAF]`;

  return (
    <div className={cardClasses} onClick={onSelect}>
      <div className="text-center">
        <h3 className="sm:text-2xl text-xl font-semibold text-cyan-700">{plan}</h3>
        <p className={`mt-4 sm:text-4xl text-3xl font-bold text-cyan-500`}>
          {isFree ? 'Free' : `₦${Number(price).toLocaleString()}.00`}
        </p>
      </div>

    
        <p className="text-base bg-[#B2ECFB] text-primaryLight rounded-full text-center font-semibold sm:py-2 py-1.5 mt-6 mx-auto w-full sm:w-[65%]">
          {isFree ? "Unlimited" : `Duration: ${duration} days`}
        </p>

      <div className="flex-grow">
        <p className="font-semibold mt-7 mb-4">Features include:</p>
        <ul className="space-y-3 sm:text-base text-sm">
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
  // const buttonClasses = `w-full py-3 mt-8 rounded-2xl font-semibold transition-transform duration-200 
  //  bg-secondary text-white ${!formData.ad_type && 'opacity-50 cursor-not-allowed'}`;
  const buttonClasses = `sm:w-4/5 w-full mt-8 bg-primary text-white text-base font-bold py-3 rounded-xl shadow-md 
              transition-colors ${!formData.ad_type && "opacity-50 cursor-not-allowed"}`
  
  useEffect(()=>{
    const token = localStorage.getItem("authToken");
    const localSavedTypes = JSON.parse(localStorage.getItem("adTypes"));
      if (localSavedTypes !== null) {
            setAdTypes(localSavedTypes);
          } else {
          const getAdTypes = async ()=>{
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
              setAdTypes(data.ad_types || []);
              // cache the data to local storage to avoid making another request on page mount 
              localStorage.setItem("adTypes", JSON.stringify(data.ad_types || []));
            } else{alert('server error')}
          } catch (error) {
            console.log('network error' + error)
          } finally{
            setLoading(false)
          }}
          getAdTypes()
        }
}, [])
  const handleSelectPlan = (adType) => {
    setFormData({ ...formData, ad_type: adType.id });
  };
  return (
    <div className="bg-white p-6 sm:p-10 my-10 rounded-2xl shadow-lg md:w-full lg:max-w-5xl w-full mx-auto">
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-secondary rounded-full"></div>
        </div>
      ) : (
        <>
        <h2 className="sm:text-2xl text-xl font-bold text-center text-primary">Promote Your Ad</h2>
        <p className="text-center sm:text-lg text-base font-semibold text-primary text-[#666666] mb-10">
          Select how you'd like to promote your ad to reach more buyers
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
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