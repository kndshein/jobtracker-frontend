import React from "react";

const Job = ({ job }) => {
  return (
    <div className="job-container">
      <div className="job-container">
        <div className="title">{job.job_title}</div>
        <div className="company">{job.company_name}</div>
        <div className="industry">{job.job_industry}</div>
        <div className="description">{job.job_description}</div>
        <div className="resume">{job.resume}</div>
        <div className="coverletter">{job.coverletter}</div>
        <div className="city">{job.location_city}</div>
        <div className="state">{job.location_state}</div>
      </div>
    </div>
  );
};

export default Job;
