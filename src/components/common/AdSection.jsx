// import React from 'react';
// import AdCard from './AdCard';

// const AdSection = ({ title, ads }) => {
//   return (
//     <div className="md:w-[85%] mx-auto ">
//       <h2 className="text-xl font-semibold text-blue-900 mb-5">{title}</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
//         {ads.map((ad) => ( // Use ad.id as the key
//           <AdCard
//             key={ad.id} // Use a unique ID from your data as the key
//             id={ad.id}   // Pass the ID as a prop
//             image={ad.image}
//             title={ad.title}
//             price={ad.price}
//             location={ad.location}
//             condition={ad.condition}
//             timePosted={ad.timePosted}
//             views={ad.views}
//             isVerified={ad.isVerified}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdSection;



import React from 'react';
import AdCard from './AdCard';

// 1. Accept 'adType' as a prop
const AdSection = ({ title, ads, adType }) => {
  return (
    <div className="w-full md:w-[85%] mx-auto px-4 md:px-0">
      <h2 className="md:text-2xl font-bold text-primary mb-6">{title}</h2>
      {/* 2. Responsive Grid - I've adjusted this slightly for better spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {ads.map((ad) => (
          <AdCard
            key={ad.id}
            id={ad.id}
            image={ad.image}
            title={ad.title}
            price={ad.price}
            location={ad.location}
            condition={ad.condition}
            timePosted={ad.timePosted}
            views={ad.views}
            isVerified={ad.isVerified}
            adType={adType} // 3. Pass the 'adType' prop to the card
          />
        ))}
      </div>
    </div>
  );
};

export default AdSection;