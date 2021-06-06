import React from "react";
import { updateForm, deleteJob } from "../../apicalls/JobPage";

import Stars from "../Stars/Stars";

const JobExpanded = ({ job, handleExpand, setJobList, setJob }) => {
  const [formData, setFormData] = React.useState();

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

  const handleOnBlur = (event) => {
    updateForm(job.id, event.target.name, event.target.value, setJob);
  };

  return (
    <>
      {formData && (
        <div className="job-expanded-container">
          <Stars
            star={formData.excitement}
            jobId={job.id}
            clickable={true}
            setJob={setJob}
          />
          <form>
            <input
              onChange={handleOnChange}
              name="job_title"
              value={formData.job_title}
              onBlur={handleOnBlur}
            />
            <input
              onChange={handleOnChange}
              name="company_name"
              value={formData.company_name}
              onBlur={handleOnBlur}
            />
            <input
              onChange={handleOnChange}
              name="job_description"
              value={formData.job_description}
              onBlur={handleOnBlur}
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
              onBlur={handleOnBlur}
            />
            <input
              onChange={handleOnChange}
              name="coverletter"
              value={formData.coverletter}
              onBlur={handleOnBlur}
            />
          </form>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </>
  );
};

export default JobExpanded;
