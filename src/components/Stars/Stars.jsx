import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import { starUpdate } from "../../apicalls/JobPage";

const Stars = (props) => {
  const [excitement, setExcitement] = React.useState(props.star);

  const handleUpdate = (num) => {
    starUpdate(props.backendUrl, props.jobId, setExcitement, num);
  };

  return (
    <>
      <div>
        {excitement >= 1 ? (
          <BsStarFill onClick={() => handleUpdate(1)} />
        ) : (
          <BsStar onClick={() => handleUpdate(1)} />
        )}
        {excitement >= 2 ? (
          <BsStarFill onClick={() => handleUpdate(2)} />
        ) : (
          <BsStar onClick={() => handleUpdate(2)} />
        )}
        {excitement >= 3 ? (
          <BsStarFill onClick={() => handleUpdate(3)} />
        ) : (
          <BsStar onClick={() => handleUpdate(3)} />
        )}
        {excitement >= 4 ? (
          <BsStarFill onClick={() => handleUpdate(4)} />
        ) : (
          <BsStar onClick={() => handleUpdate(4)} />
        )}
        {excitement >= 5 ? (
          <BsStarFill onClick={() => handleUpdate(5)} />
        ) : (
          <BsStar onClick={() => handleUpdate(5)} />
        )}
      </div>
    </>
  );
};

export default Stars;
