import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Column, TinyColumn } from "@ant-design/plots";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

// import { Chart as ChartJS, registerables } from "../../node_modules/chart.js";
// import { Line } from "../../node_modules/react-chartjs-2";

function App() {
  const [data, setdata] = useState([]);

  // const sortTableData = (array, { sortBy, direction }) => {
  //   return array.sort((a, b) => {
  //     if (a[sortBy] < b[sortBy]) return direction === "ascending" ? -1 : 1;
  //     if (a[sortBy] > b[sortBy]) return direction === "ascending" ? 1 : -1;
  //     return 0;
  //   });
  // };

  const names = async () => {
    const response = await fetch(
      "https://f2byongc84.execute-api.eu-central-1.amazonaws.com/webdev_test_fetch_batteries"
    );

    setdata(await response.json());
  };
  // const header = [names.data];

  return (
    // <Column />
    <div className="App">
      <a>home</a>
      {/* <Line data={data}>Home</Line> */}
    </div>
  );
}

export default App;
