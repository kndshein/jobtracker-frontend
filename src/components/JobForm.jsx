import React from "react";
import axios from "axios";

const JobForm = (props) => {
  const emptyFormData = {
    job_title: "",
    company_name: "",
    job_industry: "",
    location_city: "",
    location_state: "",
    status: "",
    resume: "",
    coverletter: "",
  };

  const [formData, setFormData] = React.useState(emptyFormData);

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {};

  return (
    <>
      <div className="job-form-container">
        <form>
          <input
            onChange={handleChange}
            type="text"
            name="job_title"
            value={formData.job_title}
          />
          <input
            onChange={handleChange}
            type="text"
            name="company_name"
            value={formData.company_name}
          />
          <input
            onChange={handleChange}
            type="text"
            name="job_industry"
            value={formData.job_industry}
          />
          <input
            onChange={handleChange}
            type="text"
            name="location_city"
            value={formData.location_city}
          />
          <input
            onChange={handleChange}
            type="text"
            name="location_state"
            value={formData.location_state}
          />
          <input
            onChange={handleChange}
            type="text"
            name="status"
            value={formData.status}
          />
          <input
            onChange={handleChange}
            type="text"
            name="resume"
            value={formData.resume}
          />
          <input
            onChange={handleChange}
            type="text"
            name="coverletter"
            value={formData.coverletter}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default JobForm;
