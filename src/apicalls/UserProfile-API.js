import API from "./API";

export const getUserProfile = () => {
  return API("get", "/profile");
};
