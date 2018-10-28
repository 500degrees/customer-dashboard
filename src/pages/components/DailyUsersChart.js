import React from 'react';
import {LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line} from 'recharts';

export default ({ data = [{dateLabel: '2018-10-20', count: 50},{dateLabel: '2018-10-21', count: 65}]}) => {
    return (
        (
            <LineChart width={600} height={250} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="dateLabel"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{r: 8}}/>
          </LineChart>
        )
    )
}