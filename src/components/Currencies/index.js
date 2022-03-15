import { useContext } from "react";
import CurrentDate from "./CurrentDate";
import Item from "./Item";
import styles from "./Currencies.module.css";
import { context } from "../../context";
import CurrencyChart from "./CurrencyChart";

const Currencies = () => {
  const { currencies, prevCurrencies } = useContext(context);

  return (
    <div className={styles.container}>
      <CurrentDate />
      <div className={styles.itemWrapper}>
        <Item
          currency={{ USD: currencies.USD }}
          prevCurrency={{ USD: prevCurrencies.USD }}
        />
        <Item
          currency={{ EUR: currencies.EUR }}
          prevCurrency={{ EUR: prevCurrencies.EUR }}
        />
        <Item
          currency={{ RUB: currencies.RUB }}
          prevCurrency={{ RUB: prevCurrencies.RUB }}
        />
        <Item
          currency={{ GBP: currencies.GBP }}
          prevCurrency={{ GBP: prevCurrencies.GBP }}
        />
        <Item
          currency={{ CHF: currencies.CHF }}
          prevCurrency={{ CHF: prevCurrencies.CHF }}
        />
        <Item
          currency={{ TRY: currencies.TRY }}
          prevCurrency={{ TRY: prevCurrencies.TRY }}
        />
      </div>
      <CurrencyChart />
    </div>
  );
};

export default Currencies;
