import styles from "./Item.module.css";
import { useEffect, useContext } from "react";
import { context } from "../../../context";

const Item = ({ currency, prevCurrency }) => {
  const { setChosenCurrency, chosenCurrency } = useContext(context);

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

  const chooseCurrency = () => {
    if (Object.keys(currency)[0] === chosenCurrency) setChosenCurrency("");
    else setChosenCurrency(Object.keys(currency)[0]);
  };

  const chosenStyle = {
    background: "rgb(161, 248, 80)",
    boxShadow: "inside -5px 5px 2px -4px rgba(0, 38, 255, 0.35)",
  };

  return (
    <div
      className={styles.container}
      onClick={chooseCurrency}
      style={Object.keys(currency)[0] === chosenCurrency ? chosenStyle : null}
    >
      <div className={styles.left}>
        <span className={styles.name}> {Object.keys(currency)[0]}</span>
        <span className={styles.value}> {Object.values(currency)[0]}</span>
      </div>
      {calcChange()}
    </div>
  );
};

export default Item;
