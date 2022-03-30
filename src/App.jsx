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
import BowlingStats from './Components/Bowling-Stats/Bowling-Stats';
import Games from './Components/Games/Games';
import AddGame from './Components/Add-Game/Add-Game';
import Login from './Components/Login/Login';
import { isNullOrWhitespace } from './Common/Helpers/StringHelpers';

const mdTheme = createTheme();

function App() {

  const [token, setToken] = React.useState(localStorage.getItem("token"));
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          {isNullOrWhitespace(token) ? (
            <Login setToken={setToken}/>
          ) : (
            <React.Fragment>
              <MainPage setToken={setToken}/>
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="batting" element={<BattingStats />}/>
                    <Route path="bowling" element={<BowlingStats />}/>
                    <Route path="games" element={<Games />}/>
                    <Route path="add" element={<AddGame />}/>
                </Routes>
            </React.Fragment>
          )}
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

