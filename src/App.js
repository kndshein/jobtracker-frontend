import React from "react";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";

const backendUrl = "http://localhost:3000";

function App() {
  const [loginOrRegister, setLoginOrRegister] = React.useState("");

  const handleLoginOrRegister = (input) => {
    setLoginOrRegister(`${input}`);
  };

  return (
    <div className="App">
      <div className="login-or-register">
        <button onClick={() => handleLoginOrRegister("Login")}>Log in</button>
        <button onClick={() => handleLoginOrRegister("Register")}>
          Get Started
        </button>
      </div>
      <div className="login-or-register-box"></div>
      {loginOrRegister === "Login" && <Login backendUrl={backendUrl} />}
      {loginOrRegister === "Register" && <Register backendUrl={backendUrl} />}
    </div>
  );
}

export default App;
