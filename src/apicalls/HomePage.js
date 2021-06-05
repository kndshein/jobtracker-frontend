import axios from "axios";
const backendUrl = "http://localhost:3000";

// Login.jsx
export const login = (setState, formData) => {
  axios({
    method: "post",
    url: backendUrl + "/login",
    data: {
      login_info: {
        email: formData.email,
        password: formData.password,
      },
    },
  })
    .then((data) => {
      setState(`${data.data.message}`);
      sessionStorage.setItem("token", data.data.token);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

// Register.jsx
export const register = (setState, formData) => {
  axios({
    method: "post",
    url: backendUrl + "/register",
    data: {
      registration_info: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.passwordConfirm,
      },
    },
  })
    .then((data) => {
      setState(data.data.message);
      sessionStorage.setItem("token", data.data.token);
    })
    .catch((error) => {
      console.log(error.response);
    });
};
