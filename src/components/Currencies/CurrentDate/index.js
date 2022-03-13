import { useState, useEffect, useContext } from "react";
import styles from "./Date.module.css";
import { context } from "../../../context";

const CurrentDate = () => {
  const { setTodaysSlug, setPrevSlug, currencies } = useContext(context);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  useEffect(() => {
    setTodaysSlug(currentDate);
    setPrevSlug(currentDate);
  }, [currentDate]);

  return (
    <div className={styles.container}>
      Tarix:
      <input
        className={styles.date}
        type="date"
        value={currentDate}
        max={new Date().toISOString().split("T")[0]}
        onChange={(e) => setCurrentDate(e.target.value)}
      />
      {!currencies && <span className="loading"></span>}
    </div>
  );
};

export default CurrentDate;
