import { useTheme } from '@emotion/react';
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import * as React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

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

const graphCategories = [
    "Runs", 
    "Wickets", 
    "Maidens", 
    "Average", 
    "Economy"
];

function GameChart({data}) {

    const graphData = data.map((game, i) => ({
        match: `Match ${i + 1}`,
        runs: game.runs,
        wickets: game.wickets,
        maidens: game.maidens,
        average: game.wickets > 0 ? (game.runs / game.wickets).toFixed(2) : 0,
        economy: (game.runs / game.overs).toFixed(2)
    }));

    const theme = useTheme();

    const [categories, setCategories] = React.useState(["Wickets"]);

    const handleChange = (event) => {
        const {
            target: { value }
        } = event;
        setCategories(
            typeof value === 'string' ? value.split(',') : value,
        );

    }


    return (
        <React.Fragment>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="bowling">Data</InputLabel>
                <Select
                    labelId='bowling'
                    id='multiple-bowling'
                    multiple
                    input={<OutlinedInput label='tag'/>}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    value={categories}
                >
                    {graphCategories.map((category) => (
                        <MenuItem key={category} value={category}>
                            <Checkbox checked={categories.indexOf(category) > -1} />
                            <ListItemText primary={category}/>
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
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="match"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {categories.includes("Wickets") && 
                    (
                        <Bar dataKey="wickets" fill="purple" name="Wickets"/>
                    )}
                    {categories.includes("Runs") && 
                    (
                        <Bar dataKey="runs" fill="green" name="Runs"/>
                    )}
                    {categories.includes("Maidens") &&
                    (
                        <Bar dataKey="maidens" fill="orange" name="Maidens"/>
                    )}
                    {categories.includes("Average") &&
                    (
                        <Bar dataKey="average" fill="red" name="Average"/>
                    )}
                    {categories.includes("Economy") &&
                    (
                        <Bar dataKey="economy" fill="blue" name="Economy"/>
                    )}
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}

export default GameChart;