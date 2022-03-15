import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

ChartJS.register(CategoryScale, LineElement, PointElement, LinearScale);

const CurrencyChart = () => {
  const chartData = {
    labels: ["J", "F", "M", "A", "M"],
    datasets: [
      {
        data: [13, 1, 31, 31, 4, 12],
      },
    ],
  };

  return <Chart type="line" data={chartData} />;
};

export default CurrencyChart;
