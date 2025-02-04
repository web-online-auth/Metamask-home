import React, { useEffect } from 'react';

const Damg = () => {
  const openTawkChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  useEffect(() => {
    if (!window.Tawk_API) {
      const script = document.createElement('script');
      script.src = 'https://embed.tawk.to/YOUR_TAWK_PROPERTY_ID/DEFAULT'; // Replace with your Tawk.to Property ID
      script.async = true;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="flex items-center justify-center px-4 py-64 sm:py-52"
        style={{
          backgroundImage: `url(${require('../image/winter_morning.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 sm:p-10">
          <div className="flex justify-center text-red-600 mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
              Important Message
            </h1>
          </div>

          <div className="text-center text-gray-700 mb-8">
            <p className="leading-relaxed">
              Due to unauthorized activity and identification failure on your
              account, access has been suspended. Please get in touch with our
              Support Staff immediately.
            </p>
          </div>

          <div className="text-center font-bold text-gray-800 mb-8">
            <h2>Error CODE: EBRX16X76D</h2>
          </div>

          <div className="flex justify-center">
            <button
              className="px-6 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-all"
              onClick={openTawkChat}
            >
              Ask Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Damg;
