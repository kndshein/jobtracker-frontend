import React from "react";
import styles from "./Job.module.scss";
import { FaAngleDown } from "react-icons/fa";

import Stars from "../Stars/Stars";
import JobExpanded from "./JobAccordion/JobAccordion";
import axios from "axios";

const Job = ({ job, backendUrl }) => {
  const [expandedData, setExpandedData] = React.useState();

  const handleExpand = (id) => {
    if (expandedData) {
      setExpandedData();
    } else {
      axios({
        method: "get",
        url: backendUrl + "/job/" + id,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
        .then((data) => {
          setExpandedData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
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
        <div className={styles.excitement}>
          <Stars star={job.excitement} backendUrl={backendUrl} jobId={job.id} />
        </div>
        <div className={styles.arrow}>
          <FaAngleDown
            size={25}
            onClick={() => {
              handleExpand(job.id);
            }}
          />
        </div>
      </div>
      {expandedData && <JobExpanded expandedData={expandedData} />}
    </>
  );
};

export default Job;
