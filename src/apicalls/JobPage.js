import axios from "axios";
const backendUrl = "http://localhost:3000";

// JobPage.jsx
export const getProfile = (setState) => {
  axios({
    method: "get",
    url: backendUrl + "/profile",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((data) => {
      setState(data.data.jobs);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export const getJob = (setState, id) => {
  axios({
    method: "get",
    url: backendUrl + "/job/" + id,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((data) => {
      setState(data.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

// JobForm.jsx
export const createJob = (setState, formData) => {
  axios({
    method: "post",
    url: backendUrl + "/job/create",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    data: {
      job_info: {
        job_title: formData.job_title,
        company_name: formData.company_name,
        job_industry: formData.job_industry,
        location_city: formData.location_city,
        location_state: formData.location_state,
        job_description: formData.job_description,
        resume: formData.resume,
        coverletter: formData.coverletter,
        status: formData.status,
      },
    },
  })
    .then(() => {
      getProfile(setState);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Stars.jsx
export const updateStar = (jobId, setState, num) => {
  axios({
    method: "put",
    url: backendUrl + "/job/" + jobId,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    data: {
      job_info: {
        excitement: num,
      },
    },
  })
    .then(() => {
      getJob(setState, jobId);
      // setState(data.data.excitement);
    })
    .catch((error) => console.log(error));
};

export const updateForm = (jobId, key, value, setState) => {
  axios({
    method: "put",
    url: backendUrl + "/job/" + jobId,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    data: {
      job_info: {
        [key]: value,
      },
    },
  })
    .then(() => {
      getJob(setState, jobId);
    })
    .catch((error) => console.log(error));
};

export const deleteJob = (setState, id) => {
  axios({
    method: "delete",
    url: backendUrl + "/job/" + id,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then(() => {
      getProfile(setState);
    })
    .catch((err) => console.log(err));
};

export const createTime = (name, date, time, setState, jobId) => {
  axios({
    method: "post",
    url: backendUrl + "/job/" + jobId + "/time/",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    data: {
      timeline_info: {
        name: name,
        time: `${date.year}-${date.month}-${date.day} ${time}:00`,
      },
    },
  })
    .then(() => {
      getJob(setState, jobId);
    })
    .catch((err) => console.log(err));
};
