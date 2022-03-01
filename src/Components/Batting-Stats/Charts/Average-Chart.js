import { useTheme } from '@emotion/react';
import * as React from 'react';
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import * as StatsHelpers from '../../../Common/Helpers/StatsHelpers';

function AverageChart({data}) {

    const graphData = data.map((match, i) => {
        return {
            match: `Match ${i + 1}`,
            average: StatsHelpers.calculateAverage(data.slice(0, i + 1))
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="match"
                    stroke={theme.palette.text.secondary}
                    style={theme.typography.body2}
                />
                <YAxis 
                    stroke={theme.palette.text.secondary}
                    style={theme.typography.body2}
                >
                <Label
                    angle={270}
                    position="left"
                    style={{
                        textAnchor: 'middle',
                        fill: theme.palette.text.primary,
                        ...theme.typography.body1,
                    }}
                    >
              Batting Average
            </Label>
                </YAxis>
                <Line
                    dataKey="average"
                    stroke={theme.palette.primary.main}
                    name="Average"
                />
                <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}

export default AverageChart;