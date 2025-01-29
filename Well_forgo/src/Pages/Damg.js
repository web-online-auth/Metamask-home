import React from 'react';

const Damg = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Section with Background Image */}
      {/* <div
        className="w-full h-40 sm:h-48"
        style={{
          backgroundImage: `url(${require('../image/signNav.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div> */}

      {/* Main Section */}
      <div
        className="flex items-center justify-center px-4 py-64 sm:py-52"
        style={{
          backgroundImage: `url(${require('../image/winter_morning.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 sm:p-10">
          {/* Header */}
          <div className="flex justify-center text-red-600 mb-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
              Important Message
            </h1>
          </div>

          {/* Message */}
          <div className="text-center text-gray-700 mb-8">
            <p className="leading-relaxed">
              Due to unauthorized activity and identification failure on your
              account, access has been suspended. Please get in touch with our
              Support Staff immediately.
            </p>
          </div>

          {/* Error Code */}
          <div className="text-center font-bold text-gray-800 mb-8">
            <h2>Error CODE: EBRX16X76D</h2>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="px-6 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-all">
              Ask Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Damg;
