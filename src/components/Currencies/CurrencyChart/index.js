import { Chart } from "react-chartjs-2";
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

const CurrencyChart = () => {
  const chartData = {
    labels: ["J", "F", "M", "A", "M"],
    datasets: [
      {
        data: [5, 10, 15, 20, 9],
      },
    ],
  };

  return <Chart type="line" data={chartData} />;
};

export default CurrencyChart;
