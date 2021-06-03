import React from "react";
import { createJob } from "../../apicalls/JobPage";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createJob(props.backendUrl, formData);
    props.getProfile();
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
            required
          />
          <input
            onChange={handleChange}
            type="text"
            name="company_name"
            placeholder="Company Name"
            value={formData.company_name}
            required
          />
          <input
            onChange={handleChange}
            type="text"
            name="job_industry"
            placeholder="Job Industry"
            value={formData.job_industry}
            required
          />
          <input
            onChange={handleChange}
            type="text"
            name="location_city"
            placeholder="City"
            value={formData.location_city}
            required
          />
          <input
            onChange={handleChange}
            type="text"
            name="location_state"
            placeholder="State"
            value={formData.location_state}
            required
          />
          <textarea
            onChange={handleChange}
            type="text"
            name="job_description"
            placeholder="Job Description"
            value={formData.job_description}
            required
          />
          <input
            onChange={handleChange}
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            required
          />
          <input
            onChange={handleChange}
            type="text"
            name="resume"
            placeholder="Resume"
            value={formData.resume}
            required
          />
          <input
            onChange={handleChange}
            type="text"
            name="coverletter"
            placeholder="Cover Letter"
            value={formData.coverletter}
            required
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default JobForm;
