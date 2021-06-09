import React from "react";
import styles from "./Status.module.scss";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiTrashAlt } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { createTime, deleteTime } from "../../apicalls/JobPage";

import Calendar from "../Calendar/Calendar";

const Status = ({ timeline, setJob, jobId }) => {
  console.log(timeline);
  const defaultDate = new Date();
  console.log(defaultDate);
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
  console.log(date);
  console.log(time);

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

  const handleCreateTime = () => {
    setAddDate(false);
    createTime(name, date, time, setJob, jobId);
  };

  const handleDeleteTime = (timeId) => {
    deleteTime(setJob, jobId, timeId);
  };

  const handleSelectChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className={styles.status_container}>
      <div className={styles.label}>Status</div>
      <div className={styles.input_container}>
        <div className={styles.calendar_icon_container}>
          <FaRegCalendarAlt className={styles.calendar_icon} />
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
              className={styles.action_icon}
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
        {timeline
          .sort((a, b) => new Date(b.time) - new Date(a.time))
          .map((time, index) => {
            const showTime = new Date(time?.time);
            return (
              <div key={index} className={styles.time_container}>
                <div className={styles.time}>{`${
                  showTime.getMonth() + 1
                }/${showTime.getDate()}/${showTime.getFullYear()}`}</div>
                <div>•</div>
                <div>
                  <div className={styles.name}>{time.name}</div>
                  <FiEdit2 />
                  <BiTrashAlt onClick={() => handleDeleteTime(time.id)} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Status;
