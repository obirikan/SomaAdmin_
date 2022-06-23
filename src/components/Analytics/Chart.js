import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "May 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "May 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "May 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "May 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May 5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "May 6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "May 7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
            
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#4361EE" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#fff" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#4361EE" fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
