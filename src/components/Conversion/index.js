import { useContext, useState, useEffect } from "react";
import { context } from "../../context";
import styles from "./Conversion.module.css";
const Conversion = () => {
  const [inputAmount, setInputAmount] = useState(1);
  const [inputCurrency, setInputCurrency] = useState("AZN");
  const [outputAmount, setOutputAmount] = useState(1);
  const [outputCurrency, setOutputCurrency] = useState("AZN");
  const { currencies } = useContext(context);

  const calcCurrency = () => {
    if (currencies) {
      let inputValByAzn = inputAmount * currencies[inputCurrency];
      let outputVal = inputValByAzn / currencies[outputCurrency];
      setOutputAmount(outputVal);
    }
  };

  useEffect(() => {
    calcCurrency();
  }, [inputAmount, inputCurrency, outputCurrency, currencies]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Exchange {!currencies && <span className="loading"></span>}
      </h2>

      <div className={styles.itemWrapper}>
        <div className={styles.item}>
          <input
            type="number"
            className={styles.input}
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
          />
          <select
            className={styles.select}
            value={inputCurrency}
            onChange={(e) => setInputCurrency(e.target.value)}
          >
            {currencies &&
              Object.keys(currencies)
                .reverse()
                .map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
          </select>
        </div>
        <div className={styles.item}>
          <input
            type="number"
            className={styles.input}
            value={outputAmount.toFixed(4)}
            onChange={(e) => setOutputAmount(e.target.value)}
            readOnly
          />
          <select
            className={styles.select}
            value={outputCurrency}
            onChange={(e) => setOutputCurrency(e.target.value)}
          >
            {currencies &&
              Object.keys(currencies).map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
