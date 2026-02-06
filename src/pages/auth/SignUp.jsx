
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/layout/Navbar';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SignInScreen from '../../assets/images/SignInScreen.png';
import { API_ENDPOINTS } from "../../services/api";
import { cn } from "../../lib/Utils";
import SmallFooter from "../../components/layout/SmallFooter";

const SignUp = () => {

    const navigate = useNavigate();
    // classes 
    const inputClasses = cn("mt-1 w-full px-4 py-3 font-medium sm:text-lg text-base text-[#708CAF] border border-white", 
                              "focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none rounded-xl sm:rounded-2xl ")
    const iconWrapper = cn("flex w-full items-center justify-center gap-2 border border-black px-8 py-2 rounded-xl hover:bg-white hover:text-[#666666]") 

    // Controlled Inputs
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("Individual")
    const [facebookLink, setFacebookLink] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [whatsappLink, setWhatsappLink] = useState("");
    const [website, setWebsite] = useState("");
    const [isBusiness, setIsBusiness] = useState(false);
    const [businessName, setBusinessName] = useState("");

    // Loading State
    const [loading, setLoading] = useState(false);
    
      const handleSignup = async (event) => {
        event.preventDefault();
        setLoading(true);
        setType(()=>isBusiness ? 'Business' : 'Individual')
    
        try {
          const payload = { 
            first_name: firstName, 
            last_name: lastName, 
            email, 
            password, 
            type,
            business_name: businessName,
            whatsapp_link: whatsappLink,
            facebook_link: facebookLink,
            instagram_link: instagramLink,
            website_link: website,
        };
          const response = await fetch(API_ENDPOINTS.SIGNUP, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
          const data = await response.json();
          switch (response.status) {
            case 400:
                alert('invalid email')
                console.log(response)
                break;
            case 409:
                alert('email already register')
                break;
            case 500:
                alert('pls try again later')
                break;
            default:
                localStorage.setItem("currentUser", JSON.stringify(data.user_id));
                console.log("Signup successful.");
                navigate("/add-phone-number");
                break;
          }
        } catch (error) {
          console.error("Login error:", error);
          alert("Network error. Please try again.");
        } finally {
          setLoading(false);
        }
      };
    



  return (
    <div>
      <title>Flintmall - SignUp</title>
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
                <div className={cn("bg-white/80 backdrop-blur-md rounded-2xl shadow-xl lg:w-[50%] md:w-[60%] sm:w-[70%] w-full mx-auto",
                            "md:p-8 md:px-5 py-6 px-4 "
                          )}>
                
                    <h2 className="sm:text-4xl text-2xl font-bold text-center text-primary mb-7">
                        Create an account
                    </h2>

                    <form className="space-y-4" method="post" onSubmit={handleSignup}>
                        <div className="flex justify-between gap-4 sm:flex-row flex-col">
                            <input
                                type="text"
                                placeholder="First Name" 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className={inputClasses}
                                required
                            />
                            <input 
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className={inputClasses}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={inputClasses}
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Password (at least 8 characters)" 
                                minLength={8}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={inputClasses}
                                required
                            />
                            <div className="my-4 font-medium sm:text-lg text-base">
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
                                      className={inputClasses}
                                    />
                                    <input
                                      type="text"
                                      placeholder="Facebook link"
                                      value={facebookLink}
                                onChange={(e) => setFacebookLink(e.target.value)}
                                      className={inputClasses}
                                    />
                                    <input
                                      type="text"
                                      placeholder="Instagram Link"
                                      value={instagramLink}
                                onChange={(e) => setInstagramLink(e.target.value)}
                                      className={inputClasses}
                                    />
                                    <input
                                      type="text"
                                      placeholder="Whatsapp Phone Number"
                                      value={whatsappLink}
                                onChange={(e) => setWhatsappLink(e.target.value)}
                                      className={inputClasses}
                                    />
                                    <input
                                      type="text"
                                      placeholder="Website (optional)"
                                      value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                      className={inputClasses}
                                    />
                                  </div>
                                )}

                                <p className="sm:text-sm text-xs font-medium">By selecting Create Account, you agree to our <span className="text-primary">User Agreement</span></p>
                                <p className="sm:text-sm text-xs font-medium">and acknowledge reading our <span className="text-primary">User Privacy Note</span></p>
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

                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:text-lg text-base font-bold text-[#1E1E1E]">
                            <button
                                type="button"
                                className={iconWrapper}
                            >
                                <FcGoogle size={25}/> Google
                            </button>
                            {/* <button
                                type="button"
                                className="flex items-center gap-2 border border-white px-8 py-2 rounded-xl hover:bg-white hover:text-[#666666]"
                            >
                                <FaFacebook size={25} className="text-[#1877F2]" /> Facebook
                            </button> */}
                        </div>
                    </form>
                </div>
            </div>

            <SmallFooter />
        </div>
    </div>
    
  );
};

export default SignUp;
