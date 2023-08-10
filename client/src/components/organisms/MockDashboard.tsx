import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

export const MockDashboard = () => {
  const data = [
    { name: "2022/11", alunos: 4000, exames: 2400, amt: 2400 },
    { name: "2022/12", alunos: 3000, exames: 1398, amt: 2210 },
    { name: "2023/01", alunos: 2000, exames: 9800, amt: 2290 },
    { name: "2023/02", alunos: 2780, exames: 3908, amt: 2000 },
    { name: "2023/03", alunos: 1890, exames: 4800, amt: 2181 },
    { name: "2023/04", alunos: 2390, exames: 3800, amt: 2500 },
    { name: "2023/05", alunos: 3490, exames: 4300, amt: 2100 },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="flex gap-4">
        {/* Line Chart */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Line Chart</h2>
          <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="exames" stroke="#8884d8" />
            <Line type="monotone" dataKey="alunos" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="flex-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Bar Chart</h2>
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Bar dataKey="exames" fill="#8884d8" />
            <Bar dataKey="alunos" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};
