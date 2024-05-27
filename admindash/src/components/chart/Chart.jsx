// 44
import React from 'react';
import "./chart.css";

// 50
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

// 51 props
const Chart = ({data, title, dataKey, grid}) => {

  return (
    <div className="chart">
      {/* Chart */}

      {/* 52 */}
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
         <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"></XAxis>
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
            <Tooltip></Tooltip>
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"></CartesianGrid>}
         </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart