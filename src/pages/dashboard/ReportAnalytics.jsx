// import React from 'react';


// const CategoryStatItem = ({ title, ads, revenue, change }) => (
//   <div className="flex justify-between items-center p-3 space-y-2 rounded-lg border border-[#E5E5E5]">
//     <div>
//       <p className="font-medium text-[#1E1E1E] mb-1 text-lg">{title}</p>
//       <p className="text-base font-medium text-[#666666]">{ads} ads <span className='p-1'>•</span>  {revenue} revenue</p>
//     </div>
//     <span className="text-sm font-medium text-[#0DAC4F] bg-[#E9FAF1] px-2 py-1 rounded-lg">{change}</span>
//   </div>
// );

// const RegionHeatmapItem = ({ region, percentage, ads, users }) => (
//   <div className='space-y-3'>
//     <div className="flex justify-between mt-5">
//       <span className="font-semibold text-[#1E1E1E] text-lg ">{region}</span>
//       <span className="text-base font-medium text-[#666666]">{percentage}</span>
//     </div>
//     <div className="w-full bg-gray-200 rounded-full h-2 ">
//       <div className="bg-secondary h-2 rounded-full" style={{ width: percentage }}></div>
//     </div>
//     <div className="flex justify-between text-sm font-medium text-[#666666]">
//       <span>{ads} ads</span>
//       <span>{users} users</span>
//     </div>
//   </div>
// );

// const RecommendationCard = ({ title, text, color }) => (
//   <div className={`px-4 py-6 rounded-xl ${color}`}>
//     <h4 className="font-semibold text-lg mb-2">{title}</h4>
//     <p className="text-base font-medium">{text}</p>
//   </div>
// );

// export default function ReportsAndAnalytics() {
//   return (
//     <div className="space-y-6">
      
//       {/* Page Title & Date Filter */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-[28px] text-[#1E1E1E] font-semibold">Reports & Analytics</h2>
//           <p className="text-[#666666] font-medium text-bas">Platform performance insights and market trends.</p>
//         </div>
//         <div>
//           <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white">
//             <option>Last 7 days</option>
//             <option>Last 30 days</option>
//             <option>Last 90 days</option>
//           </select>
//         </div>
//       </div>

//       {/* Category Performance */}
//       <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] ">
//         <h3 className="text-lg text-[#1E1E1E] font-semibold">Category Performance</h3>
//         <p className='text-base font-medium text-[#666666]'>Ad volume and revenue by category</p>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
//           {/* Bar Chart */}
//           <div>
//             <h4 className="font-semibold text-lg text-[#1E1E1E] mb-3">Ad Volume by Category</h4>
//             <div className="h-80 bg-gray-100 flex items-center justify-center rounded">
//               <p className="text-gray-500">[Category Bar Chart Goes Here]</p>
//             </div>
//           </div>
//           {/* Category Statistics */}
//           <div>
//             <h4 className="font-semibold text-lg text-[#1E1E1E] mb-3">Category Statistics</h4>
//             <div className="space-y-2">
//               <CategoryStatItem title="Gadgets" ads="45,234" revenue="₦12,500,000" change="+18%" />
//               <CategoryStatItem title="Vehicles" ads="28,567" revenue="₦8,900,000" change="+12%" />
//               <CategoryStatItem title="Properties" ads="15,678" revenue="₦6,200,000" change="+22%" />
//               <CategoryStatItem title="Gadgets" ads="45,234" revenue="₦12,500,000" change="+18%" />
//               <CategoryStatItem title="Vehicles" ads="28,567" revenue="₦8,900,000" change="+12%" />
//               <CategoryStatItem title="Properties" ads="15,678" revenue="₦6,200,000" change="+22%" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Heatmap, Buyer Ratio, Keywords */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
//         {/* Regional Activity Heatmap */}
//         <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]">
//           <h3 className="text-lg text-[#1E1E1E] font-semibold">Regional Activity Heatmap</h3>
//           <p className='text-base font-medium text-[#666666]'>Ad posting activity by Nigerian states</p>
//           <RegionHeatmapItem region="Lagos" percentage="35%" ads="89,234" users="234,567" />
//           <RegionHeatmapItem region="Abuja" percentage="18%" ads="45,678" users="123,456" />
//           <RegionHeatmapItem region="Kano" percentage="14%" ads="34,567" users="98,765" />
//           <RegionHeatmapItem region="Aba" percentage="9%" ads="1,542" users="765" />
//         </div>
        
//         <div className="space-y-6">
//           {/* Buyer vs Seller Ratio */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]">
//             <h3 className="text-lg text-[#1E1E1E] font-semibold">Buyer vs Seller Ratio</h3>
//             <p className='text-base font-medium text-[#666666]'>Monthly active buyers and sellers</p>
//             <div className="h-48 bg-gray-100 flex items-center justify-center rounded mt-4">
//               <p className="text-gray-500">[Buyer/Seller Line Chart]</p>
//             </div>
//           </div>
          
//           {/* Popular Search Keywords */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]">
//             <h3 className="text-lg text-[#1E1E1E] font-semibold">Popular Search Keywords</h3>
//             <p className='text-base font-medium text-[#666666]'>Most searched terms on the platform</p>
//             <div className="overflow-x-auto">
//               <table className="min-w-full">
//                 <th>Rank</th>
//                 <th>Keyword</th>
//                 <th>Searches</th>
//                 <th>Trend</th>
//               </table>
//               <div className="h-32 bg-gray-100 flex items-center justify-center rounded">
//                 <p className="text-gray-500">[Keywords Table]</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Traffic Sources & Key Insights */}
//         <div className="space-y-6">
//           {/* Traffic Sources */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5]">
//             <h3 className="text-lg text-[#1E1E1E] font-semibold">Traffic Sources</h3>
//             <p className='text-base font-medium text-[#666666]'>How users find FlintMall</p>
//             <div className="h-48 bg-gray-100 flex items-center justify-center rounded mt-4">
//               <p className="text-gray-500">[Traffic Pie Chart]</p>
//             </div>
//           </div>
          
//         </div>
        
//       </div>

//       {/* Key Insights & Recommendations */}
//       <div className="bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm">
//         <h3 className="text-2xl text-[#1E1E1E] font-semibold">Key Insights & Recommendations</h3>
//         <p className='text-lg font-medium text-[#666666]'>AI-powered insights from platform data</p>
//         <div className="flex justify-between gap-3 rounded-lg shadow-sm my-4">
//           <RecommendationCard 
//             title="Growth Opportunity" 
//             text="Electronics category shows 18% growth. Consider targeted campaigns..."
//             color="bg-[#E5F9FE] text-[#285386]"
//           />
//           <RecommendationCard 
//             title="Market Expansion" 
//             text="Northern states (Kano, Kaduna) show strong engagement. Marketing investment..."
//             color="bg-[#E9FAF1] text-[#0DAC4F]"
//           />
//           <RecommendationCard 
//             title="User Behavior" 
//             text="2.4:1 buyer-to-seller ratio indicates healthy marketplace dynamics..."
//             color="bg-[#F3E8FF] text-[#7C3AED]"
//           />
//         </div>
//       </div>
          
//     </div>
//   );
// }


import React from 'react';
// Added imports for the trend icons
import { LuTrendingUp, LuTrendingDown, LuMinus } from 'react-icons/lu';

// --- HELPER COMPONENTS & DATA ---

const CategoryStatItem = ({ title, ads, revenue, change }) => (
  <div className="flex justify-between items-center p-3 space-y-2 rounded-lg border border-[#E5E5E5]">
    <div>
      <p className="font-medium text-[#1E1E1E] mb-1 text-lg">{title}</p>
      <p className="text-base font-medium text-[#666666]">{ads} ads <span className='p-1'>•</span>  {revenue} revenue</p>
    </div>
    <span className="text-sm font-medium text-[#0DAC4F] bg-[#E9FAF1] px-2 py-1 rounded-lg">{change}</span>
  </div>
);

const RegionHeatmapItem = ({ region, percentage, ads, users }) => (
  <div className='space-y-3'>
    <div className="flex justify-between mt-5">
      <span className="font-semibold text-[#1E1E1E] text-lg ">{region}</span>
      <span className="text-base font-medium text-[#666666]">{percentage}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 ">
      <div className="bg-secondary h-2 rounded-full" style={{ width: percentage }}></div>
    </div>
    <div className="flex justify-between text-sm font-medium text-[#666666]">
      <span>{ads} ads</span>
      <span>{users} users</span>
    </div>
  </div>
);

const RecommendationCard = ({ title, text, color }) => (
  <div className={`px-4 py-6 rounded-xl ${color}`}>
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    <p className="text-base font-medium">{text}</p>
  </div>
);

// --- NEW: Trend Indicator Helper ---
const TrendIndicator = ({ trend }) => {
  switch (trend) {
    case 'up':
      return (
        <span className="flex items-center gap-1 text-[#0DAC4F] font-medium">
          <LuTrendingUp size={16} />
          <span>Up</span>
        </span>
      );
    case 'down':
      return (
        <span className="flex items-center gap-1 text-[#FF3030] font-medium">
          <LuTrendingDown size={16} />
          <span>Down</span>
        </span>
      );
    case 'stable':
      return (
        <span className="flex items-center gap-1 text-[#666666] font-medium">
          <LuMinus size={16} />
          <span>Stable</span>
        </span>
      );
    default:
      return null;
  }
};

// --- NEW: Mock Data for Keywords ---
const searchKeywordsData = [
  { rank: '01', keyword: 'iPhone', searches: '234,567', trend: 'up' },
  { rank: '02', keyword: 'Toyota', searches: '189,234', trend: 'up' },
  { rank: '03', keyword: 'Lagos Apartment', searches: '145,678', trend: 'stable' },
  { rank: '04', keyword: 'MacBook', searches: '123,456', trend: 'up' },
  { rank: '05', keyword: 'Generator', searches: '98,765', trend: 'down' },
  { rank: '06', keyword: 'Samsung', searches: '87,654', trend: 'stable' },
  { rank: '07', keyword: 'Honda', searches: '76,543', trend: 'up' },
  { rank: '08', keyword: 'Furniture', searches: '65,432', trend: 'stable' },
  { rank: '09', keyword: 'Laptop', searches: '54,321', trend: 'up' },
  { rank: '10', keyword: 'Land for sale', searches: '43,210', trend: 'up' },
];


// --- MAIN COMPONENT ---

export default function ReportsAndAnalytics() {
  return (
    <div className="space-y-6">
      
      {/* Page Title & Date Filter */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[28px] text-[#1E1E1E] font-semibold">Reports & Analytics</h2>
          <p className="text-[#666666] font-medium text-base">Platform performance insights and market trends.</p>
        </div>
        <div>
          <select className="px-4 py-2 rounded-lg border border-[#E5E5E5] bg-transparent text-[#1E1E1E] font-medium text-base">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Category Performance */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] ">
        <h3 className="text-lg text-[#1E1E1E] font-semibold">Category Performance</h3>
        <p className='text-base font-medium text-[#666666]'>Ad volume and revenue by category</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
          {/* Bar Chart */}
          <div>
            <h4 className="font-semibold text-lg text-[#1E1E1E] mb-3">Ad Volume by Category</h4>
            <div className="h-80 bg-gray-100 flex items-center justify-center rounded">
              <p className="text-gray-500">[Category Bar Chart Goes Here]</p>
            </div>
          </div>
          {/* Category Statistics */}
          <div>
            <h4 className="font-semibold text-lg text-[#1E1E1E] mb-3">Category Statistics</h4>
            <div className="space-y-2">
              <CategoryStatItem title="Gadgets" ads="45,234" revenue="₦12,500,000" change="+18%" />
              <CategoryStatItem title="Vehicles" ads="28,567" revenue="₦8,900,000" change="+12%" />
              <CategoryStatItem title="Properties" ads="15,678" revenue="₦6,200,000" change="+22%" />
              <CategoryStatItem title="Gadgets" ads="45,234" revenue="₦12,500,000" change="+18%" />
              <CategoryStatItem title="Vehicles" ads="28,567" revenue="₦8,900,000" change="+12%" />
              <CategoryStatItem title="Properties" ads="15,678" revenue="₦6,200,000" change="+22%" />
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap, Buyer Ratio, Keywords */}
      <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
        
        {/* Regional Activity Heatmap */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] col-span-2">
          <h3 className="text-lg text-[#1E1E1E] font-semibold">Regional Activity Heatmap</h3>
          <p className='text-base font-medium text-[#666666]'>Ad posting activity by Nigerian states</p>
          <RegionHeatmapItem region="Lagos" percentage="35%" ads="89,234" users="234,567" />
          <RegionHeatmapItem region="Abuja" percentage="18%" ads="45,678" users="123,456" />
          <RegionHeatmapItem region="Kano" percentage="14%" ads="34,567" users="98,765" />
          <RegionHeatmapItem region="Aba" percentage="9%" ads="1,542" users="765" />
        </div>
        
        {/* Buyer vs Seller Ratio */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] col-span-2 ">
          <h3 className="text-lg text-[#1E1E1E] font-semibold">Buyer vs Seller Ratio</h3>
          <p className='text-base font-medium text-[#666666]'>Monthly active buyers and sellers</p>
          <div className="h-48 bg-gray-100 flex items-center justify-center rounded mt-4">
            <p className="text-gray-500">[Buyer/Seller Line Chart]</p>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] col-span-2 ">
          <h3 className="text-lg text-[#1E1E1E] font-semibold">Traffic Sources</h3>
          <p className='text-base font-medium text-[#666666]'>How users find FlintMall</p>
          <div className="h-48 bg-gray-100 flex items-center justify-center rounded mt-4">
            <p className="text-gray-500">[Traffic Pie Chart]</p>
          </div>
        </div>
          
        {/* Popular Search Keywords - INTEGRATED HERE */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E5E5E5] col-span-2">
          <h3 className="text-lg text-[#1E1E1E] font-semibold">Popular Search Keywords</h3>
          <p className='text-base font-medium text-[#666666] mb-4'>Most searched terms on the platform</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-[#E5E5E5]">
                  <th className="py-3 px-2 text-left text-sm font-semibold text-[#666666]">Rank</th>
                  <th className="py-3 px-2 text-left text-sm font-semibold text-[#666666]">Keyword</th>
                  <th className="py-3 px-2 text-left text-sm font-semibold text-[#666666]">Searches</th>
                  <th className="py-3 px-2 text-left text-sm font-semibold text-[#666666]">Trend</th>
                </tr>
              </thead>
              <tbody>
                {searchKeywordsData.map((item) => (
                  <tr key={item.rank} className="border-b border-[#E5E5E5] last:border-0">
                    <td className="py-4 px-2 text-sm font-medium text-[#666666]">{item.rank}</td>
                    <td className="py-4 px-2 text-sm font-medium text-[#1E1E1E]">{item.keyword}</td>
                    <td className="py-4 px-2 text-sm font-medium text-[#1E1E1E]">{item.searches}</td>
                    <td className="py-4 px-2 text-sm">
                      <TrendIndicator trend={item.trend} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        
      </div>

      {/* Key Insights & Recommendations */}
      <div className="bg-white p-5 border border-[#E5E5E5] rounded-xl shadow-sm">
        <h3 className="text-2xl text-[#1E1E1E] font-semibold">Key Insights & Recommendations</h3>
        <p className='text-lg font-medium text-[#666666]'>AI-powered insights from platform data</p>
        <div className="flex justify-between gap-3 rounded-lg shadow-sm my-4">
          <RecommendationCard 
            title="Growth Opportunity" 
            text="Electronics category shows 18% growth. Consider targeted campaigns..."
            color="bg-[#E5F9FE] text-[#285386]"
          />
          <RecommendationCard 
            title="Market Expansion" 
            text="Northern states (Kano, Kaduna) show strong engagement. Marketing investment..."
            color="bg-[#E9FAF1] text-[#0DAC4F]"
          />
          <RecommendationCard 
            title="User Behavior" 
            text="2.4:1 buyer-to-seller ratio indicates healthy marketplace dynamics..."
            color="bg-[#F3E8FF] text-[#7C3AED]"
          />
        </div>
      </div>
          
    </div>
  );
}