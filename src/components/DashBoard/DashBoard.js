import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [income, setIncome] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setIncome(data))
    }, [])
    return (
        <div className='flex mt-16'>
            <div className='ml-20'>
                <LineChart width={550} height={250} data={income}>
                    <Line dataKey='investment' stroke="#8884d8"></Line>
                    <Line dataKey='sell' stroke='#ff7300'></Line>
                    <Line dataKey='revenue' stroke="#82ca9d"></Line>
                    <XAxis dataKey='month'></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='ml-20'>
                <BarChart width={550} height={250} data={income}>
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#ff7300" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <XAxis dataKey='month'></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default DashBoard;