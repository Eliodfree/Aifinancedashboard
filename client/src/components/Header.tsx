import React from 'react'
import FlexBetween from './FlexBetween';
import { useTheme ,Box,Typography} from '@mui/material';

type Props = {
    icon?: React.ReactNode,
    title:string,
    subtitle?:string,
    sidetitle?:string
}

const Header = ({icon,title,subtitle,sidetitle}: Props) => {
   const {palette} = useTheme();

  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem" >
      {/* firstelement */}
      <FlexBetween>
    {icon}
    <Box width="100%">
    <Typography variant="h4" mb="-0.1rem">
       {title}
    </Typography>
    <Typography variant="caption" fontWeight="700" >
       {subtitle}
    </Typography>
    </Box>
     </FlexBetween>
     
     {/* secondelement */}
     <FlexBetween>
     <Typography  variant="h4" color={palette.secondary[400]}>{sidetitle}</Typography>
     </FlexBetween>

    </FlexBetween>
  )
}

export default Header