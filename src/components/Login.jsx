import React from 'react'
import { useState } from "react";
function Login({ onSubmit, credentials }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            alert("Please fill all details..📝")
            return;
        }

        if (credentials
            && formData.email === credentials.email
            && formData.password === credentials.password) {
            onSubmit(credentials);
        } else {
            alert("Invalid email or password ❗❗")
        }
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
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>

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
                <button type="submit"
                    style={{
                        width: "20%",
                    }}>Login</button>
            </form>
        </div>
    )
}

export default Login;
