import React from "react";
import axios from "axios";

const JobForm = (props) => {
  const emptyFormData = {
    job_title: "",
    company_name: "",
    job_industry: "",
    location_city: "",
    location_state: "",
    job_description: "",
    status: "",
    resume: "",
    coverletter: "",
  };

  const [formData, setFormData] = React.useState(emptyFormData);

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    axios({
      method: "post",
      url: props.backendUrl + "/job/create",
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
        },
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="job-form-container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="job_title"
            placeholder="Job Title"
            value={formData.job_title}
          />
          <input
            onChange={handleChange}
            type="text"
            name="company_name"
            placeholder="Company Name"
            value={formData.company_name}
          />
          <input
            onChange={handleChange}
            type="text"
            name="job_industry"
            placeholder="Job Industry"
            value={formData.job_industry}
          />
          <input
            onChange={handleChange}
            type="text"
            name="location_city"
            placeholder="City"
            value={formData.location_city}
          />
          <input
            onChange={handleChange}
            type="text"
            name="location_state"
            placeholder="State"
            value={formData.location_state}
          />
          <textarea
            onChange={handleChange}
            type="text"
            name="job_description"
            placeholder="Job Description"
            value={formData.job_description}
          />
          <input
            onChange={handleChange}
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
          />
          <input
            onChange={handleChange}
            type="text"
            name="resume"
            placeholder="Resume"
            value={formData.resume}
          />
          <input
            onChange={handleChange}
            type="text"
            name="coverletter"
            placeholder="Cover Letter"
            value={formData.coverletter}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default JobForm;
