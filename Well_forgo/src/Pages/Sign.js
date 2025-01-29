import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sign = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearUsername = () => {
    setUsername("");
  };

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const isButtonDisabled = username === "" || password === "";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div
        className="flex-1 h-40 lg:h-auto"
        style={{
          backgroundImage: `url(${require("../image/signNav.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Right Section */}
      <div
        className="flex-1 px-6 py-12 lg:px-40 lg:py-24 flex items-center justify-center"
        style={{
          backgroundImage: `url(${require("../image/winter_morning.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 lg:p-12 w-full max-w-md">
          <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6">
            Good afternoon
          </h1>

          {/* Form Inputs */}
          <div className="space-y-4">
            {/* Username Input */}
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Username"
                className="border-2 pl-10 pr-10 py-3 rounded-full text-lg w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              {username && (
                <span
                  onClick={clearUsername}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                className="border-2 pl-10 pr-10 py-3 rounded-full text-lg w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12c0 4.418 3.582 8 8 8 1.178 0 2.309-.254 3.268-.711M3 12c0-4.418 3.582-8 8-8 1.178 0 2.309.254 3.268.711M15 12a4.5 4.5 0 01-4.5 4.5M10.5 7.5L7.5 10.5M10.5 10.5l3-3"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12c0 4.418 3.582 8 8 8 1.178 0 2.309-.254 3.268-.711M3 12c0-4.418 3.582-8 8-8 1.178 0 2.309.254 3.268.711M15 12a4.5 4.5 0 01-4.5 4.5"
                    />
                  </svg>
                )}
              </span>
            </div>

            {/* Save Username Checkbox */}
            <div className="flex items-center space-x-4 text-gray-600">
              <div
                onClick={handleClick}
                className={`w-6 h-6 border-2 rounded-lg flex items-center justify-center cursor-pointer ${
                  isChecked ? "bg-blue-500 border-blue-500" : "bg-white border-gray-400"
                } transition`}
              >
                {isChecked && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span>Save username</span>
            </div>
          </div>

          {/* Info Text */}
          <p className="text-sm text-gray-500 mt-4 text-center">
            To help keep your account secure, save your username only on devices that aren't used by other people.
          </p>

          {/* Sign On Button */}
          <div className="mt-6">
            <Link to="/verify">
              <button
                disabled={isButtonDisabled}
                className={`w-full py-3 rounded-full text-lg font-bold transition ${
                  isButtonDisabled
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Sign on
              </button>
            </Link>
          </div>

          {/* Forgot Link */}
          <div className="mt-4 text-center">
            <Link to="/forgot" className="text-blue-600 hover:underline">
              Forgot username or password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
