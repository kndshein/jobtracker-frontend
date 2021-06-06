import React from "react";
import { deleteJob } from "../../apicalls/JobPage";

import Stars from "../Stars/Stars";

const JobExpanded = ({ job, handleExpand, setJobList, setJob }) => {
  const emptyFormData = {
    job_title: "",
    company_name: "",
    excitement: 0,
    job_description: "",
    resume: "",
    coverletter: "",
  };
  const [formData, setFormData] = React.useState(emptyFormData);

  React.useEffect(() => {
    setFormData(job);
  }, [job]);

  const handleDelete = async () => {
    await deleteJob(setJobList, formData.id);
    handleExpand();
  };

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="job-expanded-container">
      <Stars
        star={formData.excitement}
        jobId={formData.id}
        clickable={true}
        setJob={setJob}
      />
      <form>
        <input
          onChange={handleOnChange}
          name="job_title"
          value={formData.job_title}
        />
        <input
          onChange={handleOnChange}
          name="company_name"
          value={formData.company_name}
        />
        <input
          onChange={handleOnChange}
          name="job_description"
          value={formData.job_description}
        />
        <input
          onChange={handleOnChange}
          name="excitement"
          value={formData.excitement}
        />
        <input
          onChange={handleOnChange}
          name="resume"
          value={formData.resume}
        />
        <input
          onChange={handleOnChange}
          name="coverletter"
          value={formData.coverletter}
        />
      </form>
      <div>{formData.job_title}</div>
      <div>{formData.company_name}</div>
      <div>{formData.job_description}</div>
      <div>{formData.excitement}</div>
      <div>{formData.resume}</div>
      <div>{formData.coverletter}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default JobExpanded;
