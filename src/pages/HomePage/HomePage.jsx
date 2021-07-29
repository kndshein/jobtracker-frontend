import React, { useState } from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";

const HomePage = (props) => {
  const [loginOrRegister, setLoginOrRegister] = useState("");

  const handleLoginOrRegister = (input) => {
    setLoginOrRegister(`${input}`);
  };

  return (
    <div className="home-page">
      <div className="login-or-register">
        <button onClick={() => handleLoginOrRegister("Login")}>Log in</button>
        <button onClick={() => handleLoginOrRegister("Register")}>
          Get Started
        </button>
      </div>
      <div className="login-or-register-box">
        {loginOrRegister === "Login" && <Login />}
        {loginOrRegister === "Register" && <Register />}
      </div>
    </div>
  );
};

export default HomePage;
