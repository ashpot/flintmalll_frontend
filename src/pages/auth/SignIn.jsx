import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import { cn } from "../../lib/Utils";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SignInScreen from "../../assets/images/SignInScreen.png";
import { API_ENDPOINTS } from "../../services/api";
import { Link } from "react-router-dom";
import SmallFooter from "../../components/layout/SmallFooter";

const SignIn = () => {
  const navigate = useNavigate();

  // Controlled Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Loading State
  const [loading, setLoading] = useState(false);

  // General classes
  const inputClasses = cn("mt-1 w-full px-4 py-3 font-medium sm:text-lg text-base text-[#708CAF] border border-white", 
                          "focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none rounded-xl sm:rounded-2xl ")
  const iconWrapper = cn("w-full flex items-center justify-center gap-2 border border-black px-8 py-2 rounded-xl hover:bg-white hover:text-[#666666]") 

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const payload = { email, password };
      console.log(API_ENDPOINTS.LOGIN);
      const response = await fetch(API_ENDPOINTS.LOGIN, {
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
      // Save token for future requests
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("currentUser", JSON.stringify(data));
      navigate("/");

    } catch (error) {
      console.error("Login error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <title>Flintmall - SignIn</title>
      <Navbar 
        rightContent={
          <a href="/signup" className="text-black text-lg font-medium">
            New to FlintMall? <span className="text-primary">Create an Account</span>
          </a>
        }
      />

      <div
        className="pt-20 w-full h-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `url(${SignInScreen})`,
        }}
      >
        <div className="flex flex-1 items-center justify-center px-4">
          <div className={cn("bg-white/80 backdrop-blur-md rounded-2xl shadow-xl lg:w-[50%] md:w-[60%] sm:w-[70%] w-full mx-auto",
            "md:p-8 md:px-5 py-6 px-4 "
          )}>

            <h2 className="sm:text-4xl text-2xl font-bold text-center text-primary mb-7">
              Sign into your account
            </h2>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={inputClasses}
                  required
                />
                <div className="flex justify-between sm:flex-row flex-col items-center my-4 gap-2 font-medium sm:text-lg">
                  <label className="flex items-center justify-center gap-2 w-full">
                    Stay signed in
                    <input type="checkbox" className="accent-secondary" />
                  </label>
                  <Link to='/forgot-password' className="flex justify-center items-center text-primary hover:text-primaryLight hover:no-underline w-full">
                    Forgot Password?
                  </Link>
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
                    Signing In...
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>

              <div className="flex items-center my-6">
                <hr className="flex-1 border-[#B7B7B7]" />
                <span className="px-2 text-[#666666] text-lg font-semibold">or continue with</span>
                <hr className="flex-1 border-[#B7B7B7]" />
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:text-lg text-base font-bold text-[#1E1E1E] w-full">
                <button
                  type="button"
                  className={iconWrapper}
                >
                  <FcGoogle size={25} /> Google
                </button>
                {/* <button
                  type="button"
                  className={iconWrapper}
                >
                  <FaFacebook size={25} className="text-[#1877F2]" /> Facebook
                </button> */}
              </div>
            </form>
          </div>
        </div>
        <SmallFooter/>
      </div>
    </div>
  );
};

export default SignIn;
