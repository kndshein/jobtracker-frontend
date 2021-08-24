import React, { useContext } from "react";
import { login } from "../../../apicalls/HomePage-API";
import { UserProfileContext } from "../../../context-global/UserProfileContext";

const Login = (props) => {
  const { types, dispatch } = useContext(UserProfileContext);

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
    loginAPICall({
      login_info: {
        email: formData.email,
        password: formData.password,
      },
    });
  };

  const loginAPICall = async (data) => {
    try {
      const {
        data: { message, token },
      } = await login(data);
      setLoginMessage(message);
      sessionStorage.setItem("token", token);
      dispatch({
        type: types.login,
        payload: true,
      });
    } catch (err) {
      console.log(err);
    }
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
