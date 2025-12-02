import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Alifa',
    Income: 4000,
    Cost: 2400,
    amt: 2400,
  },
  {
    name: 'Tarzan',
    Income: 3000,
    Cost: 1398,
    amt: 2210,
  },
  {
    name: 'Laila',
    Income: 2000,
    Cost: 9800,
    amt: 2290,
  },
  {
    name: 'Tufan',
    Income: 2780,
    Cost: 3908,
    amt: 2000,
  },
  {
    name: 'Latifa',
    Income: 1890,
    Cost: 4800,
    amt: 2181,
  },
  {
    name: 'Jamil',
    Income: 2390,
    Cost: 3800,
    amt: 2500,
  },
  {
    name: 'Nabila',
    Income: 3490,
    Cost: 4300,
    amt: 2100,
  },
];

// #endregion
const SimpleBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Cost" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="Income" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>
  );
};

export default SimpleBarChart;