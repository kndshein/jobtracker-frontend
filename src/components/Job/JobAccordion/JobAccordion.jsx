import React from "react";

const JobExpanded = (props) => {
  console.log(props.expandedData);
  const emptyFormData = { job_title: "", company_name: "" };
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
    </div>
  );
};

export default JobExpanded;
