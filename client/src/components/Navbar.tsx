//eslint-disable jsx-a11y/anchor-is-valid 
import React, { useState } from 'react'
import { Box,  Typography, colors } from '@mui/material'
import { useTheme } from '@mui/material';
import FlexBetween from './FlexBetween';
import WineBarIcon from '@mui/icons-material/WineBar';
import { Link } from 'react-router-dom';



type Props = {}

const Navbar = (props: Props) => {
    const {palette}=useTheme();const [selected,setSelected]=useState("dashboard");
    return (
    
    <FlexBetween mb="0.25rem" 
      p="0.5 rem 0rem"
      color={palette.grey[300]}
    >
        <FlexBetween gap="0.75rem">
           <WineBarIcon sx={{fontSize:"28px"}}/>
           <Typography variant='h4' fontSize="16px">Omega</Typography>
        </FlexBetween>
        {/* lastsection */}
        <FlexBetween gap="2rem">
            {/* firstdiv */}
         <Box sx={{"&:hover":{color:palette.primary[100]}}}>
           <Link
            to="/"
            onClick={()=>setSelected("dashboard")}
            style={{
                color:selected === "dashboard" ? "inherit":palette.grey[700],
                textCombineUpright:"inherit"
            }}
            >
             Dashboard
           </Link>
         </Box>
          {/* seconddiv */}
         <Box sx={{"&:hover":{color:palette.primary[100]}}}>
           <Link
            to="/predictions"
            onClick={()=>setSelected("dashboard")}
            style={{
                color:selected === "dashboard" ? "inherit":palette.grey[700],
                textCombineUpright:"inherit"
            }}
            >
             predictions
           </Link>
         </Box>
         
        </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar