import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import Title from '../Title/Title';
import * as StatsHelpers from '../../Common/Helpers/StatsHelpers';
import { Queries } from '../../GraphQL';
import { useQuery } from '@apollo/client';

export default function Chart() {
  const theme = useTheme();

  const { data } = useQuery(Queries.GET_BATTING_RUNS);
  
  let graphData;
  if (data) {
    graphData = data.batting.map((_, i) => {
      return {
          match: `Match ${i + 1}`,
          runs: StatsHelpers.calculateRuns(data.batting.slice(0, i + 1))
      }
  });
  }
  
  return (
    <React.Fragment>
      <Title>Total Runs</Title>
      {data && (
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

      )}
    </React.Fragment>
  );
}