import React from "react";
// import styles from "./Time.module.scss";

const Time = (props) => {
  const { time } = props;
  const showTime = new Date(time);
  return (
    <div>
      <div>{`${
        showTime.getMonth() + 1
      }/${showTime.getDate()}/${showTime.getFullYear()}`}</div>
    </div>
  );
};

export default Time;
