import React, { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../../services/api";

const Step1_Category = ({ formData, setFormData, onNext }) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const token = localStorage.getItem("authToken");

  
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [city, setCity] = useState("");
  const [fields, setCategoryParameters] = useState([]);

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingSubcategories, setLoadingSubcategories] = useState(false);


  // Load categories on mount
  useEffect(() => {
    async function loadCategories() {
      setLoadingCategories(true);
      try {
        const res = await fetch(API_ENDPOINTS.CATEGORIES,{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          }});
        const data = await res.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error loading categories", error);
      }
      setLoadingCategories(false);
    }

    loadCategories();
  }, []);


  // Load subcategories when category changes
  const handleCategoryChange = async (e) => {
    const categoryId = e.target.value;
    const selectedCategory = e.target.value;

    setFormData({
                  ...formData,
                  category: selectedCategory,
                  subcategory: ""
    });

    if (!selectedCategory) return;

    setLoadingSubcategories(true);

    try {
      const res = await fetch(`${API_ENDPOINTS.CATEGORY_PARAMETERS}${categoryId}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      const data = await res.json();
      setSubcategories(data.sub_categories || []);
	    setCategoryParameters(data.fields || []);
      localStorage.setItem("parameters", JSON.stringify(data.fields));
    } catch (error) {
      console.error("Error loading subcategories:", error);
    } finally {
      setLoadingSubcategories(false);
    }
  };

   
  
  const handleNext = () => {
    if (
      !formData.category ||
      !formData.subcategory ||
      !formData.state ||
      !formData.city
    ) {
      alert("Please fill all fields");
      return;
    }
    onNext();
  };



  return (
     <div className="bg-white px-6 rounded-2xl shadow-sm my-8 py-8 max-w-4xl mx-auto w-full">
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-primary mb-10">
          Select Category and Location
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          
          <div>
            <label className="block text-lg font-medium text-primary mb-2">
              Main Category *
            </label>

            <select
              className="w-full p-3 border border-[#CFD9E4] text-[#666666] text-lg font-semibold rounded-2xl"
              /*
              value={selectedCategory}
              onChange={handleCategoryChange}
              */
             value={formData.category}
          onChange= {handleCategoryChange}
            >
              <option value="">Select category</option>

              {loadingCategories ? (
                <option>Loading...</option>
              ) : (
                categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title}
                  </option>
                ))
              )}
            </select>
          </div>

          
          <div>
            <label className="block text-lg font-medium text-primary mb-2">
              Subcategory *
            </label>

            <select
              className="w-full p-3 border border-[#CFD9E4] text-[#666666] text-lg font-semibold rounded-2xl"
             value={formData.subcategory}
              /*
               value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              disabled={!selectedCategory}
              */
             onChange={(e) =>
            setFormData({ ...formData, subcategory: e.target.value })
          }
          disabled={!formData.category}
            >
              <option value="">
                {loadingSubcategories ? "Loading..." : "Select subcategory"}
              </option>

              {subcategories.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.title}
                </option>
              ))}
            </select>
          </div>

          
          <div>
            <label className="block text-lg font-medium text-primary mb-2">
              State / Region *
            </label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              placeholder="Enter your state"
              className="w-full p-3 border border-[#CFD9E4] text-[#666666] text-lg font-semibold rounded-2xl"
            />
          </div>

          
          <div>
            <label className="block text-lg font-medium text-primary mb-2">
              City *
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="Enter your city"
              className="w-full p-3 border border-[#CFD9E4] text-[#666666] text-lg font-semibold rounded-2xl"
            />
          </div>

        </div>

        
        <div className="pt-6 mx-auto flex justify-center">
          <button
            onClick={handleNext}
            disabled={
              !formData.category ||
              !formData.subcategory ||
              !formData.state ||
              !formData.city
            }
            className={`w-4/5 bg-primary text-white text-base font-bold py-3 rounded-xl shadow-md 
              transition-colors ${
                !formData.category ||
                !formData.subcategory ||
                !formData.state ||
                !formData.city
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:text-primary hover:bg-[#E7ECF2]"
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>

            );
};
export default Step1_Category;
