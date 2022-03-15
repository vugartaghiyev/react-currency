import { createContext, useEffect, useState } from "react";
import convert from "xml-js";

export const context = createContext();

const ContextProvider = ({ children }) => {
  // Today's slug
  const [slugDate, setSlugDate] = useState("");
  // Prev slug
  const [prevSlugDate, setPrevSlugDate] = useState("");

  const setTodaysSlug = (date) => {
    setSlugDate(convertToSlug(date));
  };

  const setPrevSlug = (date) => {
    setPrevSlugDate(convertToSlug(date));
  };

  // Currencies --------------
  const url = (slug) =>
    `https://blooming-caverns-21217.herokuapp.com/https://www.cbar.az/currencies/${slug}.xml`;

  const [currencies, setCurrencies] = useState("");
  const [prevCurrencies, setPrevCurrencies] = useState("");

  useEffect(() => {
    if (slugDate) {
      getCurrencies();
    }

    if (prevSlugDate) {
      getPrevCurrencies();
    }
  }, [slugDate, prevSlugDate]);

  const getCurrencies = async () => {
    let data = await fetch(url(slugDate)).then((res) => res.text());
    data = convert.xml2js(data, { compact: true, spaces: 4 });

    //  Adding AZN currency
    let handledVal = {
      ...handleCurrencies(data),
      AZN: 1,
    };

    setCurrencies(handledVal);
  };

  const getPrevCurrencies = async () => {
    let data = await fetch(url(prevSlugDate)).then((res) => res.text());
    data = convert.xml2js(data, { compact: true, spaces: 4 });

    setPrevCurrencies(handleCurrencies(data));
  };

  const handleCurrencies = (data) => {
    let handledVal = {};
    data.ValCurs.ValType[1].Valute &&
      data.ValCurs.ValType[1].Valute.forEach((item) => {
        handledVal = {
          ...handledVal,
          [item._attributes.Code]: parseFloat(item.Value._text),
        };
      });

    return handledVal;
  };

  //  ------------------]

  const [allSlugs, setAllSlugs] = useState([]);

  const calcSlugsBetweenDates = (date1, date2) => {
    const slugs = [];

    let i = 0;
    while (true) {
      const date = new Date(
        new Date(date1).setDate(new Date(date1).getDate() + i)
      )
        .toISOString()
        .split("T")[0];

      slugs.push(convertToSlug(date));
      if (new Date(date).toISOString() === new Date(date2).toISOString()) break;
      i++;
    }
    setAllSlugs(slugs);
  };

  const convertToSlug = (date) => {
    return `${date.split("-")[2]}.${date.split("-")[1]}.${date.split("-")[0]}`;
  };

  // get all slug's date
  const [chartData, setChartData] = useState([]);
  const [chosenCurrency, setChosenCurrency] = useState("");

  useEffect(() => {
    let stopTheLoop = false;

    const getAllSlugsData = async () => {
      setChartData([]);
      if (allSlugs[0]) {
        for (let i = 0; i < allSlugs.length; i++) {
          if (stopTheLoop) break;
          let data = await fetch(url(allSlugs[i])).then((res) => res.text());
          data = convert.xml2js(data, { compact: true, spaces: 4 });
          setChartData((prev) => [...prev, handleCurrencies(data)]);
        }
      }
    };
    getAllSlugsData();

    return () => {
      stopTheLoop = true;
    };
  }, [allSlugs]);

  return (
    <context.Provider
      value={{
        currencies,
        prevCurrencies,
        prevSlugDate,
        slugDate,
        chartData,
        allSlugs,
        chosenCurrency,
        setTodaysSlug,
        setPrevSlug,
        calcSlugsBetweenDates,
        setChosenCurrency,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
