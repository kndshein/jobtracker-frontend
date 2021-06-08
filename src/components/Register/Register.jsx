import React from "react";
import { register } from "../../apicalls/HomePage";

const Register = (props) => {
  const emptyRegisterFormData = {
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  };

  const [formData, setFormData] = React.useState(emptyRegisterFormData);
  const [registerMessage, setRegisterMessage] = React.useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      setRegisterMessage("Passwords do not match.");
    } else {
      register(setRegisterMessage, formData);
    }
  };

  return (
    <div className="register-container">
      <div>Create an account.</div>
      <form className="form-register" onSubmit={handleSubmit}>
        <input
          className="form-name"
          type="text"
          name="name"
          placeholder="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
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
        <input
          className="form-password-confirm"
          type="text"
          name="passwordConfirm"
          placeholder="password confirmation"
          required
          value={formData.passwordConfirm}
          onChange={handleChange}
        />
        <input className="register-btn" type="submit" value="Register" />
      </form>
      <div className="register-message">{registerMessage}</div>
    </div>
  );
};

export default Register;
