import React from "react";
import styles from "./JobAccordion.module.scss";
import { updateForm, deleteJob } from "../../apicalls/JobPage";

import Stars from "../Stars/Stars";
import Document from "../Document/Document";

const JobExpanded = ({ index, job, handleExpand, setJobList, setJob }) => {
  const [formData, setFormData] = React.useState();

  React.useEffect(() => {
    setFormData(job);
    console.log(job);
  }, [job]);

  // const handleDuplicate = async () => {
  //   createJob(setJobList, formData);
  // };

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
              <div className={styles.label}>Job Description</div>
              <textarea
                onChange={handleOnChange}
                name="job_description"
                id={`job-description${index}`}
                value={formData.job_description}
                onBlur={handleOnBlur}
              />
            </div>
          </div>
          <div className={styles.right_container}>
            <div className={styles.right_top_container}>
              <Document docuType="resume" />
              <Document docuType="cover letter" />
            </div>
            <div className={styles.buttons_container}>
              <button onClick={handleDelete}>Delete</button>
            </div>
            {/* <button onClick={handleDuplicate}>Duplicate</button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default JobExpanded;
