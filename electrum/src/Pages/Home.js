import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Enter your email');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Enter your password');
  const navigate = useNavigate();

  const handleLogin = () => {
    let isValid = true;

    // Email validation
    if (!email) {
      setEmailError('');
      setEmailPlaceholder('Enter email');
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('is not email');
        isValid = false;
      } else {
        setEmailError('');
      }
    }

    // Password validation
    if (!password) {
      setPasswordPlaceholder('Enter password');
      setPasswordError('');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Navigate to Home if valid
    if (isValid) {
      navigate('/alt');
    }
  };

  return (
    <div className="bg-slate-900 flex flex-col p-6 sm:p-12 sm:py-20 sm:bg-slate-900">
      <header className="flex justify-center mb-8 ">
        <img src={require('../Images/electurm-2.png')} alt="Navigation" className="w-36" />
      </header>

      <div className="flex justify-center">
        <div className="w-full max-w-sm bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center mb-6">Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="mb-4">
              {/* <label htmlFor="email" className="block text-sm font-medium">Email</label> */}
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setEmailError('Is not email');
                  } else {
                    setEmailError('');
                  }
                }}
                placeholder={emailPlaceholder}
                className={`w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {emailError && <p className="text-xs text-red-500">{emailError}</p>}
            </div>

            <div className="mb-6">
              {/* <label htmlFor="password" className="block text-sm font-medium">Password</label> */}
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={passwordPlaceholder}
                className={`w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${passwordError ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
            </div>

            <div className="flex justify-center mb-6">
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Login
              </button>
            </div>
          </form>

          <div className="flex justify-center items-center my-4">
            <span className="border-t border-gray-300 w-1/4"></span>
            <span className="mx-4 text-sm text-gray-600">OR</span>
            <span className="border-t border-gray-300 w-1/4"></span>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
              <img src="https://auth.coinledger.io/assets/common/Google.svg" alt="Google" className="w-5 h-5 mr-3" />
              Continue with Google
            </button>

            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
              <img src="https://auth.coinledger.io/assets/common/Coinbase.svg" alt="Coinbase" className="w-5 h-5 mr-3" />
              Continue with Coinbase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
