import React from "react";
import axios from "axios";

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
      axios
        .post(props.backendUrl + "/register", {
          registration_info: {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.passwordConfirm,
          },
        })
        .then((data) => {
          setRegisterMessage(data.data.message);
          sessionStorage.setItem("token", data.data.token);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
  };

  return (
    <div className="register-container">
      <div>Register</div>
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
