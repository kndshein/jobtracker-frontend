import React from "react";
import styles from "./Time.module.scss";
import { BiTrashAlt } from "react-icons/bi";

const Time = ({ time, handleDeleteTime }) => {
  const showTime = new Date(time?.time);
  return (
    <div className={styles.time_container}>
      <div className={styles.time}>{`${
        showTime.getMonth() + 1
      }/${showTime.getDate()}/${showTime.getFullYear()}`}</div>
      <div>•</div>
      <div className={styles.name_container}>
        <div className={styles.name}>{time?.name}</div>
        <BiTrashAlt
          className={styles.trashcan}
          onClick={() => handleDeleteTime(time?.id)}
        />
      </div>
    </div>
  );
};

export default Time;
