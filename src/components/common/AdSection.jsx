import AdCard from './AdCard';
import ProductCard from './ProductCard';

const AdSection = ({ title, ads, adType }) => {
  return (
    <>
    {(ads.length !== 0) && (
      <div className="w-full md:w-[85%] mx-auto px-4 md:px-0">
      <h2 className="md:text-2xl font-bold text-primary mb-6">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {ads.map((ad) => (
          // <AdCard
          //   key={ad.id}
          //   id={ad.id}
          //   image={ad.cover_photo}
          //   title={ad.title}
          //   price={ad.price}
          //   city={ad.city}
          //   state={ad.state}
          //   condition={ad.attributes.condition || ""}
          //   timePosted={ad.date_added}
          //   views={ad.views}
          //   isVerified={ad.isVerified}
          //   adType={adType} 
          // />
          <ProductCard
            key={ad.id}
            id={ad.id}
            image={ad.cover_photo}
            title={ad.title}
            price={ad.price}
            city={ad.city}
            state={ad.state}
            condition={ad.attributes.condition || ""}
            timePosted={ad.date_added}
            views={ad.views}
            isVerified={ad.isVerified}
            adType={adType} 
          />
        ))}
      </div>
    </div>
    )}
      
    </>
    
  );
};

export default AdSection;