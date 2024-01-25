import React, { useMemo } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { themeSettings } from "../theme"
import { CssBaseline } from "@mui/material"
import {Box} from "@mui/material"
import { BrowserRouter ,Routes,Route} from "react-router-dom/dist"
import Navbar from "./components/Navbar"
import Dashborad from "./scenes/dashboard"

function App() {
  const theme=useMemo(()=>createTheme(themeSettings),[])

  return (
    <div className="App" >
      <BrowserRouter>
      <ThemeProvider theme={theme}>
         <CssBaseline/>
         <Box width="100" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar/>
           <Routes>
            <Route path="/" element={<Dashborad/>}/>
            <Route path="/predictions" element={<div>kenya</div>}/>
           </Routes>
         </Box>
       </ThemeProvider>
      </BrowserRouter>
       
    </div>
  )
} 

export default App
