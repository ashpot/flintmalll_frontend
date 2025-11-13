import React from 'react';

const Step1_Category = ({ onNext }) => {
  
  const handleNextClick = () => {
    // TODO: Add your form validation logic here
    // if (all_fields_are_valid) {
    //   onNext();
    // } else {
    //   alert('Please fill out all fields');
    // }
    
    // For now, just call onNext()
    onNext();
  };

  return (
	<div>
			<div className="space-y-6 max-w-4xl mx-auto">
				<h2 className="text-2xl font-bold text-center text-primary mb-10">Select Category and Location</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Main Category */}
					<div>
					<label className="block text-lg font-medium text-primary mb-2">Main Category *</label>
					<select className="w-full p-3 border border-[#CFD9E4] text-[#666666] text-lg font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500">
						<option>Select category</option>
					</select>
					</div>

					{/* Subcategory */}
					<div>
					<label className="block text-lg font-medium text-primary mb-2">Subcategory *</label>
					<select className="w-full p-3 border border-[#CFD9E4] text-[#666666] text-lg font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500">
						<option>Select subcategory</option>
					</select>
					</div>

					{/* State/Region */}
					<div>
					<label className="block text-lg font-medium text-primary mb-2">State/Region *</label>
					<select className="w-full p-3 border border-[#CFD9E4] text-[#666666] text-lg font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500">
						<option>Select your state</option>
					</select>
					</div>

					{/* City */}
					<div>
					<label className="block text-lg font-medium text-primary mb-2">City *</label>
					<select className="w-full p-3 border border-[#CFD9E4] text-[#666666] text-lg font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500">
						<option>Select your city</option>
					</select>
					</div>
				</div>

				{/* Next Button */}
				<div className="pt-6 mx-auto flex justify-center">
					<button 
					onClick={handleNextClick}
					className="w-4/5  bg-primary text-white text-base font-bold py-3 rounded-xl shadow-md hover:text-primary hover:bg-[#E7ECF2] transition-colors"
					>
					Next
					</button>
				</div>
			</div>
		
	</div>
    
  );
};

export default Step1_Category;