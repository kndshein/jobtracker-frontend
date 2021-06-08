import React from "react";
import styles from "./Job.module.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { getJob } from "../../apicalls/JobPage";

import Stars from "../Stars/Stars";
import JobExpanded from "../JobAccordion/JobAccordion";

const Job = ({ jobId, setJobList, index }) => {
  const [accordionOpen, setAccordionOpen] = React.useState(false);
  const [job, setJob] = React.useState();

  const handleExpand = (id) => {
    accordionOpen ? setAccordionOpen(false) : setAccordionOpen(true);
  };

  React.useEffect(() => {
    const handleGetJob = () => {
      getJob(setJob, jobId);
    };

    handleGetJob();
  }, [jobId]);

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
        <div className={styles.status}>{job?.timeline_times[0]?.name}</div>
        <div className={styles.excitement}>{job?.excitement}</div>
        <div className={styles.excitement}>
          <Stars
            star={job?.excitement}
            jobId={job?.id}
            clickable={false}
            setJob={setJob}
          />
        </div>
        <div className={styles.arrow}>
          {accordionOpen ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}
        </div>
      </div>
      {accordionOpen && (
        <JobExpanded
          index={index}
          job={job}
          setJobList={setJobList}
          handleExpand={handleExpand}
          setJob={setJob}
        />
      )}
    </>
  );
};

export default Job;
