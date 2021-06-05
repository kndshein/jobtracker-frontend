import React from "react";

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

  return (
    <div className="job-expanded-container">
      <div>{formData.job_title}</div>
      <div>{formData.company_name}</div>
      <div>{formData.job_description}</div>
      <div>{formData.excitement}</div>
      <div>{formData.resume}</div>
      <div>{formData.coverletter}</div>
    </div>
  );
};

export default JobExpanded;
