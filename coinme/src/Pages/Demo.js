import React, { useState } from "react";
import { Link } from "react-router-dom";

const Demo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <Link to="/home">
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <img src={require("../Image/coinme-logo.webp")} alt="Logo" className="w-20 rounded-full" />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold">
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer">Location</li>
          <li className="hover:text-blue-600 cursor-pointer">Prices</li>
          <li className="hover:text-blue-600 cursor-pointer">Learn</li>
          <li className="hover:text-blue-600 cursor-pointer">Enterprise</li>
          <li className="hover:text-blue-600 cursor-pointer">Support</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/home">
            <button className="bg-gray-200 px-4 py-2 rounded-full font-medium">
              Sign In
            </button>
          </Link>
          <button className="bg-black text-white px-4 py-2 rounded-full font-medium">
            Create Account
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </nav>

      {/* Mobile Menu (Drawer) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6">
            <button
              className="text-xl mb-6 focus:outline-none"
              onClick={toggleMenu}
            >
              &times;
            </button>
            <ul className="space-y-4 text-lg font-medium">
              <li className="hover:text-blue-600 cursor-pointer">Features</li>
              <li className="hover:text-blue-600 cursor-pointer">Location</li>
              <li className="hover:text-blue-600 cursor-pointer">Prices</li>
              <li className="hover:text-blue-600 cursor-pointer">Learn</li>
              <li className="hover:text-blue-600 cursor-pointer">Enterprise</li>
              <li className="hover:text-blue-600 cursor-pointer">Support</li>
            </ul>
            <div className="mt-6 flex flex-col gap-4">
              <Link to="/home">
                <button className="bg-gray-200 w-full px-4 py-2 rounded-full font-medium">
                  Sign In
                </button>
              </Link>
              <button className="bg-black text-white w-full px-4 py-2 rounded-full font-medium">
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Buy & sell crypto instantly!
          </h1>
          <p className="text-lg mb-8">
            Coinme is the easiest way to buy or sell crypto using cash or debit.
            We make crypto safe, simple, and accessible for everyone.
          </p>
          <ul className="space-y-2">
            <li>✓ 40,000+ locations to buy and sell crypto with cash</li>
            <li>✓ Buy and sell crypto with debit card</li>
            <li>✓ Instantly send or store your crypto</li>
          </ul>
         
            
          <button className="bg-green-500 text-white px-6 py-3 mt-6 rounded-full font-bold">
            Create a Free Account
          </button>
         
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src={require("../Image/coinme2.webp")}
            alt="Crypto Illustration"
            className="w-96"
          />
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Demo;
