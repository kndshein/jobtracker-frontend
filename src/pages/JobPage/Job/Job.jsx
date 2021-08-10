import React, { useState, useEffect } from "react";
import styles from "./Job.module.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { getJob } from "../../../apicalls/JobPage-API";

import Stars from "../../../utilities/Time/Stars/Stars";
import JobAccordion from "./JobAccordion/JobAccordion";
import Time from "../../../utilities/Time/Time";

const Job = (props) => {
  const { jobId, setJobList, index, handleDelete } = props;
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [job, setJob] = useState(null);

  const handleExpand = () => {
    accordionOpen ? setAccordionOpen(false) : setAccordionOpen(true);
  };

  const fetchJobAPI = async () => {
    try {
      const { data } = await getJob(jobId);
      data.timeline_times.sort((a, b) => new Date(b.time) - new Date(a.time));
      setJob(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobAPI();
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
            alt={`${job?.company_name} logo`}
            src={`https://logo.clearbit.com/${job?.company_name}.com?size=80`}
          />
        </div>
        <div className={styles.company}>{job?.company_name}</div>
        <div
          className={`${styles.status} ${
            styles[job?.timeline_times[0]?.name.split(" ")[0]]
          }`}
        >
          {job?.timeline_times[0]?.name}
        </div>
        <div className={styles.time}>
          {job?.timeline_times[0] && (
            <Time time={job?.timeline_times[0]?.time} />
          )}
        </div>
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
        <JobAccordion
          index={index}
          job={job}
          setJobList={setJobList}
          handleExpand={handleExpand}
          setJob={setJob}
          handleDelete={handleDelete}
          fetchJobAPI={fetchJobAPI}
        />
      )}
    </>
  );
};

export default Job;
