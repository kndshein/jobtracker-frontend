import React from "react";
import styles from "./Calendar.module.scss";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";

const Cal = ({ date, setDate, time, setTime, handleCreateTime }) => {
  const handleOnChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className={styles.calendar}>
      <Calendar
        value={date}
        onChange={setDate}
        shouldHighlightWeekends
        calendarClassName={styles.popup_calendar}
        renderFooter={() => (
          <div className={styles.footer_container}>
            <input
              type="time"
              className={styles.time_input}
              value={time}
              onChange={handleOnChange}
            />
            <button
              className={styles.add_status_button}
              onClick={handleCreateTime}
            >
              Add Status
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default Cal;
