import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const userData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Aug",
    uv: 2090,
    pv: 3000,
    amt: 2300
  },
  {
    name: "Sept",
    uv: 2580,
    pv: 3850,
    amt: 2900
  },
  {
    name: "Oct",
    uv: 3090,
    pv: 3200,
    amt: 2500
  },
  {
    name: "Nov",
    uv: 2950,
    pv: 3800,
    amt: 2800
  },
  {
    name: "Dec",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
];

function Filter(){

return(<>


<LineChart width={500} height={300} data={userData} margin={{top: 5,right: 30,left: 50, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      <Line type="monotone" dataKey="amt" stroke="red" />
    </LineChart>

</>)
}
export default Filter;