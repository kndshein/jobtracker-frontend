import React from "react";
import styles from "./JobPage.module.scss";
import { getProfile } from "../../apicalls/JobPage";

import Job from "../../components/Job/Job";
import JobForm from "../../components/JobForm/JobForm";

const JobPage = (props) => {
  const [jobList, setJobList] = React.useState(null);

  React.useEffect(() => {
    getProfile(setJobList);
  }, []);

  return (
    <>
      <div>JOBS</div>
      <div className={styles.jobs_container}>
        {jobList?.map((job, index) => {
          return <Job key={index} job={job} backendUrl={props.backendUrl} />;
        })}
      </div>
      <JobForm backendUrl={props.backendUrl} getProfile={getProfile} />
    </>
  );
};

export default JobPage;
