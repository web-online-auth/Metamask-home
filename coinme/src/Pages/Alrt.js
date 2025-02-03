import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Alrt = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setEmail('');
    setPassword('');
    navigate('/home'); // Navigate to the next page
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center pt-32">
      <header className="flex justify-center mb-8">
        <img src={require('../Image/coinme1.jpg')} alt="Navigation" className="w-36" />
      </header>

      <div className="w-full max-w-lg border-2 bg-white p-8 rounded-lg shadow-lg">
        <main className="flex flex-col items-center">
          <h1 className="text-blue-800 text-3xl font-medium pb-5">Log in</h1>
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
                type="email"
                id="email"
                name="name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                required
              />
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

export default Alrt;
