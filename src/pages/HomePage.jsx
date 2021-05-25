import React from "react";

import Login from "../components/Login";
import Register from "../components/Register";

const HomePage = ({ backendUrl }) => {
  const [loginOrRegister, setLoginOrRegister] = React.useState("");

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
        {loginOrRegister === "Login" && <Login backendUrl={backendUrl} />}
        {loginOrRegister === "Register" && <Register backendUrl={backendUrl} />}
      </div>
    </div>
  );
};

export default HomePage;
