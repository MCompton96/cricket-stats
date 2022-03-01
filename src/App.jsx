import './App.css';
import * as React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import MainPage from './Components/Main-Page/Main-Page';
import Dashboard from './Components/Dashboard/Dashboard';
import BattingStats from './Components/Batting-Stats/Batting-Stats';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';

const mdTheme = createTheme();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <MainPage />
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="batting" element={<BattingStats />}/>
            </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

