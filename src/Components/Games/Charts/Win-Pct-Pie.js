import * as React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import Title from '../../Title/Title';

const data = [
    {name: 'Won', total: 5},
    { name: 'Lost', total: 4}
];

const colors = ['#0088FE', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor='middle' dominantBaseline="central">
        {`${data[index].name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

function WinPctPie({won, lost, title}) {

    const graphData = [
        {name: 'Won', total: won},
        {name: 'Lost', total: lost}
    ];

    return (
        <React.Fragment>
            <Title>{title}</Title>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={graphData}
                        cx="50%"
                        cy="50%"
                        dataKey="total"
                        outerRadius={80}
                        fill="#8884d8"
                        labelLine={false}
                        label={renderCustomizedLabel}
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}

export default WinPctPie;