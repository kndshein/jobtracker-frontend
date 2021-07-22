import API from "./API";

export const getJob = (id) => {
  return API("get", `/job/${id}`);
};
