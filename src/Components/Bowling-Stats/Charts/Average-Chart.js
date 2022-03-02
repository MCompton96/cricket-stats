import { useTheme } from '@emotion/react';
import * as React from 'react';
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import * as StatsHelpers from '../../../Common/Helpers/StatsHelpers';

function AverageChart({data}) {
    const graphData = data.map((match, i) => {
        return {
            match: `Match ${i + 1}`,
            average: StatsHelpers.bowlingAverage(data.slice(0, i + 1)),
            strikeRate: StatsHelpers.bowlingStrikeRate(data.slice(0, i + 1))
        }
    });

    const theme = useTheme();

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <LineChart
                    data={graphData}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                      }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis 
                        dataKey="match"
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                        dataKey="average"
                        name="Average"
                        stroke="#8884d8"
                    />
                    <Line 
                        dataKey="strikeRate"
                        name="Strike Rate"
                        stroke="#82ca9d"
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}

export default AverageChart;