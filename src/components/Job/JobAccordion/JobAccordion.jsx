import React from "react";
import { deleteJob } from "../../../apicalls/JobPage";

const JobExpanded = (props) => {
  const emptyFormData = {
    job_title: "",
    company_name: "",
    excitement: 0,
    job_description: "",
    resume: "",
    coverletter: "",
  };
  const [formData, setFormData] = React.useState(emptyFormData);

  React.useEffect(() => {
    !props.expandedData
      ? setFormData(emptyFormData)
      : setFormData(props.expandedData);
  }, [props.expandedData]);

  const handleDelete = async () => {
    await deleteJob(props.setJobList, formData.id);
    props.handleExpand();
  };

  return (
    <div className="job-expanded-container">
      <div>{formData.job_title}</div>
      <div>{formData.company_name}</div>
      <div>{formData.job_description}</div>
      <div>{formData.excitement}</div>
      <div>{formData.resume}</div>
      <div>{formData.coverletter}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default JobExpanded;
