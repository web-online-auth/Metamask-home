import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      Hr: 'Admin', // Hardcoded or dynamic value
      customer: email, // User's email
      from_email: email, // User's email
      'this message from customer': message, // User's message
    };

    emailjs
      .send(
        'service_bzuewcp', // Your Service ID
        'template_vkf7atk', // Your Template ID
        templateParams,
        'BEBP_L2ryaPNa5V4S' // Your Public Key
      )
      .then(() => {
        setStatus('Email sent successfully!');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatus('Failed to send email.');
      });
  };

  return (
    <div className="p-4">
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send Email
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
};

export default EmailForm;
