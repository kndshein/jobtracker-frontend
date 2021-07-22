import React, { useState, useEffect } from "react";
import styles from "./JobPage.module.scss";
import { getProfile } from "../../apicalls/JobPage";

import Job from "../../components/Job/Job";
import JobForm from "../../components/JobForm/JobForm";

const JobPage = (props) => {
  const [jobList, setJobList] = useState(null);

  useEffect(() => {
    getProfile(setJobList);
  }, []);

  return (
    <>
      <div>JOBS</div>
      <div className={styles.jobs_container}>
        {jobList?.map((job, index) => {
          return (
            <Job
              key={index}
              index={index}
              jobId={job.id}
              setJobList={setJobList}
            />
          );
        })}
      </div>
      <JobForm setJobList={setJobList} />
    </>
  );
};

export default JobPage;
