import React from 'react';
import { LuPlus } from 'react-icons/lu';

const SubcategoryTag = ({ name }) => (
  <span className="text-sm bg-gray-100 border border-gray-200 text-gray-700 px-3 py-1 rounded-md">
    {name}
  </span>
);

const CategoryCard = ({ title, adCount, subcategories }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] ">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-lg text-[#1E1E1E] font-bold mb-2">{title}</h3>
        <p className="text-sm font-medium text-[#666666]">{adCount} active ads</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs px-2 py-1 rounded-lg border border-[#7EE4A8] bg-[#E9FAF1] text-[#0DAC4F]">Active</span>
        <button className="px-4 py-2 border border-[#E5E5E5] rounded-lg text-sm">Edit</button>
        <button className="px-4 py-2 bg-[#FF3030] text-white rounded-lg text-sm">Delete</button>
      </div>
    </div>
    
    <div>
      <h4 className="text-sm font-semibold text-[#1E1E1E] mb-2">Subcategories</h4>
      <div className="flex flex-wrap gap-2 mb-4 ">
        {subcategories.map(sub => <SubcategoryTag key={sub} name={sub} className='border border-[#B7B7B7] text-[#666666] text-sm font-medium bg-white' />)}
      </div>
      <div className="flex gap-3">
        <input 
          type="text" 
          placeholder="Add new subcategory" 
          className="flex-1 px-4 py-2 rounded-lg border border-[#CFD9E4] text-[#666666] text-sm font-medium bg-[#E7ECF2] focus:outline-secondary"
        />
        <button className="px-5 py-2 bg-[#285386] hover:bg-[#406694] text-white rounded-lg text-sm">
          Add Subcategory
        </button>
      </div>
    </div>
  </div>
);

export default function Categories() {
  const gadgetSubs = ["Phones & Tablets", "PCs & Laptops", "Cameras", "Smart Watches", "Headphones", "Accessories"];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="text-2xl text-[#1E1E1E] font-semibold">Category Management</h3>
          <p className="text-[#666666] font-medium text-base">Manage ad categories and subcategories</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondaryLight text-white rounded-lg">
          <LuPlus size={18} />
          Add Category
        </button>
      </div>
      
      <CategoryCard title="Gadgets" adCount="45, 234" subcategories={gadgetSubs} />
      
    </div>
  );
}