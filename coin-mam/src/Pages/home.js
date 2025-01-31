import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coinmamaLogo from "../Images/coinmama-logo.webp"; // Ensure correct import

const Home = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailPlaceholder] = useState("Enter your email");
  const navigate = useNavigate();

  const handleLogin = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Please enter email");
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^[0-9]{10}$/;
      const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;

      if (!emailRegex.test(email) && !mobileRegex.test(email) && !usernameRegex.test(email)) {
        setEmailError("Please enter a valid email");
        isValid = false;
      } else {
        setEmailError("");
      }
    }

    if (isValid) {
      navigate("/alt");
    }
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 min-h-screen">
      {/* Left Side (Blue Section) */}
      <div className="bg-blue-600 flex flex-col items-center justify-center px-6 md:px-20 lg:px-32 py-10">
        <h1 className="text-white text-2xl md:text-4xl pb-6 text-center">Join the crypto revolution</h1>
        
        <div className="text-white pb-10 md:pb-20 flex flex-col gap-3 text-center">
          <p>🎧 24/7 friendly support</p>
          <p>🪙 Buy crypto instantly</p>
          <p> 🛡️ Your security, our priority</p>
          <p>✅ Trusted by 3M+ users</p>
        </div>
<div >

        <div
          className=" px-48  py-40 max-w-xs md:max-w-md bg-cover bg-center hidden md:block"
          style={{ backgroundImage: "url('/Images/coinmam.png')" }} 
          />
      </div>
          </div>

      {/* Right Side (White Section) */}
      <div className="py-10 flex flex-col items-center justify-center px-6 md:px-10">
        <div className="w-full max-w-md bg-white rounded-lg  p-6 md:p-10">
          {/* Logo */}
          <div className="flex items-center justify-center pb-6">
            <img src={coinmamaLogo} alt="Logo" className="w-32 md:w-48 rounded-full" />
          </div>

          {/* Login Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="mb-4">
              <label htmlFor="email" className="block text-blue-600 text-xl md:text-2xl pb-3">
                Log in to Coinmama
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {emailError && <p className="text-xs text-red-500 mt-1">{emailError}</p>}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 items-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 font-bold rounded-full hover:bg-blue-700 transition"
              >
                Next
              </button>
              <button
                type="button"
                onClick={() => navigate("/alt")}
                className="w-full text-blue-600 font-bold border-2 border-blue-600 py-3 rounded-full hover:bg-blue-700 hover:text-white transition"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
