import React from 'react'
import { useState } from "react";
import Signup from './Signup';
import Login from './Login';

function FormController() {

  const [isLogin, setLoginData] = useState(true);
  const [userCredentials, setUserCredentials] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleFormSwitch = (data) => {
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
        <h2>Welcome {userData.email}</h2>
      ) : isLogin ? (
        <LoginForm onSubmit={handleFormSubmit} credentials={userCredentials} />
      ) : (
        <SignupForm onSubmit={handleFormSubmit} />
      )}
    </div>
  )
}

export default FormController;
