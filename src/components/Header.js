import React from 'react'
import Box from '@mui/material/Box';
import Container  from '@mui/material/Container';
import ProfileSettings from './ProfileSettings';
//components
import Logo from './Logo';

import{
  flexBetweenCenter,
  dFlex,
  displayOnDesktop,
}from 'theme/commonStyles';
import LocationSearch from './LocationSearch';
import MobileSearch from './MobileSearch';

const Header = () => {
  return (
    <Box 
    sx={{
      ...dFlex,
      minHeight:70,
      borderBotton : '1px solid #ddd',
    }}
    >
      <Container maxWidth="xl">
        <Box sx={{
          ...flexBetweenCenter,
          minHeight:90,
          px:4,
        }}> 
        <Box sx={displayOnDesktop}><Logo /></Box>   
        <Box sx={displayOnDesktop}><LocationSearch /></Box> 
        <Box sx={displayOnDesktop}><ProfileSettings/></Box>  
        <Box sx={{display:{xs: 'flex',md:'none'}}}><MobileSearch /></Box>   
          
        </Box>

      </Container>
    </Box>
  )
}

export default Header
