
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF70AA'];

export default ({ data = [] }) => {
    return (
        <PieChart width={800} height={400}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={(props) => `${props.name}: ${props.value}`}
                isAnimationActive={false}
            >
                {
                    data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
        </PieChart>
    )
}