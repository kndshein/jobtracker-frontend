import React from "react";
import styles from "./Stars.module.scss";
import { BsStarFill, BsStar } from "react-icons/bs";
import { updateJob } from "../../../apicalls/JobPage-API";

const Stars = (props) => {
  const { jobId, star, clickable, setJob } = props;

  const updateStarRequest = async (num) => {
    try {
      const { data } = await updateJob(jobId, {
        job_info: { excitement: num },
      });
      data.timeline_times.sort((a, b) => new Date(b.time) - new Date(a.time));
      setJob(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (num) => {
    if (clickable) {
      updateStarRequest(num);
    }
  };

  return (
    <>
      {clickable && (
        <div className={styles.stars_container}>
          <BsStarFill
            className={star >= 1 ? styles.star_filled : styles.star_unfilled}
            onClick={() => handleUpdate(1)}
          />
          <BsStarFill
            className={star >= 2 ? styles.star_filled : styles.star_unfilled}
            onClick={() => handleUpdate(2)}
          />
          <BsStarFill
            className={star >= 3 ? styles.star_filled : styles.star_unfilled}
            onClick={() => handleUpdate(3)}
          />
          <BsStarFill
            className={star >= 4 ? styles.star_filled : styles.star_unfilled}
            onClick={() => handleUpdate(4)}
          />
          <BsStarFill
            className={star >= 5 ? styles.star_filled : styles.star_unfilled}
            onClick={() => handleUpdate(5)}
          />
        </div>
      )}
      {!clickable && (
        <div>
          {star >= 1 ? (
            <BsStarFill onClick={() => handleUpdate(1)} />
          ) : (
            <BsStar onClick={() => handleUpdate(1)} />
          )}
          {star >= 2 ? (
            <BsStarFill onClick={() => handleUpdate(2)} />
          ) : (
            <BsStar onClick={() => handleUpdate(2)} />
          )}
          {star >= 3 ? (
            <BsStarFill onClick={() => handleUpdate(3)} />
          ) : (
            <BsStar onClick={() => handleUpdate(3)} />
          )}
          {star >= 4 ? (
            <BsStarFill onClick={() => handleUpdate(4)} />
          ) : (
            <BsStar onClick={() => handleUpdate(4)} />
          )}
          {star >= 5 ? (
            <BsStarFill onClick={() => handleUpdate(5)} />
          ) : (
            <BsStar onClick={() => handleUpdate(5)} />
          )}
        </div>
      )}
    </>
  );
};

export default Stars;
