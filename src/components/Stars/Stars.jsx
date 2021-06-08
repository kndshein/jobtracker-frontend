import React from "react";
import styles from "./Stars.module.scss";
import { BsStarFill, BsStar } from "react-icons/bs";
import { updateStar } from "../../apicalls/JobPage";

const Stars = ({ jobId, star, clickable, setJob }) => {
  const handleUpdate = (num) => {
    if (clickable) {
      updateStar(jobId, setJob, num);
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
