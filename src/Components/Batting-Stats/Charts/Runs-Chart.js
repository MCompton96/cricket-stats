import { useTheme } from '@emotion/react';
import * as React from 'react';
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Bar, BarChart, Tooltip, ResponsiveContainer, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const graphCategories = ["Runs", "Boundaries", "Sixes"];

function RunsChart({data}) {

    const graphData = data.map((game, i) => ({
        match: `Match ${i + 1}`,
        runs: game.runs,
        boundaries: game.boundaries,
        sixes: game.sixes
    }));

    const theme = useTheme();

    const [categories, setCategories] = React.useState([graphCategories[0]]);

    const handleChange = (event) => {
        const {
            target: { value },
          } = event;
          setCategories(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );

    }

    return (
        <React.Fragment>
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="batting">Data</InputLabel>
            <Select
                labelId="batting"
                id="multiple-batting"
                multiple
                input={<OutlinedInput label="Tag" />}
                onChange={handleChange}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                value={categories}
            >
                {graphCategories.map((category) => (
                    <MenuItem key={category} value={category}>
                        <Checkbox checked={categories.indexOf(category) > -1} />
                        <ListItemText primary={category} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        <ResponsiveContainer>
            <BarChart
                data={graphData}
                margin={{
                    top: 16,
                    right: 16,
                    bottom: 0,
                    left: 24
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="match"
                    // stroke={theme.palette.text.secondary}
                    // style={theme.typography.body2} />
                    />
                <YAxis
                    // stroke={theme.palette.text.secondary}
                    // style={theme.typography.body2}
                />
                <Tooltip />
                <Legend />
                {categories.includes("Runs") && 
                (
                <Bar dataKey="runs" fill="#8884d8" name="Runs"/>
                )}
                {categories.includes("Boundaries") && 
                (
                <Bar 
                dataKey="boundaries" 
                fill="#50C878"
                name="Boundaries"/>
                )}
                {categories.includes("Sixes") && 
                (
                <Bar 
                dataKey="sixes" 
                fill="#C70039"
                name="Sixes"/>
                )}
            </BarChart>
        </ResponsiveContainer>
        </React.Fragment>
    )
}

export default RunsChart;