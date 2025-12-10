import React, { useState } from "react";
import { API_ENDPOINTS } from "../../services/api";

const SignInModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setProcessing(true);


    try {
          const payload = { email, password };
          const response = await fetch(API_ENDPOINTS.LOGIN, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            setError(errorData.message || "Invalid login details");
            setProcessing(false);
            return;
          }
    
          const data = await response.json();
    
          // Save token for future requests
          localStorage.setItem("authToken", data.token);
          localStorage.setItem("currentUser", JSON.stringify(data.user));
           onClose(); // close modal after login
           window.location.reload();
    
        } catch (error) {
          console.error("Login error:", error);
          setError("Network error. Please try again.");
        } finally {
          setProcessing(false);
        }

    
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      {/* Modal card */}
      <div className="bg-white w-full max-w-md mx-3 md:mx-0 rounded-2xl shadow-xl p-6 relative">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-5 text-gray-900">
          Sign In
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 rounded-lg p-2 mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-secondary hover:bg-secondaryLight text-white py-3 rounded-xl font-medium text-lg transition disabled:opacity-60"
          >
            {processing ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <span className="text-secondary font-semibold cursor-pointer">
            <a href = "/signup">Create Account</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
