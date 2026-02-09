import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { cn } from '../../lib/Utils';

const Step3_Details = ({ formData, setFormData, onNext }) => {
  const parameters = JSON.parse(localStorage.getItem("parameters")) || [];
   const inputClasses = "w-full p-3 sm:p-3 px-1.5 py-2 border border-[#CFD9E4] text-[#666666] sm:text-lg text-base font-semibold sm:rounded-2xl rounded-xl"
    const labelClass = "block sm:text-lg text-base font-semibold text-primary mb-1";

  // Local states for toggles
  const [isNegotiable, setIsNegotiable] = useState(true);
  const [isDeliveryAvailable, setIsDeliveryAvailable] = useState(formData.delivery_available || false);

  // Generic handler for top-level inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handler for nested data object
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      product_details: {
        ...prev.product_details,
        [name]: value
      }
    }));
  };

  const handleToggleNegotiable = () => {
    setIsNegotiable(prev => !prev);
    setFormData(prev => ({
      ...prev,
      price_negotiable: isNegotiable ? "Yes" : "No"
    }));
  };

  const handleToggleDelivery = (e) => {
    const checked = e.target.checked;
    setIsDeliveryAvailable(checked);
    setFormData(prev => ({
      ...prev,
      delivery_available: checked
    }));
  };

  const handleContinue = () => {
    // console.log("Step 3 Data:", formData);
    onNext();
  };

  return (
    <div className="bg-white px-6 backdrop-blur-md my-8 py-8 rounded-2xl shadow-sm md:w-full lg:max-w-5xl w-full mx-auto">
      <h2 className="text-2xl font-bold text-center text-primary">Item Details</h2>
      <p className="text-center font-semibold text-lg text-[#666666]">
        Provide details about your item
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 my-10">
        {parameters.map((param, index) => (
          <div key={param.name || index}>
            <label className={labelClass}>{param.label} *</label>
            
            {param.field_type === "text"  || param.field_type == "number" || param.field_type == "date" ? (
              <input
                type= {param.field_type}
                name={param.name}
                placeholder={`Enter ${param.label}`}
                className={cn(inputClasses, "focus:ring-2 focus:ring-secondary outline-none")}
                value={formData.product_details[param.name] || ''}
                onChange={handleDataChange}
              />
            ) : (
              <select
                name={param.name}
                value={formData.product_details[param.name] || ''}
                onChange={handleDataChange}
                className={`${inputClasses} outline-none`}
              >
                <option value="">Select {param.label}</option>
                {param.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            )}
          </div>
        ))}

        {/* Description */}
        <div className="md:col-span-2">
          <label className={labelClass}>Description *</label>
          <textarea
            rows="4"
            name="description"
            placeholder="Describe your item in detail. Include features and other relevant information."
            className={cn("w-full border border-[#CFD9E4] text-[#666666] sm:text-lg text-base font-semibold sm:rounded-2xl",
                              "focus:ring-2 focus:ring-secondary outline-none rounded-xl p-3 sm:p-3 px-1.5 py-2"
                            )}
            maxLength="1000"
            value={formData.description || ''}
            onChange={handleChange}
          />
          <p className="text-xs text-right text-gray-400">{formData.description?.length || 0}/1000 characters</p>
        </div>

        {/* Price */}
        <div className="md:col-span-2">
          <label className={labelClass}>Price (₦) *</label>
          <div className="relative">
            <span className="absolute font-semibold text-lg inset-y-0 left-0 flex items-center px-4 bg-[#CFD9E4] border border-r-0 border-[#CFD9E4] rounded-l-xl sm:rounded-l-2xl text-[#666666]">
              ₦
            </span>
            <input
              type="number"
              name="price"
              placeholder="0.00"
              className={cn(inputClasses, "pl-14 sm:pl-16 focus:ring-1 focus:ring-secondary outline-none")}
              value={formData.price || ''}
              onChange={(e) => {
                const value = parseFloat(e.target.value) || 0;
                setFormData(prev => ({ ...prev, price: value }));
              }}
            />
          </div>
        </div>

        {/* Price Type Toggle */}
        <div className="text-base sm:text-lg font-semibold md:col-span-2 bg-[#F7F7F7] p-4 rounded-lg flex flex-col sm:flex-row gap-3 items-center my-3">
          <div className='flex sm:flex-col items-center sm:items-start justify-between w-full'>
            <label className="block text-primary">Price Type</label>
            <p className="font-medium text-[#666666] sm:mt-2">{isNegotiable ? "Fixed Price" : 'Negotiable'}</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`font-medium ${isNegotiable ? 'text-[#666666]' : 'text-primary'}`}>Negotiable</span>
            <button
              type="button"
              onClick={handleToggleNegotiable}
              className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors ${
                isNegotiable ? 'bg-[#666666]' : 'bg-[#9FB3C9]'
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                  isNegotiable ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isNegotiable ? 'text-[#666666]' : 'text-primary'}`}>Fixed</span>
          </div>
        </div>

        {/* Delivery */}
        <div className="md:col-span-2 flex items-center space-x-2">
          <input
            type="checkbox"
            id="delivery"
            checked={isDeliveryAvailable}
            onChange={handleToggleDelivery}
            className="h-4 w-4 text-secondary border-gray-300 rounded focus:ring-secondary"
          />
          <label htmlFor="delivery" className="text-sm font-medium text-gray-700">
            Select if delivery is available
          </label>
        </div>
      </div>

      <div className="pt-6 sm:w-[60%] mx-auto">
        <button
          type="button"
          onClick={handleContinue}
          className="w-full bg-primary text-white text-lg font-bold py-3 rounded-xl hover:bg-primaryLight transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step3_Details;
