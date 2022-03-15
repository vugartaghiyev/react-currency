import { Chart } from "react-chartjs-2";
import { useContext, useState, useEffect } from "react";
import { context } from "../../../context";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale
);

const options = {
  animation: {
    duration: 0,
  },
  plugins: {
    tooltip: {
      mode: "nearest",
      intersect: false,
    },
  },
};

const CurrencyChart = () => {
  const { chartData, allSlugs, chosenCurrency } = useContext(context);
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["white"],
        borderColor: ["red"],
        borderWidth: 1,
        fill: true,
        lineTension: 0,
      },
    ],
  });

  useEffect(() => {
    let d = chartData.map((item) => item[chosenCurrency]);
    setData({
      ...data,
      labels: allSlugs,
      datasets: [
        {
          data: d,
          backgroundColor: ["white"],
          borderColor: ["red"],
          borderWidth: 1,
          fill: true,
          lineTension: 0,
        },
      ],
    });
  }, [chartData, chosenCurrency]);

  return <Chart type="line" data={data} options={options} />;
};

export default CurrencyChart;
