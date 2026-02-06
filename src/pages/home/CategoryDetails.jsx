import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { IoIosNotifications } from "react-icons/io";
import { TbTag } from "react-icons/tb";
import CategoryCarousel from "../../components/common/CategoryCarousel";
import AdSection from "../../components/common/AdSection";
import AccountDropdown from "../../components/layout/AccountDropdown";
import { API_ENDPOINTS } from "../../services/api";

const CategoryDetails = () => {
  const { id } = useParams();

  const [category, setCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [premiumAds, setPremiumAds] = useState([]);
  const [trendingAds, setTrendingAds] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        setLoading(true);

        const headers = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers.Authorization = `Token ${token}`;
        }

        const response = await fetch(
          API_ENDPOINTS.CATEGORY_DETAILS(id),
          { headers }
        );

        if (!response.ok) {
          throw new Error("Failed to load category details");
        }

        const data = await response.json();
        const details = data.category_details;

        setCategory(details.category || null);
        setSubCategories(details.subcategories || []);

        // API gives a flat ads array → split client-side
        const ads = details.ads || [];
        setPremiumAds(ads.filter(ad => ad.is_premium));
        setTrendingAds(ads.filter(ad => !ad.is_premium));

      } catch (error) {
        console.error("Error loading category details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryDetails();
  }, [id, token]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-gray-300 border-t-secondary rounded-full" />
      </div>
    );
  }

  return (
    <div>
      <Navbar
        rightContent={
          <div className="flex items-center gap-4 md:space-x-4 text-xs md:text-lg font-medium cursor-pointer">
            <IoIosNotifications size={27} className="text-[#B7B7B7]" />
            <AccountDropdown />
            <button
              onClick={() => navigate("/post-ad")}
              className="bg-secondary hover:bg-secondaryLight text-white px-3 py-2 rounded-2xl flex items-center gap-3"
            >
              <TbTag size={20} /> Post Ad
            </button>
          </div>
        }
      />

      <div className="mt-10">
        <p className="w-[85%] mx-auto mb-5 text-lg font-medium">
          <span onClick={()=>navigate(-1)} className="hover:text-primary hover:underline hover:cursor-pointer">
            Home
          </span>
          {' '}/ {category?.title}
        </p>

        <CategoryCarousel
          title={category?.title}
          categories={subCategories}
          basePath={`/category/${id}`}
        />

        <div className="space-y-10 mb-10">
          <AdSection title="Premium Ads" ads={premiumAds} adType="premium" />
          <AdSection title="Recent Ads" ads={trendingAds} adType="trending" />
        </div>
      </div>
    </div>
  );
};
export default CategoryDetails;