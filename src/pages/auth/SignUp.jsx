
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/layout/Navbar';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SignInScreen from '../../assets/images/SignInScreen.png';
import { API_ENDPOINTS } from "../../services/api";

const SignUp = () => {

    const navigate = useNavigate();

    // Controlled Inputs
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [facebookLink, setFacebookLink] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [whatsappNumber, setWhatsappNumber] = useState("");
    const [website, setWebsite] = useState("");
    const [isBusiness, setIsBusiness] = useState(false);
    const [businessName, setBusinessName] = useState("");

    // Loading State
    const [loading, setLoading] = useState(false);
    
      const handleSignup = async (event) => {
        event.preventDefault();
        setLoading(true);
    
        try {
          const payload = { firstname, lastname, email, password, facebookLink, instagramLink, whatsappNumber,businessName, website };
          const response = await fetch(API_ENDPOINTS.SIGNUP, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            alert(errorData.message || "Invalid login details");
            setLoading(false);
            return;
          }
    
          const data = await response.json();
    
          console.log("Login successful.");
          navigate("/add-phone-number");
    
        } catch (error) {
          console.error("Login error:", error);
          alert("Network error. Please try again.");
        } finally {
          setLoading(false);
        }
      };
    



  return (
    <div>
        <Navbar 
            rightContent={<a href="/login" className='text-black text-lg font-medium'>Already have an account? <span className='text-primary'>Sign In</span></a>}
        />

        <div
            className="pt-20 w-full h-[100%] bg-cover bg-center flex flex-col"
                style={{
                    backgroundImage:
                    "url(" + SignInScreen + ")",
                }}
            >

            <div className="flex flex-1 items-center justify-center px-4">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl w-[50%] mx-auto p-8">
                
                    <h2 className="text-4xl font-bold text-center text-primary mb-7">
                        Create an account
                    </h2>

                    <form className="space-y-4" method="post" onSubmit={handleSignup}>
                        <div className="flex justify-between gap-4">
                            <input
                                type="text"
                                placeholder="First Name" 
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                                required
                            />
                            <input 
                                type="text"
                                placeholder="Last Name"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Password (at least 8 characters)" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                                required
                            />
                            <div className="my-4 font-medium text-lg">
                                <label className="flex items-center gap-2 mb-2">
                                    Registering as a business?
                                    <input 
                                      type="checkbox" 
                                      className="accent-secondary"
                                      checked={isBusiness}
                                      onChange={(e) => setIsBusiness(e.target.checked)}
                                    />
                                </label>

                                {isBusiness && (
                                  <div className="space-y-4 my-4">
                                    <input
                                      type="text"
                                      placeholder="Business Name"
                                      value={businessName}
                                      onChange={(e) => setBusinessName(e.target.value)}
                                      className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                                    />
                                    <input
                                      type="text"
                                      placeholder="Facebook link"
                                      value={facebookLink}
                                onChange={(e) => setFacebookLink(e.target.value)}
                                      className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                                    />
                                    <input
                                      type="text"
                                      placeholder="Instagram Link"
                                      value={instagramLink}
                                onChange={(e) => setInstagramLink(e.target.value)}
                                      className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                                    />
                                    <input
                                      type="text"
                                      placeholder="Whatsapp Phone Number"
                                      value={whatsappNumber}
                                onChange={(e) => setWhatsappNumber(e.target.value)}
                                      className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                                    />
                                    <input
                                      type="text"
                                      placeholder="Website (optional)"
                                      value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                      className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                                    />
                                  </div>
                                )}

                                <p className="text-sm font-medium">By selecting Create Account, you agree to our <span className="text-primary">User Agreement</span></p>
                                <p className="text-sm font-medium">and acknowledge reading our <span className="text-primary">User Privacy Note</span></p>
                            </div>
                        </div>


                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full px-4 py-3 font-medium text-lg rounded-2xl text-white transition
                            ${loading ? "bg-secondary/60 cursor-not-allowed" : "bg-secondary hover:bg-secondaryLight"}`}
                        >
                            {loading ? (
                            <div className="flex justify-center items-center gap-2">
                                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                                Creating Account...
                            </div>
                            ) : (
                            "Create Account"
                            )}
                        </button>

                        <div className="flex items-center my-6">
                            <hr className="flex-1 border-[#B7B7B7]" />
                            <span className="px-2 text-[#666666] text-lg font-semibold">or continue with</span>
                            <hr className="flex-1 border-[#B7B7B7]" />
                        </div>

                        <div className="flex justify-center gap-4 text-lg font-bold text-[#1E1E1E]">
                            <button
                                type="button"
                                className="flex items-center gap-2 border border-white px-8 py-2 rounded-xl hover:bg-white hover:text-[#666666]"
                            >
                                <FcGoogle size={25}/> Google
                            </button>
                            <button
                                type="button"
                                className="flex items-center gap-2 border border-white px-8 py-2 rounded-xl hover:bg-white hover:text-[#666666]"
                            >
                                <FaFacebook size={25} className="text-[#1877F2]" /> Facebook
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <footer className="flex justify-between w-[85%] mx-auto font-medium text-lg text-white mt-10 mb-5">
                <p>
                    &copy; 2025 FlintMall. All Rights Reserved.
                </p>
                <div className="flex justify-center gap-3 mt-1">
                    <a href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:underline">
                        Terms of Service
                    </a>
                </div>
            </footer>
        </div>
    </div>
    
  );
};

export default SignUp;
