import { useContext } from "react";
import CurrentDate from "./CurrentDate";
import Item from "./Item";
import styles from "./Currencies.module.css";
import { context } from "../../context";
const Currencies = () => {
  const { currencies, prevCurrencies } = useContext(context);

  return (
    <div className={styles.container}>
      <CurrentDate />
      <div className={styles.itemWrapper}>
        <Item currency={currencies[0]} prevCurrency={prevCurrencies[0]} />
        <Item currency={currencies[1]} prevCurrency={prevCurrencies[1]} />
        <Item currency={currencies[34]} prevCurrency={prevCurrencies[34]} />
        <Item currency={currencies[38]} prevCurrency={prevCurrencies[38]} />
        <Item currency={currencies[16]} prevCurrency={prevCurrencies[16]} />
        <Item currency={currencies[20]} prevCurrency={prevCurrencies[20]} />
      </div>
      <hr />
    </div>
  );
};

export default Currencies;
