import React from 'react'
import { Palette } from '@mui/material/styles/createPalette';
import { useTheme ,Box} from '@mui/material';
type Props = {}

const Dashborad = (props: Props) => {
    const {palette}=useTheme();
  return (
    <Box width="100%" height="100%" display="grid" gap="1.5rem" 
     sx={{
        gridTemplateAreas:
     }}
    >
     
    </Box>
  )
}

export default Dashborad