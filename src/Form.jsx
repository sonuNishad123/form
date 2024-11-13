// src/Form.js
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    message: '',
  });

  const validate = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      message: '',
    };
    let isValid = true;

    // Check if name is alphabetic and not empty
    if (!name) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = 'Name must contain only alphabetic characters';
      isValid = false;
    }

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    if (!message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log('Form submitted:', { name, email, password, message });
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setMessage('');
      setErrors({ name: '', email: '', password: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      <label className="block mb-2">
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full p-2 pl-10 text-sm border-black border-2 text-gray-700"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </label>
      <br />
      <label className="block mb-2">
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full p-2 pl-10 text-sm border-black border-2 text-gray-700"
          placeholder="your@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </label>
      <br />
      <label className="block mb-2">
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full p-2 pl-10 text-sm border-black border-2 text-gray-700"
          placeholder="Type your 8 digit password"
        />
        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
      </label>
      <br />
      <label className="block mb-2">
        Message:
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full p-2 pl-10 text-sm border-black border-2 text-gray-700"
          placeholder="Your message..."
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
      </label>
      <br />
      <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;
