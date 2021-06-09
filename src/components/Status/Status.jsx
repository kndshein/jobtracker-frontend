import React from "react";
import styles from "./Status.module.scss";
import { AiOutlineCalendar, AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";

const Status = ({ timeline }) => {
  console.log(timeline);
  return (
    <div className={styles.status_container}>
      <div className={styles.label}>Status</div>
      <div className={styles.input_container}>
        <div className={styles.calendar_icon_container}>
          <FaRegCalendarAlt className={styles.calendar_icon} />
        </div>
        <div className={styles.dropdown}>
          <select name="timeline" defaultValue="">
            <option hidden value="">
              Add next step...
            </option>
            <option value="Applied">Applied</option>
            <option value="Phone Screen">Phone Screen</option>
            <option value="Technical Assessment">Technical Assessment</option>
            <option value="Interview">Interview</option>
            <option value="Offer Received">Offer Received</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <div className={styles.action_icon_container}>
          <AiOutlinePlusCircle className={styles.action_icon} />
        </div>
      </div>
      {timeline
        .sort((a, b) => new Date(b.time) - new Date(a.time))
        .map((time, index) => {
          return (
            <div key={index} className={styles.time_container}>
              <div className={styles.time}>{`${time.time.slice(
                5,
                7
              )}/${time.time.slice(8, 10)}/${time.time.slice(0, 4)}`}</div>
              <div>•</div>
              <div className={styles.name}>{time.name}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Status;
