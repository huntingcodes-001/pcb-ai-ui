// src/components/Navbar.js  
import React, { useState } from 'react';  
import AppBar from '@mui/material/AppBar';  
import Toolbar from '@mui/material/Toolbar';  
import Typography from '@mui/material/Typography';  
import IconButton from '@mui/material/IconButton';  
import MenuIcon from '@mui/icons-material/Menu';  
import { useNavigate } from 'react-router-dom';  
import Box from '@mui/material/Box';  
import Brightness4Icon from '@mui/icons-material/Brightness4';  
import Brightness7Icon from '@mui/icons-material/Brightness7';  
import { useTheme } from '@mui/material/styles';  
import Menu from '@mui/material/Menu';  
import MenuItem from '@mui/material/MenuItem';  
import Button from '@mui/material/Button';  
  
function Navbar({ colorMode }) {  
  const navigate = useNavigate();  
  const theme = useTheme();  
  const [anchorEl, setAnchorEl] = useState(null);  
  
  const handleMenu = (event) => {  
    setAnchorEl(event.currentTarget);  
  };  
  
  const handleClose = () => {  
    setAnchorEl(null);  
  };  
  
  const handleNavigation = (path) => {  
    navigate(path);  
    handleClose();  
  };  
  
  return (  
    <AppBar position="static" color="primary">  
      <Toolbar>  
        {/* Hamburger Menu for Mobile */}  
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, mr: 2 }}>  
          <IconButton  
            size="large"  
            edge="start"  
            color="inherit"  
            aria-label="menu"  
            onClick={handleMenu}  
          >  
            <MenuIcon />  
          </IconButton>  
          <Menu  
            id="menu-appbar"  
            anchorEl={anchorEl}  
            anchorOrigin={{  
              vertical: 'top',  
              horizontal: 'left',  
            }}  
            keepMounted  
            transformOrigin={{  
              vertical: 'top',  
              horizontal: 'left',  
            }}  
            open={Boolean(anchorEl)}  
            onClose={handleClose}  
          >  
            <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>  
            <MenuItem onClick={() => handleNavigation('/generate-pcb')}>Generate PCB</MenuItem>  
            <MenuItem onClick={() => handleNavigation('/improve-pcb')}>Improve PCB</MenuItem>  
            <MenuItem onClick={() => handleNavigation('/about')}>About</MenuItem>  
            <MenuItem onClick={() => handleNavigation('/contact')}>Contact</MenuItem>  
          </Menu>  
        </Box>  
  
        {/* Branding */}  
        <Typography  
          variant="h6"  
          component="div"  
          sx={{ flexGrow: 1, cursor: 'pointer', display: { xs: 'none', sm: 'block' } }}  
          onClick={() => navigate('/')}  
        >  
          PCB Pro  
        </Typography>  
  
        {/* Desktop Links */}  
        <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>  
          <Button color="inherit" onClick={() => navigate('/')}>  
            Home  
          </Button>  
          <Button color="inherit" onClick={() => navigate('/generate-pcb')}>  
            Generate PCB  
          </Button>  
          <Button color="inherit" onClick={() => navigate('/improve-pcb')}>  
            Improve PCB  
          </Button>  
          <Button color="inherit" onClick={() => navigate('/about')}>  
            About  
          </Button>  
          <Button color="inherit" onClick={() => navigate('/contact')}>  
            Contact  
          </Button>  
        </Box>  
  
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