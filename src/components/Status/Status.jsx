import React from "react";
import styles from "./Status.module.scss";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { GrCalendar } from "react-icons/gr";
// import { createTime, deleteTime } from "../../apicalls/JobPage";
import { createTime, deleteTime } from "../../apicalls/JobPage-API";

import Calendar from "../Calendar/Calendar";
import Time from "../Time/Time";

const Status = ({ timeline, setJob, fetchJobAPI, jobId }) => {
  const defaultDate = new Date();
  const [nameWarning, setNameWarning] = React.useState(false);
  const [name, setName] = React.useState("");
  const [addDate, setAddDate] = React.useState(false);
  const [date, setDate] = React.useState({
    year: defaultDate.getFullYear(),
    month: defaultDate.getMonth() + 1,
    day: defaultDate.getDate(),
  });
  const [time, setTime] = React.useState(
    `${defaultDate.getHours()}:${
      (defaultDate.getMinutes() < 10 ? "0" : "") + defaultDate.getMinutes()
    }`
  );

  const handleAddDate = () => {
    if (addDate) {
      setAddDate(false);
    } else {
      if (name.length > 0) {
        setNameWarning(false);
        setAddDate(true);
      } else {
        setNameWarning(true);
      }
    }
  };

  const handleCreateTime = async () => {
    try {
      await createTime(jobId, {
        timeline_info: {
          name: name,
          time: `${date.year}-${date.month}-${date.day} ${time}:00`,
        },
      });
      setAddDate(false);
      fetchJobAPI();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTime = async (timeId) => {
    try {
      await deleteTime(timeId);
      fetchJobAPI();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.status_container}>
      <div className={styles.label}>Status</div>
      <div className={styles.input_container}>
        <div className={styles.calendar_icon_container}>
          <GrCalendar className={styles.calendar_icon} />
        </div>
        <div className={styles.dropdown}>
          <select
            name="timeline"
            className={nameWarning ? styles.warning : ""}
            defaultValue=""
            onChange={handleSelectChange}
          >
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
          {addDate ? (
            <AiOutlineMinusCircle
              className={`${styles.action_icon} ${styles.action_icon_delete}`}
              onClick={handleAddDate}
            />
          ) : (
            <AiOutlinePlusCircle
              className={styles.action_icon}
              onClick={handleAddDate}
            />
          )}
          {addDate && (
            <Calendar
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              handleCreateTime={handleCreateTime}
            />
          )}
        </div>
      </div>
      <div className={styles.times_container}>
        {timeline.map((time, index) => (
          <Time key={index} time={time} handleDeleteTime={handleDeleteTime} />
        ))}
      </div>
    </div>
  );
};

export default Status;
