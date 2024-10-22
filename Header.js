
import React ,{useState} from 'react'
import { AppBar, Toolbar,  Typography, Drawer,Divider, Box } from '@mui/material';
 import { Fastfood } from '@mui/icons-material';
 import IconButton from '@mui/material/IconButton';
 import logo from '../Images/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
 import {Link} from 'react-router-dom';
 import '../styles/HeaderStyles.css';

function Header ()  {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle drawer toggle for mobile view
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer content for mobile navigation
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <Fastfood/>
      My Resturant
      </Typography>
      <ul className="mobile-navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" sx={{ bgcolor: 'black' }}>
        <Toolbar>
          {/* Menu Icon for mobile drawer */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' } }} // Show on mobile
          >
            <MenuIcon />
          </IconButton>

          <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="logo" height={"70"} width="200" />
          </Typography>
          <Divider/>

          {/* Regular navigation menu for larger screens */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ul className="navigation-menu">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }, // Only show on mobile
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

export default Header;