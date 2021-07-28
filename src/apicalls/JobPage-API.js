import API from "./API";

export const getJob = (id) => {
  return API("get", `/job/${id}`);
};

export const createJob = (data) => {
  return API("post", `/job/create`, data);
};

export const updateJob = (id, data) => {
  return API("put", `/job/${id}`, data);
};

export const deleteJob = (id) => {
  return API("delete", `/job/${id}`);
};

export const createTime = (id, data) => {
  return API("post", `/job/${id}/time`, data);
};

export const deleteTime = (id) => {
  return API("delete", `/time/${id}`);
};
