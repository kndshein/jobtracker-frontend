import React from "react";
import styles from "./Job.module.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { expandAccordion, getJob } from "../../apicalls/JobPage";

import Stars from "../Stars/Stars";
import JobExpanded from "../JobAccordion/JobAccordion";

const Job = ({ jobId, setJobList }) => {
  const [expandedData, setExpandedData] = React.useState();
  const [job, setJob] = React.useState();

  const handleGetJob = () => {
    getJob(setJob, jobId);
  };

  const handleExpand = (id) => {
    if (expandedData) {
      setExpandedData();
    } else {
      expandAccordion(setExpandedData, id);
    }
  };

  React.useEffect(() => {
    handleGetJob();
  }, []);

  return (
    <>
      <div
        className={styles.job_container}
        onClick={() => handleExpand(job.id)}
      >
        <div className={styles.title}>{job?.job_title}</div>
        <div className={styles.logo_container}>
          <img
            className={styles.logo}
            alt="spotify logo"
            src="https://logo.clearbit.com/spotify.com?size=80&greyscale=true"
          />
        </div>
        <div className={styles.company}>{job?.company_name}</div>
        <div className={styles.status}>{job?.status}</div>
        <div className={styles.excitement}>{job?.excitement}</div>
        <div className={styles.excitement}>
          <Stars star={job?.excitement} jobId={job?.id} clickable={false} />
        </div>
        <div className={styles.arrow}>
          {expandedData ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}
        </div>
      </div>
      {expandedData && (
        <JobExpanded
          expandedData={expandedData}
          setJobList={setJobList}
          handleExpand={handleExpand}
        />
      )}
    </>
  );
};

export default Job;
