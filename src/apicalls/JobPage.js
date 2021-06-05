import axios from "axios";
const backendUrl = "http://localhost:3000";

// JobForm.jsx
export const createJob = (formData) => {
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
  }).catch((error) => {
    console.log(error);
  });
};

// Stars.jsx
export const starUpdate = (jobId, setState, num) => {
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
    .then((data) => {
      setState(data.data.excitement);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Job.jsx
export const expandAccordion = (setState, id) => {
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
    .catch((err) => {
      console.log(err);
    });
};
