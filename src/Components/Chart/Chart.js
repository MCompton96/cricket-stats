import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import Title from '../Title/Title';

// Generate Sales Data
function createData(games, runs) {
  return { games, runs };
}

const data = [
  createData('Match 1', 0),
  createData('Match 2', 30),
  createData('Match 3', 55),
  createData('Match 4', 81),
  createData('Match 5', 178),
  createData('Match 6', 201),
  createData('Match 7', 295),
  createData('Match 8', 343),
  createData('Match 9', 345),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Total Runs</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="games"
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
              Total Runs
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="runs"
            stroke={theme.palette.primary.main}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}