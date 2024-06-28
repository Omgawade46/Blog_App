import {
 
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Category  from "./components/categories";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Box, IconButton, Popover, Typography, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import BlogFilter from "./components/filter";
import CategoryLoader from "./components/CategoryLoader";
 import {useState} from 'react'
 import Resume from "./components/Resume";
import BlogLoader from "./components/BlogLoader";
function App() {
 
 
   

 

  const [theme, colorMode] = useMode();
  return (  <ColorModeContext.Provider value={colorMode}>   
    <ThemeProvider theme={theme}>
      <CssBaseline/>
       <div style={{marginLeft:"400px",
       
        marginTop:"9px"
       }}>
        <IconButton  sx={{ ml: 2, flex: 1 }} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        </div>
         
    <div className="App">
  
   <Routes>    <Route path="/" element={<Home></Home>} ></Route>
            <Route path="/category/" element={<Category ></Category>}></Route>
             
            <Route path="/category/Tech" element={<CategoryLoader category="tech" />} />
        <Route path="/category/Health" element={<CategoryLoader category="health" />} />
        <Route path="/category/News" element={<CategoryLoader category="News" />} />
        <Route path="/category/Travel" element={<CategoryLoader category="Travel" />} />
        <Route path="/category/LifeStyle" element={<CategoryLoader category="LifeStyle" />} />    
        <Route path="/author-search/:authorName" element={<CategoryLoader category="tech" />} />   
        <Route path="/author/:authorName/:blogid" element={<BlogLoader category="tech" />} />   
        <Route path="/resume" element={<Resume category="tech" />} />       </Routes>
                    
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
