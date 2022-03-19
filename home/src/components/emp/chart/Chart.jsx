
import "./chart.css";
import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ name, data, dataKey, grid }) {

  return <div className="chart">
    <h3 className="chartTitle">{name}</h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <BarChart
        data={data}
        margin={
          {
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }
        }
      >
        {grid = { grid } && <CartesianGrid strokeDasharray="3 3" />}
        <XAxis dataKey="name" stroke="#b6b4b5" />
        <YAxis stroke="#b6b4b5" />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="compare" fill="#8884d8" />
        <Bar dataKey="sale" fill="#82ca9d" />

      </BarChart>


    </ResponsiveContainer>

  </div>;
}
 