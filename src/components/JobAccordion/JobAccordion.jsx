import React from "react";
import styles from "./JobAccordion.module.scss";
import { updateForm, deleteJob } from "../../apicalls/JobPage";

import Stars from "../Stars/Stars";

const JobExpanded = ({ job, handleExpand, setJobList, setJob }) => {
  const [formData, setFormData] = React.useState();

  React.useEffect(() => {
    setFormData(job);
  }, [job]);

  const handleDelete = async (event) => {
    event.preventDefault();
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
        <div className={styles.job_expanded_container}>
          <div className={styles.left_container}>
            <div className={styles.left_top_container}>
              <div className={styles.title_container}>
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
              </div>
              <div className={styles.stars_container}>
                <label htmlFor="stars">Excitement</label>
                <Stars
                  id="stars"
                  star={formData.excitement}
                  jobId={job.id}
                  clickable={true}
                  setJob={setJob}
                />
              </div>
            </div>
            <div className={styles.left_bottom_container}>
              <label htmlFor="job-description">Job Description</label>
              <textarea
                onChange={handleOnChange}
                name="job_description"
                id="job-description"
                value={formData.job_description}
                onBlur={handleOnBlur}
              />
            </div>
          </div>
          <div>
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
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default JobExpanded;
