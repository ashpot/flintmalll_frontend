import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SignInScreen from "../../assets/images/SignInScreen.png";

import { API_ENDPOINTS } from "../../services/api";

const SignIn = () => {
  const navigate = useNavigate();

  // Controlled Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Loading State
  const [loading, setLoading] = useState(false);

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
      localStorage.setItem("currentUser", JSON.stringify(data.user));
      alert(JSON.stringify(data.user));
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
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl w-[50%] mx-auto p-8">

            <h2 className="text-4xl font-bold text-center text-primary mb-7">
              Sign into your account
            </h2>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl 
                             focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl 
                             focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                  required
                />
                <div className="flex justify-between items-center my-4 font-medium text-lg">
                  <label className="flex items-center gap-2">
                    Stay signed in
                    <input type="checkbox" className="accent-secondary" />
                  </label>
                  <a
                    href="/forgotpassword"
                    className="text-primary hover:text-primaryLight hover:no-underline"
                  >
                    Forgot Password?
                  </a>
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

              <div className="flex justify-center gap-4 text-lg font-bold text-[#1E1E1E]">
                <button
                  type="button"
                  className="flex items-center gap-2 border border-white px-8 py-2 rounded-xl hover:bg-white hover:text-[#666666]"
                >
                  <FcGoogle size={25} /> Google
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

        <footer className="flex justify-between w-[85%] mx-auto font-medium text-lg text-white my-4">
          <p>&copy; 2025 FlintMall. All Rights Reserved.</p>
          <div className="flex justify-center gap-3 mt-1">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SignIn;
