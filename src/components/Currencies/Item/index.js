import styles from "./Item.module.css";
import { useEffect } from "react";

const Item = ({ currency, prevCurrency }) => {
  useEffect(() => {
    calcChange();
  }, [currency, prevCurrency]);

  const calcChange = () => {
    if (currency?.Value._text && prevCurrency?.Value._text) {
      const val =
        parseFloat(currency?.Value._text) -
        parseFloat(prevCurrency?.Value._text);
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
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.name}> {currency?._attributes.Code}</span>{" "}
        <br />
        <span className={styles.value}> {currency?.Value._text}</span>
      </div>
      {calcChange()}
    </div>
  );
};

export default Item;
