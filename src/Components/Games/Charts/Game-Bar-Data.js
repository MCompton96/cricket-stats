import * as React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Title from '../../Title/Title';

function GameBarData({data}) { 
    const graphData = data.map((game) => (
        {
            match: game.opponent,
            runs: game.location.home ? game.scores.home.runs : game.scores.away.runs,
            wickets: game.location.home ? game.scores.home.wickets : game.scores.away.wickets
        }
    ));

    return (
        <React.Fragment>
            <Title>Game Data</Title>
            <ResponsiveContainer>
                <BarChart
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    data={graphData}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="match"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="wickets" fill="#8884d8" stackId="a" name="Wickets"/>
                    <Bar dataKey="runs" fill="#82ca9d" stackId="a" name="Runs"/>
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}

export default GameBarData;