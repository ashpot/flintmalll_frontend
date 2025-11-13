// import React from 'react';
// import { MdOutlineShowChart } from "react-icons/md";
// import { BsArrowRepeat } from "react-icons/bs";
// import { PiMoneyWavyFill } from "react-icons/pi";

// const SummaryCard = ({ title, value, subtext, icon }) => (
//   <div className="bg-white p-5 border border-[#E5E5E5] rounded-lg shadow-sm text-center">
//     <p>{icon}</p>
//     <p className="text-lg text-[#1E1E1E] font-medium">{title}</p>
//     <h3 className="text-[28px] text-[#1E1E1E] font-bold my-2">{value}</h3>
//     <p className="text-base font-semibold text-[#666666]">{subtext}</p>
//   </div>
// );

// export default function PromotionAnalytics() {
//   return (
//     <div className="space-y-6">
//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm">
//           <h4 className="text-lg text-[#1E1E1E] font-semibold">Promotion Usage Distribution</h4>
//           <p className="text-base font-medium text-[#666666]">Current distribution of promotion types</p>
//           <div className="h-64 mt-4 bg-gray-100 flex items-center justify-center rounded">
//             <p className="text-gray-500">[Pie Chart Goes Here]</p>
//           </div>
//         </div>
//         <div className="bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm">
//           <h4 className="text-lg text-[#1E1E1E] font-semibold">Monthly Promotion Trends</h4>
//           <p className="text-base font-medium text-[#666666]">Promotion purchases over time</p>
//           <div className="h-64 mt-4 bg-gray-100 flex items-center justify-center rounded">
//             <p className="text-gray-500">[Line Chart Goes Here]</p>
//           </div>
//         </div>
//       </div>
      
//       {/* Summary Section */}
//       <div className='bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm'>
//         <h3 className="text-lg font-semibold">Promotion Performance Summary</h3>
//         <p className='text-lg font-medium text-[#666666]'>Currently live ads on the platform</p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
//           <SummaryCard title="Conversion Rate" value="22%" subtext="Conversion Rate" icon={MdOutlineShowChart} />
//           <SummaryCard title="Repeat Customers" value="67%" subtext="Return for more promotions" icon={BsArrowRepeat} />
//           <SummaryCard title="Average Revenue" value="₦8,400" subtext="Per promoted ad" icon={PiMoneyWavyFill} />
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { MdOutlineShowChart } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { PiMoneyWavyFill } from "react-icons/pi";

const SummaryCard = ({ title, value, subtext, icon }) => (
  <div className="bg-white p-5 border border-[#E5E5E5] rounded-lg shadow-sm text-center">
    
    <div className="flex justify-center mb-3">
      {icon}
    </div>
    
    <p className="text-lg text-[#1E1E1E] font-medium">{title}</p>
    <h3 className="text-[28px] text-[#1E1E1E] font-bold my-2">{value}</h3>
    <p className="text-base font-semibold text-[#666666]">{subtext}</p>
  </div>
);

export default function PromotionAnalytics() {
  return (
    <div className="space-y-6">
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm">
          <h4 className="text-lg text-[#1E1E1E] font-semibold">Promotion Usage Distribution</h4>
          <p className="text-base font-medium text-[#666666]">Current distribution of promotion types</p>
          <div className="h-64 mt-4 bg-gray-100 flex items-center justify-center rounded">
            <p className="text-gray-500">[Pie Chart Goes Here]</p>
          </div>
        </div>
        <div className="bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm">
          <h4 className="text-lg text-[#1E1E1E] font-semibold">Monthly Promotion Trends</h4>
          <p className="text-base font-medium text-[#666666]">Promotion purchases over time</p>
          <div className="h-64 mt-4 bg-gray-100 flex items-center justify-center rounded">
            <p className="text-gray-500">[Line Chart Goes Here]</p>
          </div>
        </div>
      </div>
      
      {/* Summary Section */}
      <div className='bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm'>
        <h3 className="text-lg font-semibold">Promotion Performance Summary</h3>
        <p className='text-lg font-medium text-[#666666]'>Currently live ads on the platform</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
          <SummaryCard 
            title="Conversion Rate" 
            value="22%" 
            subtext="Conversion Rate" 
            icon={<MdOutlineShowChart className="text-secondary" size={32} />} 
          />
          <SummaryCard 
            title="Repeat Customers" 
            value="67%" 
            subtext="Return for more promotions" 
            icon={<BsArrowRepeat className="text-[#285386]" size={32} />} 
          />
          <SummaryCard 
            title="Average Revenue" 
            value="₦8,400" 
            subtext="Per promoted ad" 
            icon={<PiMoneyWavyFill className="text-[#0DAC4F]" size={32} />} 
          />
        </div>
      </div>
    </div>
  );
}