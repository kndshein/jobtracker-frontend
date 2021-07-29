import React, { useState, useEffect } from "react";
import styles from "./JobAccordion.module.scss";
import { updateJob } from "../../apicalls/JobPage-API";

import Stars from "../Stars/Stars";
import Document from "../Document/Document";
import Status from "../Status/Status";

const JobExpanded = (props) => {
  const { index, job, handleDelete, setJob, handleExpand, fetchJobAPI } = props;
  const [formData, setFormData] = useState();

  useEffect(() => {
    setFormData(job);
  }, [job]);

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const updateJobRequest = async (key, value) => {
    try {
      const { data } = await updateJob(job.id, { job_info: { [key]: value } });
      data.timeline_times.sort((a, b) => new Date(b.time) - new Date(a.time));
      setJob(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnBlur = (event) => {
    updateJobRequest(event.target.name, event.target.value);
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
              <Status
                timeline={formData.timeline_times}
                jobId={job.id}
                setJob={setJob}
                fetchJobAPI={fetchJobAPI}
              />
            </div>
            <div className={styles.buttons_container}>
              <button
                onClick={() => {
                  handleExpand();
                  handleDelete(job.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobExpanded;
