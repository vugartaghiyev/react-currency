import { createContext, useEffect, useState } from "react";
import convert from "xml-js";

export const context = createContext();

const ContextProvider = ({ children }) => {
  // Today's slug
  const [slugDate, setSlugDate] = useState("");
  // Prev slug
  const [prevSlugDate, setPrevSlugDate] = useState("");

  const setTodaysSlug = (date) => {
    setSlugDate(
      `${date.split("-")[2]}.${date.split("-")[1]}.${date.split("-")[0]}`
    );
  };

  const setPrevSlug = () => {
    let date = new Date(new Date().setDate(new Date().getDate() - 7));
    date = date.toISOString().split("T")[0];
    setPrevSlugDate(
      `${date.split("-")[2]}.${date.split("-")[1]}.${date.split("-")[0]}`
    );
  };

  useEffect(() => {}, [slugDate]);

  // Currencies --------------
  const url = `https://blooming-caverns-21217.herokuapp.com/https://www.cbar.az/currencies/${slugDate}.xml`;
  const prevUrl = `https://blooming-caverns-21217.herokuapp.com/https://www.cbar.az/currencies/${prevSlugDate}.xml`;

  const [currencies, setCurrencies] = useState("");
  const [prevCurrencies, setPrevCurrencies] = useState("");

  useEffect(() => {
    if (slugDate) {
      getCurrencies();
    }

    if (slugDate && !prevCurrencies) {
      getPrevCurrencies();
    }
  }, [slugDate]);

  const getCurrencies = async () => {
    let date = await fetch(url).then((res) => res.text());
    date = convert.xml2js(date, { compact: true, spaces: 4 });

    let handledVal = {};
    date.ValCurs.ValType[1].Valute &&
      date.ValCurs.ValType[1].Valute.forEach((item) => {
        handledVal = {
          ...handledVal,
          [item._attributes.Code]: parseFloat(item.Value._text),
        };
      });
    //  Adding AZN currency
    handledVal = {
      ...handledVal,
      AZN: 1,
    };

    setCurrencies(handledVal);
  };

  const getPrevCurrencies = async () => {
    let date = await fetch(prevUrl).then((res) => res.text());
    date = convert.xml2js(date, { compact: true, spaces: 4 });

    let handledVal = {};
    date.ValCurs.ValType[1].Valute &&
      date.ValCurs.ValType[1].Valute.forEach((item) => {
        handledVal = {
          ...handledVal,
          [item._attributes.Code]: parseFloat(item.Value._text),
        };
      });

    setPrevCurrencies(handledVal);
  };

  //  ------------------

  return (
    <context.Provider
      value={{
        currencies,
        prevCurrencies,
        setTodaysSlug,
        setPrevSlug,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
