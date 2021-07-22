import React, { useState, useEffect } from "react";
import styles from "./JobPage.module.scss";
import { getUserProfile } from "../../apicalls/UserProfile-API";

import Job from "./Job/Job";
import JobForm from "../../components/JobForm/JobForm";

const JobPage = (props) => {
  const [jobList, setJobList] = useState(null);

  const fetchUserProfileAPI = async () => {
    try {
      const {
        data: { jobs },
      } = await getUserProfile();
      setJobList(jobs);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserProfileAPI();
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
