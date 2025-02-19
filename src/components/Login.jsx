import React from 'react';
import { useState } from 'react';

function Login({ onSubmit, credentials }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Please fill all details..📝');
      return;
    }

    if (credentials && formData.email === credentials.email && formData.password === credentials.password) {
      onSubmit(credentials);
    } else {
      alert('Invalid email or password ❗❗');
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '500px',
        margin: 'auto',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: 'black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', color: 'white' }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: '90%',
            padding: '13px',
            margin: '10px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            color: '#333',
          }}
        />
        <input
          type="text"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
          style={{
            width: '90%',
            padding: '13px',
            margin: '10px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            color: '#333',
          }}
        />
        <button
          type="submit"
          style={{
            width: '50%',
            padding: '10px',
            marginTop: '20px',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
