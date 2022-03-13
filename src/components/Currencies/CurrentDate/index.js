import { useState, useEffect, useContext } from "react";
import styles from "./Date.module.css";
import { context } from "../../../context";

const CurrentDate = () => {
  const { setTodaysSlug, setPrevSlug } = useContext(context);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  useEffect(() => {
    setTodaysSlug(currentDate);
    setPrevSlug(currentDate);
  }, [currentDate]);

  return (
    <div className={styles.container}>
      Date:{" "}
      <input
        className={styles.date}
        type="date"
        value={currentDate}
        max={new Date().toISOString().split("T")[0]}
        onChange={(e) => setCurrentDate(e.target.value)}
      />
    </div>
  );
};

export default CurrentDate;
