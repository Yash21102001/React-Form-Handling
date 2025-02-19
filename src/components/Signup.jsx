import React from 'react'
import { useState } from "react";

function Signup({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        dob: "",
        file: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.dob || !formData.file) {
            alert("Please fill all details...📝")
        }
        onSubmit(formData)
    }
    return (
        <div style={{
            padding: "18px",
            maxWidth: "500px",
            margin: "auto",
            border: "1px solid black",
            borderRadius: "15px",
            backgroundColor: "Highlight"
        }}>
            <h2>Signup Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='name'
                    placeholder='Enter Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    style={{ width: "90%", padding: "13px", margin: "10px", backgroundColor: "lightgray", borderRadius: "5px", color: "black" }}
                />

                <input type="text"
                    name='email'
                    placeholder='Enter Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    style={{ width: "90%", padding: "13px", margin: "10px", backgroundColor: "lightgray", borderRadius: "5px", color: "black" }}
                />

                <input type="text"
                    name='password'
                    placeholder='Enter Your Password'
                    value={formData.password}
                    onChange={handleChange}
                    style={{ width: "90%", padding: "13px", margin: "10px", backgroundColor: "lightgray", borderRadius: "5px", color: "black" }}
                />

                <input type="text"
                    name='phone'
                    placeholder='Enter Your Phone'
                    value={formData.phone}
                    onChange={handleChange}
                    style={{ width: "90%", padding: "13px", margin: "10px", backgroundColor: "lightgray", borderRadius: "5px", color: "black" }}
                />

                <input type="date"
                    name='dob'
                    placeholder='Enter Your DOB'
                    value={formData.dob}
                    onChange={handleChange}
                    style={{ width: "90%", padding: "13px", margin: "10px", backgroundColor: "lightgray", borderRadius: "5px", color: "black" }}
                />
                <input type="file"
                    name='file'
                    placeholder='Enter Your file'
                    value={formData.file}
                    onChange={handleChange}
                    style={{ width: "90%", padding: "13px", margin: "10px", backgroundColor: "lightgray", borderRadius: "5px", color: "black" }}
                />
                <button
                    type="submit"
                    style={{
                        width: "20%",
                    }}
                >
                    Signup
                </button>
            </form>
        </div>
    )
}

export default Signup
