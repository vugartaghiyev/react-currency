import { useState, useEffect, useContext } from "react";
import styles from "./Date.module.css";
import { context } from "../../../context";

const CurrentDate = () => {
  const { setTodaysSlug, setPrevSlug, currencies, calcSlugsBetweenDates } =
    useContext(context);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [prevDate, setPrevDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 7))
      .toISOString()
      .split("T")[0]
  );

  useEffect(() => {
    setTodaysSlug(currentDate);
    setPrevSlug(prevDate);
    calcSlugsBetweenDates(prevDate, currentDate);
  }, [currentDate, prevDate]);

  return (
    <div className={styles.container}>
      from:
      <input
        className={styles.date}
        type="date"
        value={prevDate}
        max={currentDate}
        onChange={(e) => setPrevDate(e.target.value)}
      />
      to:
      <input
        className={styles.date}
        type="date"
        value={currentDate}
        min={prevDate}
        max={new Date().toISOString().split("T")[0]}
        onChange={(e) => setCurrentDate(e.target.value)}
      />
      {!currencies && <span className="loading"></span>}
    </div>
  );
};

export default CurrentDate;
