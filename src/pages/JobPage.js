import React from "react";
import axios from "axios";

const JobPage = (props) => {
  const [jobList, setJobList] = React.useState(null);

  React.useEffect(() => {
    const getProfile = () => {
      axios
        .get(props.backendUrl + "/profile", {
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

  console.log("JobList", jobList);

  return (
    <>
      <div>JOBS</div>
    </>
  );
};

export default JobPage;
