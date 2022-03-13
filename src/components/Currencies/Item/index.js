import styles from "./Item.module.css";
import { useEffect } from "react";

const Item = ({ currency, prevCurrency }) => {
  useEffect(() => {
    calcChange();
  }, [currency, prevCurrency]);

  const calcChange = () => {
    if (currency && prevCurrency) {
      const val = Object.values(currency)[0] - Object.values(prevCurrency)[0];
      if (val > 0) {
        return (
          <div className={styles.arrow + " " + styles.greenArrow}>
            <span>&#x2191;</span> <span>{val.toFixed(3)}</span>
          </div>
        );
      } else if (val < 0) {
        return (
          <div className={styles.arrow + " " + styles.redArrow}>
            <span>&#x2193;</span> <span>{val.toFixed(3)}</span>
          </div>
        );
      } else {
        return <div className={styles.arrow}>{"(-)"}</div>;
      }
    }
  };

  console.log();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span className={styles.name}> {Object.keys(currency)[0]}</span>
        <span className={styles.value}> {Object.values(currency)[0]}</span>
      </div>
      {calcChange()}
    </div>
  );
};

export default Item;
