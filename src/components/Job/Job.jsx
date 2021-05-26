import React from "react";
import styles from "./Job.module.scss";

import Stars from "../Stars/Stars";

const Job = ({ job, backendUrl }) => {
  return (
    <div className={styles.job_container}>
      <div className={styles.title}>{job.job_title}</div>
      <div className={styles.logo_container}>
        <img
          className={styles.logo}
          src="//logo.clearbit.com/spotify.com?size=80&greyscale=true"
        />
      </div>
      <div className={styles.company}>{job.company_name}</div>
      <div className={styles.status}>{job.status}</div>
      <div className={styles.excitement}>{job.excitement}</div>
      <Stars star={job.excitement} backendUrl={backendUrl} jobId={job.id} />
    </div>
  );
};

export default Job;
