import React from "react";
import axios from "axios";
import styles from "./JobPage.module.scss";

import Job from "../../components/Job/Job";
import JobForm from "../../components/JobForm/JobForm";

const JobPage = (props) => {
  const [jobList, setJobList] = React.useState(null);

  React.useEffect(() => {
    const getProfile = () => {
      axios({
        method: "get",
        url: props.backendUrl + "/profile",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
        .then((data) => {
          setJobList(data.data.jobs);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };

    getProfile();
  }, [props.backendUrl]);

  return (
    <>
      <div>JOBS</div>
      <div className={styles.jobs_container}>
        {jobList?.map((job, index) => {
          return <Job key={index} job={job} backendUrl={props.backendUrl} />;
        })}
      </div>
      <JobForm backendUrl={props.backendUrl} />
    </>
  );
};

export default JobPage;
