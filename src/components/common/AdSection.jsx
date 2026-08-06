import AdCard from './AdCard';
import ProductCard from './ProductCard';

const AdSection = ({ title, ads, adType }) => {
  return (
    <>
    {(ads.length !== 0) && (
      <div className="w-full mx-auto px-4 md:px-0">
      <h2 className="sm:text-2xl font-bold text-primary mb-6">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {ads.map((ad) => {
          let spec;
          try {
          spec = JSON.parse(ad.attributes);
        } catch (error) {
          console.error("Failed to parse attributes:", error);
          spec = {};
        }

         return(
          <ProductCard
            key={ad.id}
            id={ad.id}
            image={ad.cover_photo}
            title={ad.title}
            price={ad.price}
            city={ad.city}
            state={ad.state}
            condition={spec.condition}
            timePosted={ad.date_added}
            views={ad.views}
            isVerified={ad.isVerified}
            adType={adType} 
          />
         ) 
      })}
      </div>
    </div>
    )}
      
    </>
    
  );
};

export default AdSection;