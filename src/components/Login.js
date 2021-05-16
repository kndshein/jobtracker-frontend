import React from "react";
import axios from "axios";

const Login = (props) => {
  const emptyLoginFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = React.useState(emptyLoginFormData);
  const [loginMessage, setLoginMessage] = React.useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(props.backendUrl + "/login", {
        login_info: {
          email: formData.email,
          password: formData.password,
        },
      })
      .then((data) => {
        setLoginMessage(`${data.data.message}`);
        sessionStorage.setItem("token", data.data.token);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="login-container">
      <div>Log in here.</div>
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          className="form-email"
          type="text"
          name="email"
          placeholder="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="form-password"
          type="text"
          name="password"
          placeholder="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <input className="login-btn" type="submit" value="Login" />
      </form>
      <div className="login-message">{loginMessage}</div>
    </div>
  );
};

export default Login;
