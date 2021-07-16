import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart() {
    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
        },
        {
            name: 'Feb',
            "Active User": 3000,
          },
          {
            name: 'Mar',
            "Active User": 6000,
          },
          {
            name: 'Apr',
            "Active User": 5500,
          },
          {
            name: 'May',
            "Active User": 6789,
          },
          {
            name: 'Jun',
            "Active User": 2345,
          },
          {
            name: 'Jul',
            "Active User": 8267,
          },
          {
            name: 'Agu',
            "Active User": 4324,
          },
          {
            name: 'Sep',
            "Active User": 9864,
          },
          {
            name: 'Oct',
            "Active User": 5435,
          },
          {
            name: 'Nov',
            "Active User": 8765,
          },
          {
            name: 'Dec',
            "Active User": 11234,
          },
       
      ];
      
    return (
        <div className="chart">
            <h3 className="chartTitle">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5f27cd"/>
                <Line type="monotone" dataKey="Active User" stroke="#ff9f43"/>
                <Tooltip/>
                <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
