import React from 'react'
import { useState } from "react";
import Signup from './Signup';
import Login from './Login';

function FormController() {

  const [isLogin, setIsLogin] = useState(true);
  const [userCredentials, setUserCredentials] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    if (isLogin) {
      setUserData(data);
    }else{
      setUserCredentials({ email : data.email, password : data.password});
      setLoginData(true);
    }
  }
  return (
    <div style={{display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "100px",}}
      >
       {userData ? (
        <h2>Welcome 👋{userData.email}</h2>
      ) : isLogin ? (
        <Login onSubmit={handleFormSubmit} credentials={userCredentials} />
      ) : (
        <Signup onSubmit={handleFormSubmit} />
      )}

<button style={{marginTop: "20px",
            textDecoration: "underline",
            background: "none",
            border: "none",}} onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Dont have an account?  Sing-up"
          : "Already have an account? Login"}
      </button>

    </div>
  )
}

export default FormController;
