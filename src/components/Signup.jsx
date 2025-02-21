import React from 'react';
import { useState } from 'react';

function Signup({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    dob: '',
    file: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.dob || !formData.file) {
      alert('Please fill all details...📝');
    }
    onSubmit(formData);
  };

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '300px',
        margin: 'auto',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: 'black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: "absolute",
        top: "70px",
        right: "604px",
      }}
    >
      <h2 style={{ textAlign: 'center', color: 'white' }}>Signup</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
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
        <input
          type="text"
          name="phone"
          placeholder="Enter Your Phone"
          value={formData.phone}
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
          type="date"
          name="dob"
          placeholder="Enter Your DOB"
          value={formData.dob}
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
          type="file"
          name="file"
          placeholder="Enter Your file"
          value={formData.file}
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
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;