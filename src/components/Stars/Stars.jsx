import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { starUpdate } from "../../apicalls/JobPage";

const Stars = ({ jobId, star, clickable, setJob }) => {
  const handleUpdate = (num) => {
    if (clickable) {
      starUpdate(jobId, setJob, num);
    }
  };

  return (
    <>
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
    </>
  );
};

export default Stars;
