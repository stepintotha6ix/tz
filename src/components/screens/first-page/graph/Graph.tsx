import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "@/store/time/time.slice";
import styles from "./Graph.module.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

// Данные для разных периодов
const dataSets = {
  "24h": [
    { name: "12:00", price: 120 },
    { name: "14:00", price: 130 },
    { name: "16:00", price: 110 },
    { name: "18:00", price: 140 },
    { name: "20:00", price: 135 },
    { name: "22:00", price: 145 },
  ],
  "7d": [
    { name: "01.02", price: 160 },
    { name: "02.02", price: 150 },
    { name: "03.02", price: 140 },
    { name: "04.02", price: 170 },
    { name: "05.02", price: 180 },
    { name: "06.02", price: 190 },
    { name: "07.02", price: 200 },
  ],
  "30d": [
    { name: "01.01", price: 140 },
    { name: "05.01", price: 160 },
    { name: "10.01", price: 155 },
    { name: "15.01", price: 170 },
    { name: "20.01", price: 180 },
    { name: "25.01", price: 190 },
    { name: "30.01", price: 200 },
  ],
  allTime: [
    { name: "2020", price: 100 },
    { name: "2021", price: 150 },
    { name: "2022", price: 180 },
    { name: "2023", price: 220 },
    { name: "2024", price: 250 },
  ],
};

const Graph: FC = () => {
  const filter = useSelector(selectFilter) as keyof typeof dataSets; 
  const data = dataSets[filter] || dataSets["24h"];
  
  return (
    <div className={styles.graph}>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a8dff" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#3a8dff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
          <XAxis dataKey="name" stroke="#546076" />
          <Tooltip contentStyle={{ background: "#1a202c", border: "none" }} />
          <ReferenceLine x={data[Math.floor(data.length / 2)].name} stroke="#00aaff" strokeWidth={2} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={{ fill: "#fff", r: 4 }}
            activeDot={{ r: 6, fill: "#fff", stroke: "#3a8dff", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className={styles.percentage}>+{Math.round(Math.random() * 50)}%</div>
    </div>
  );
};

export default Graph;
