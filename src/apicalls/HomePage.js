import axios from "axios";

export const login = (backendUrl, setState, formData) => {
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
