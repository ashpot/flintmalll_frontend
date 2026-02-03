import React, { useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import Stepper from '../../components/postAd/Stepper';
import Navbar from '../../components/layout/Navbar';
import { IoIosNotifications } from "react-icons/io";
import Footer from '../../components/layout/Footer';
import Step2_Photos from '../../components/postAd/Step2Photos';
import Step3_Details from '../../components/postAd/Step3Details';
import Step4_Promote from '../../components/postAd/Step4PromoteAd';
import Step5_Review from '../../components/postAd/Step5Review';
import Step_SubmissionSuccess from '../../components/postAd/StepSubmissionSuccess';
import AccountDropdown from '../../components/layout/AccountDropdown';

// ⭐ New Step1 Component
import Step1_Category from '../../components/postAd/Step1Category';
import { API_ENDPOINTS } from '../../services/api';


// Full form data now includes Step1 fields
const initialFormData = { 
  title: "",
  category: "",
  sub_category: "",
  state: "",
  city: "",
  video_link: "",
  description: "",
  price: 0,
  price_negotiable: "No",
  delivery_available: "",
  product_details: {},
  ad_type: "",
  files: [],
};

const PostAdFlow = () => {

  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState(initialFormData);

  // --- Navigation Logic ---
  const nextStep = () => {
    if (step === 5) {
      handleSubmitForm();
    } else if (step < 5) {
      window.scrollTo(0, 0);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1 && step <= 5) {
      window.scrollTo(0, 0);
      setStep(step - 1);
    }
  };

  const goToStep = (stepNumber) => {
    if (step !== 'submitted' && stepNumber >= 1 && stepNumber <= 5) {
      window.scrollTo(0, 0);
      setStep(stepNumber);
    }
  };

  const clearForm = () => {
    setFormData(initialFormData);
    setStep(1);
  };

  const handleSubmitForm = async () => {
    const token = localStorage.getItem("authToken");
    //multipart/formdata
    const FORM_DATA = new FormData();

      FORM_DATA.append("title", formData.title);
      FORM_DATA.append("category", formData.category);
      FORM_DATA.append("sub_category", formData.sub_category);
      FORM_DATA.append("state", formData.state);
      FORM_DATA.append("city", formData.city);
      FORM_DATA.append("description", formData.description);
      FORM_DATA.append("price", formData.price);
      FORM_DATA.append("price_negotiable", formData.price_negotiable);
      FORM_DATA.append("delivery_available", formData.delivery_available);
      FORM_DATA.append("ad_type", formData.ad_type);
      FORM_DATA.append("video_link", formData.video_link || "");
      // stringify product_details cos its an object
      FORM_DATA.append("product_details", JSON.stringify(formData.product_details));

       formData.files.forEach((img) => {
        FORM_DATA.append("files", img.file); // ONLY the File
      });

    try {
      const res = await fetch(API_ENDPOINTS.CREATE_AD, {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`
        },
        body: FORM_DATA
      })
      
      const data = await res.json();
      if (res.ok) {
        alert("post added successfully")
        setStep('submitted');
        window.scrollTo(0, 0);
      } else{alert("network issue")}
    } catch (error) {
      alert('internal error')
    } 
    for (let pair of FORM_DATA.entries()) {
  console.log(pair[0], pair[1]);
}
    
  };

  // --- Render Step Components ---
  const renderStep = () => {
    switch (step) {

      // Integrate the new Step1 here
      case 1:
        return (
           
        <Step1_Category 
          formData={formData}
          setFormData={setFormData}
          onNext={nextStep} />
      
        );

      case 2:
        return (
          <Step2_Photos
            onNext={nextStep}
            onBack={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 3:
        return (
          <Step3_Details
            onNext={nextStep}
            onBack={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 4:
        return (
          <Step4_Promote
            onNext={nextStep}
            onBack={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 5:
        return (
          <Step5_Review
            onNext={nextStep}
            onBack={prevStep}
            goToStep={goToStep}
            formData={formData}
          />
        );

      case 'submitted':
        return <Step_SubmissionSuccess />;

      default:
        return (
          <Step1_Category
            formData={formData}
            setFormData={setFormData}
            onNext={nextStep}
          />
        );
    }
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen flex flex-col">
      <title>Flintmall - Post Ad</title>
      <Navbar
        rightContent={
          <div className='flex items-center gap-4 text-lg font-medium cursor-pointer'>
            <IoIosNotifications size={27} className='text-[#B7B7B7]' />
            <AccountDropdown />
          </div>
        }
      />

      {step !== 'submitted' && (
        <div className="bg-white px-6 rounded-2xl shadow-sm my-8 py-8 max-w-4xl mx-auto w-full">
          
          <header className="flex justify-between items-center mb-6 font-bold">
            <button 
              onClick={prevStep}
              disabled={step === 1}
              className={`p-2 rounded-full ${
                step === 1 
                  ? 'text-primaryInput hover:text-secondary' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <MdOutlineArrowBackIos size={20} />
            </button>

            <h1 className="text-[28px] text-primary">Post Ad</h1>

            <button
              onClick={clearForm}
              className="text-secondary text-lg hover:text-cyan-600"
            >
              Clear
            </button>
          </header>

          <p className="text-[#666666] font-medium text-lg mb-6">
            Complete the steps below to list your item.
          </p>

          <Stepper currentStep={step} />

        </div>
      )}

      <main className="max-w-7xl mx-auto px-6 flex-grow w-full">
        {renderStep()}
      </main>

      <Footer />
    </div>
  );
};

export default PostAdFlow;



