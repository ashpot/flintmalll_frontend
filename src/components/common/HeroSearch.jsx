import React, { useState } from 'react';
import { IoLocationOutline, IoCubeOutline, IoSearch } from 'react-icons/io5';
import { LuTag } from 'react-icons/lu';

const CustomSearchField = ({ icon, label, value, onChange, placeholder }) => (
  <div className="flex w-full items-center gap-2">
    {icon}
    
    {/* Label and Input */}
    <div className="flex flex-col">
      <label className="font-medium text-primary text-sm md:text-2xl whitespace-nowrap">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-sm font-medium text-primaryDull bg-transparent focus:outline-none placeholder:text-primaryDull"
      />
    </div>
  </div>
);

const HeroSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [condition, setCondition] = useState(''); 

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ searchQuery, location, budget, condition });
  };

  return (
    <div className="my-16 px-4">
      <div className="max-w-5xl mx-auto bg-white border border-[#F2F2F2] rounded-2xl shadow-lg p-2">
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row md:items-center divide-y md:divide-y-0 md:divide-x divide-gray-200"
        >
          <div className="flex-1 p-3">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2.5 border border-[#E5E5E5] text-[#B7B7B7] font-medium text-sm md:text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="p-3 w-full md:w-auto text-primary">
            <CustomSearchField
              icon={<IoLocationOutline size={18} md:size={24} />}
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter an area"
            />
          </div>

          <div className="p-3 w-full md:w-auto text-primary">
            <CustomSearchField
              icon={<LuTag size={18} md:size={21} />}
              label="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="What's your budget"
            />
          </div>

          <div className="p-3 w-full md:w-auto text-primary">
            <CustomSearchField
              icon={<IoCubeOutline size={18} md:size={24} />}
              label="Condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              placeholder="New or Old"
            />
          </div>
          
          <div className="p-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-secondary text-white p-3 rounded-2xl hover:bg-secondaryLight transition-colors flex items-center justify-center"
              aria-label="Search"
            >
              <IoSearch className="w-6 h-6" />
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default HeroSearch;