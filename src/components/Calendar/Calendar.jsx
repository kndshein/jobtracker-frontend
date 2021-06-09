import React from "react";
import styles from "./Calendar.module.scss";
import DateTimePicker from "react-datetime-picker";

const Calendar = ({ date, setDate }) => {
  return (
    <div className={styles.calendar}>
      <DateTimePicker value={date} onChange={setDate} />
      <button>Add</button>
    </div>
  );
};

export default Calendar;
