import React from "react";
import axios from "axios";
import { BsStarFill, BsStar } from "react-icons/bs";

const Stars = (props) => {
  const [excitement, setExcitement] = React.useState(props.star);

  const handleStarUpdate = (num) => {
    axios({
      method: "put",
      url: props.backendUrl + "/job/" + props.jobId,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: {
        job_info: {
          excitement: num,
        },
      },
    })
      .then((data) => {
        setExcitement(data.data.excitement);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        {excitement >= 1 ? (
          <BsStarFill onClick={() => handleStarUpdate(1)} />
        ) : (
          <BsStar onClick={() => handleStarUpdate(1)} />
        )}
        {excitement >= 2 ? (
          <BsStarFill onClick={() => handleStarUpdate(2)} />
        ) : (
          <BsStar onClick={() => handleStarUpdate(2)} />
        )}
        {excitement >= 3 ? (
          <BsStarFill onClick={() => handleStarUpdate(3)} />
        ) : (
          <BsStar onClick={() => handleStarUpdate(3)} />
        )}
        {excitement >= 4 ? (
          <BsStarFill onClick={() => handleStarUpdate(4)} />
        ) : (
          <BsStar onClick={() => handleStarUpdate(4)} />
        )}
        {excitement >= 5 ? (
          <BsStarFill onClick={() => handleStarUpdate(5)} />
        ) : (
          <BsStar onClick={() => handleStarUpdate(5)} />
        )}
      </div>
    </>
  );
};

export default Stars;
