import React from "react";
import axios from "axios";

import Job from "../components/Job";
import JobForm from "../components/JobForm";

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
          console.log(data.data.jobs);
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
      <div className="jobs-container">
        {jobList?.map((job, index) => {
          return <Job key={index} job={job} />;
        })}
      </div>
      <JobForm />
    </>
  );
};

export default JobPage;
