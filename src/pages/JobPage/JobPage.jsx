import React, { useState, useEffect } from "react";
import styles from "./JobPage.module.scss";
import { getUserProfile } from "../../apicalls/UserProfile-API";
import { deleteJob } from "../../apicalls/JobPage-API";

import Job from "./Job/Job";
import JobForm from "./JobForm/JobForm";

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

  const handleDelete = async (jobId) => {
    console.log(jobId);
    try {
      await deleteJob(jobId);
      fetchUserProfileAPI();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserProfileAPI();
  }, []);

  return (
    <>
      <div className={styles.jobs_container}>
        {jobList?.map((job, index) => {
          return (
            <Job
              key={index}
              index={index}
              jobId={job.id}
              setJobList={setJobList}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <JobForm
        setJobList={setJobList}
        fetchUserProfileAPI={fetchUserProfileAPI}
      />
    </>
  );
};

export default JobPage;
