// import React, { useState } from 'react';

// const Step3_Details = ({ onNext }) => {
//   const [isNegotiable, setIsNegotiable] = useState(false);
//   const [isDeliveryAvailable, setIsDeliveryAvailable] = useState(false);


//   const handleContinue = () => {
//     // 1. Add your validation logic here
//     // 2. Save the data to your main state (in PostAdFlow)
//     // 3. Go to the next step
//     onNext();
//   };

//   return (
//     <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg my-10">
//       <div className="">
//         <h2 className="text-2xl font-bold text-center text-primary">Item Details</h2>
//         <p className="text-center font-semibold text-lg text-[#666666]">
//           Provide details about your item
//         </p>

//         {/* Form Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 my-10">
          
//           {/* Brand */}
//           <div>
//             <label className="block font-semibold text-lg text-primary mb-1">Brand *</label>
//             <input
//               type="text"
//               placeholder="e.g. Apple, Samsung"
//               className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//             />
//           </div>

//           {/* Model */}
//           <div>
//             <label className="block font-semibold text-lg text-primary mb-1">Model *</label>
//             <input
//               type="text"
//               placeholder="e.g. S25, iPhone 12"
//               className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//             />
//           </div>

//           {/* Condition */}
//           <div>
//             <label className="block font-semibold text-lg text-primary mb-1">Condition *</label>
//             <div className="relative">
//               <select className="w-full p-3 pr-10 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
//                 <option>Select condition</option>
//                 <option value="new">New</option>
//                 <option value="used">Used (Like New)</option>
//                 <option value="used_good">Used (Good)</option>
//                 <option value="used_fair">Used (Fair)</option>
//               </select>
//             </div>
//           </div>

//           {/* Storage */}
//           <div>
//             <label className="block font-semibold text-lg text-primary mb-1">Storage *</label>
//             <input
//               type="text"
//               placeholder="e.g. 128GB, 256GB"
//               className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//             />
//           </div>

//           {/* RAM */}
//           <div>
//             <label className="block font-semibold text-lg text-primary mb-1">RAM *</label>
//             <input
//               type="text"
//               placeholder="e.g. 6GB"
//               className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//             />
//           </div>

//           {/* Battery */}
//           <div>
//             <label className="block font-semibold text-lg text-primary mb-1">Battery *</label>
//             <input
//               type="text"
//               placeholder="e.g. 4000mAh"
//               className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//             />
//           </div>

//           {/* Display */}
//           <div>
//             <label className="block font-semibold text-lg text-primary mb-1">Display</label>
//             <input
//               type="text"
//               placeholder="e.g. 120Hz AMOLED"
//               className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//             />
//           </div>

//           {/* Issue */}
//           <div>
//             <label className="block font-semibold text-lg text-primary mb-1">Issue *</label>
//             <input
//               type="text"
//               placeholder="e.g. poor camera, weak battery"
//               className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//             />
//           </div>

//           {/* Description */}
//           <div className="md:col-span-2">
//             <label className="block font-semibold text-lg text-primary mb-1">Description *</label>
//             <textarea
//               rows="4"
//               placeholder="Describe your item in detail. Include features and other relevant information."
//               className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//               maxLength="1000"
//             ></textarea>
//             <p className="text-xs text-right text-gray-400">0/1000 characters</p>
//           </div>

//           {/* Price */}
//           <div className="md:col-span-2">
//             <label className="block font-semibold text-lg text-primary mb-1">Price (₦) *</label>
//             <div className="relative">
//               <span className="absolute font-semibold text-lg inset-y-0 left-0 flex items-center px-4 bg-[#CFD9E4] border border-r-0 border-[#CFD9E4] rounded-l-lg text-[#666666]">
//                 ₦
//               </span>
//               <input
//                 type="number"
//                 placeholder="0.00"
//                 className="w-full p-3 pl-14 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
//               />
//             </div>
//           </div>

//           {/* Price Type */}
//           <div className="md:col-span-2 bg-[#F7F7F7] p-4 rounded-lg flex justify-between items-center my-3">
//             <div>
//               <label className="block font-semibold text-lg text-primary">Price Type</label>
//               <p className="text-lg font-medium text-[#666666] mt-2"> 
//                 {isNegotiable ? 'Negotiable' : 'Fixed Price'}
//               </p>
//             </div>

//             {/* Right side: Toggle Switch (Your existing code) */}
//             <div className="flex items-center space-x-3">
//               <span className={`font-medium text-lg ${!isNegotiable ? 'text-primary' : 'text-[#666666]'}`}>
//                 Fixed
//               </span>
              
//               {/* Toggle Switch */}
//               <button
//                 onClick={() => setIsNegotiable(!isNegotiable)}
//                 className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors ${
//                   isNegotiable ? 'bg-[#666666]' : 'bg-[#9FB3C9]'
//                 }`}
//               >
//                 <span
//                   className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
//                     isNegotiable ? 'translate-x-6' : 'translate-x-1'
//                   }`}
//                 />
//               </button>

//               <span className={`font-medium text-lg ${isNegotiable ? 'text-primary' : 'text-[#666666]'}`}>
//                 Negotiable
//               </span>
//             </div>
//           </div>

//           {/* Delivery */}
//           <div className="md:col-span-2 flex items-center space-x-2">
//             <input
//               type="checkbox"
//               id="delivery"
//               checked={isDeliveryAvailable}
//               onChange={() => setIsDeliveryAvailable(!isDeliveryAvailable)}
//               className="h-4 w-4 text-secondary border-gray-300 rounded focus:ring-secondary"
//             />
//             <label htmlFor="delivery" className="text-sm font-medium text-gray-700">
//               Select if delivery is available.
//             </label>
//           </div>
//         </div>

//         {/* Continue Button */}
//         <div className="pt-6 w-[60%] mx-auto">
//           <button
//             onClick={handleContinue}
//             className="w-full bg-primary text-white text-lg font-bold py-3 rounded-xl hover:bg-primaryLight transition-colors"
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step3_Details;

import React, { useState } from 'react';
// Import the arrow icon
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'; 

// 1. Accept formData and setFormData as props
const Step3_Details = ({ onNext, onBack, formData, setFormData }) => {
  
  // Local state for the toggle switches is fine
  const [isNegotiable, setIsNegotiable] = useState(formData.priceType === 'Negotiable');
  const [isDeliveryAvailable, setIsDeliveryAvailable] = useState(formData.delivery || false);

  // Helper function to handle input changes and update formData
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle toggle switch specifically for priceType
  const handleToggleNegotiable = () => {
    const newIsNegotiable = !isNegotiable;
    setIsNegotiable(newIsNegotiable);
    setFormData(prevData => ({
      ...prevData,
      priceType: newIsNegotiable ? 'Negotiable' : 'Fixed'
    }));
  };

  const handleContinue = () => {
    // TODO: Add your validation logic here using the 'formData' object
    console.log("Data from Step 3:", formData); 
    onNext();
  };

  // Calculate description length
  const descriptionLength = formData.description ? formData.description.length : 0;

  return (
    <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg my-10">
      <div className="">
        <h2 className="text-2xl font-bold text-center text-primary">Item Details</h2>
        <p className="text-center font-semibold text-lg text-[#666666]">
          Provide details about your item
        </p>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 my-10">
          
          {/* Brand */}
          <div>
            <label className="block font-semibold text-lg text-primary mb-1">Brand *</label>
            <input
              type="text"
              name="brand" // Add name attribute
              placeholder="e.g. Apple, Samsung"
              className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              value={formData.brand || ''} // Add value
              onChange={handleChange} // Add onChange
            />
          </div>

          {/* Model */}
          <div>
            <label className="block font-semibold text-lg text-primary mb-1">Model *</label>
            <input
              type="text"
              name="model" // Add name
              placeholder="e.g. S25, iPhone 12"
              className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              value={formData.model || ''} // Add value
              onChange={handleChange} // Add onChange
            />
          </div>

          {/* Condition */}
          <div>
            <label className="block font-semibold text-lg text-primary mb-1">Condition *</label>
            {/* 4. Add custom dropdown arrow structure */}
            <div className="relative">
              <select 
                name="condition" // Add name
                className="w-full p-3 pr-10 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-secondary" // Add appearance-none, pr-10
                value={formData.condition || ''} // Add value
                onChange={handleChange} // Add onChange
              >
                <option value="">Select condition</option> {/* Use empty value for placeholder */}
                <option value="New">New</option>
                <option value="Used (Like New)">Used (Like New)</option>
                <option value="Used (Good)">Used (Good)</option>
                <option value="Used (Fair)">Used (Fair)</option>
              </select>
              {/* Add the arrow icon */}
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <MdOutlineKeyboardArrowDown className="text-gray-500" size={24} />
              </div>
            </div>
          </div>

          {/* Storage */}
          <div>
            <label className="block font-semibold text-lg text-primary mb-1">Storage *</label>
            <input
              type="text"
              name="storage" // Add name
              placeholder="e.g. 128GB, 256GB"
              className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              value={formData.storage || ''} // Add value
              onChange={handleChange} // Add onChange
            />
          </div>

          {/* RAM */}
          <div>
            <label className="block font-semibold text-lg text-primary mb-1">RAM *</label>
            <input
              type="text"
              name="ram" // Add name
              placeholder="e.g. 6GB"
              className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              value={formData.ram || ''} // Add value
              onChange={handleChange} // Add onChange
            />
          </div>

          {/* Battery */}
          <div>
            <label className="block font-semibold text-lg text-primary mb-1">Battery *</label>
            <input
              type="text"
              name="battery" // Add name
              placeholder="e.g. 4000mAh"
              className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              value={formData.battery || ''} // Add value
              onChange={handleChange} // Add onChange
            />
          </div>

          {/* Display */}
          <div>
            <label className="block font-semibold text-lg text-primary mb-1">Display</label>
            <input
              type="text"
              name="display" // Add name
              placeholder="e.g. 120Hz AMOLED"
              className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              value={formData.display || ''} // Add value
              onChange={handleChange} // Add onChange
            />
          </div>

          {/* Issue */}
          <div>
            <label className="block font-semibold text-lg text-primary mb-1">Issue *</label>
            <input
              type="text"
              name="issue" // Add name
              placeholder="e.g. poor camera, weak battery"
              className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              value={formData.issue || ''} // Add value
              onChange={handleChange} // Add onChange
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block font-semibold text-lg text-primary mb-1">Description *</label>
            <textarea
              rows="4"
              name="description" // Add name
              placeholder="Describe your item in detail. Include features and other relevant information."
              className="w-full p-3 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              maxLength="1000"
              value={formData.description || ''} // Add value
              onChange={handleChange} // Add onChange
            ></textarea>
            {/* Update character count dynamically */}
            <p className="text-xs text-right text-gray-400">{descriptionLength}/1000 characters</p> 
          </div>

          {/* Price */}
          <div className="md:col-span-2">
            <label className="block font-semibold text-lg text-primary mb-1">Price (₦) *</label>
            <div className="relative">
              <span className="absolute font-semibold text-lg inset-y-0 left-0 flex items-center px-4 bg-[#CFD9E4] border border-r-0 border-[#CFD9E4] rounded-l-lg text-[#666666]">
                ₦
              </span>
              <input
                type="number"
                name="price" // Add name
                placeholder="0.00"
                className="w-full p-3 pl-14 border border-[#CFD9E4] font-medium text-lg text-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                value={formData.price || ''} // Add value (handle 0 case)
                onChange={(e) => { // Handle number input specifically
                   const value = parseFloat(e.target.value) || 0;
                   setFormData(prevData => ({ ...prevData, price: value }));
                }}
              />
            </div>
          </div>

          {/* Price Type */}
          <div className="md:col-span-2 bg-[#F7F7F7] p-4 rounded-lg flex justify-between items-center my-3">
            <div>
              <label className="block font-semibold text-lg text-primary">Price Type</label>
              <p className="text-lg font-medium text-[#666666] mt-2"> 
                {isNegotiable ? 'Negotiable' : 'Fixed Price'}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className={`font-medium text-lg ${!isNegotiable ? 'text-primary' : 'text-[#666666]'}`}>
                Fixed
              </span>
              <button
                type="button" // Add type="button" to prevent form submission
                onClick={handleToggleNegotiable} // Use specific handler
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
              <span className={`font-medium text-lg ${isNegotiable ? 'text-primary' : 'text-[#666666]'}`}>
                Negotiable
              </span>
            </div>
          </div>

          {/* Delivery */}
          <div className="md:col-span-2 flex items-center space-x-2">
            <input
              type="checkbox"
              id="delivery"
              name="delivery" // Add name
              checked={isDeliveryAvailable}
              onChange={(e) => { // Update local and global state
                 setIsDeliveryAvailable(e.target.checked);
                 handleChange(e); // Call the main handler
              }}
              className="h-4 w-4 text-secondary border-gray-300 rounded focus:ring-secondary"
            />
            <label htmlFor="delivery" className="text-sm font-medium text-gray-700">
              Select if delivery is available.
            </label>
          </div>
        </div>

        {/* Continue Button */}
        <div className="pt-6 w-[60%] mx-auto">
          <button
            type="button" // Change to type="button" to prevent default form submission
            onClick={handleContinue}
            className="w-full bg-primary text-white text-lg font-bold py-3 rounded-xl hover:bg-primaryLight transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3_Details;