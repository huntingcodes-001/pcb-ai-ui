// src/components/Navbar.js  
import React from 'react';  
import AppBar from '@mui/material/AppBar';  
import Toolbar from '@mui/material/Toolbar';  
import Typography from '@mui/material/Typography';  
import IconButton from '@mui/material/IconButton';  
import { useNavigate } from 'react-router-dom';  
import Box from '@mui/material/Box';  
import Brightness4Icon from '@mui/icons-material/Brightness4';  
import Brightness7Icon from '@mui/icons-material/Brightness7';  
import { useTheme } from '@mui/material/styles';  

function Navbar({ colorMode }) {  
  const navigate = useNavigate();  
  const theme = useTheme();  

  return (  
    <AppBar position="static" color="primary">  
      <Toolbar>  
        {/* Logo / Branding */}  
        <Typography  
          variant="h6"  
          component="div"  
          sx={{ flexGrow: 1, cursor: 'pointer' }}  
          onClick={() => navigate('/')}  
        >  
          PCB Pro  
        </Typography>  

        {/* Dark/Light Mode Toggle */}  
        <Box>  
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">  
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}  
          </IconButton>  
        </Box>  
      </Toolbar>  
    </AppBar>  
  );  
}  

export default Navbar;  