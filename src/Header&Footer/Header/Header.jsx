import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../assets/logo.png';

const pages = ['Services', 'About Us', 'Contact Us', 'Request Sample'];

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(null);
  const [isProductsMenuOpen, setProductsMenuOpen] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(null);
    setProductsMenuOpen(null); // Close products menu when main menu is closed
  };

  const handleProductsMenuOpen = (event) => {
    setProductsMenuOpen(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsMenuOpen(null);
    setMenuOpen(null); // Close main menu when products menu is closed
  };

  const isLargeScreen = useMediaQuery('(min-width:600px)');

  return (
    <AppBar position="sticky" style={{ background: 'linear-gradient(to bottom, #34314c, #0d5f75)', height: '80px' }}>
      <Toolbar style={{ marginTop: '13px', marginRight: '50px' }}>
        <IconButton color="inherit" onClick={handleMenuOpen} sx={{ marginRight: '10px', display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        {isLargeScreen && (
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <Typography variant="h6" noWrap>
              <img src={Logo} alt="Logo" style={{ width: '120px', height: '40px', marginLeft: '40px' }} />
            </Typography>
          </Box>
        )}

        {/* Render Products menu items under Products header for small screens */}
        <Menu
          anchorEl={isMenuOpen}
          open={Boolean(isMenuOpen)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </MenuItem>

          <MenuItem onClick={handleProductsMenuOpen}>
            Products
          </MenuItem>
          {/* Render Products menu items under Products header */}
          <Menu
            id="products-menu"
            anchorEl={isProductsMenuOpen}
            open={Boolean(isProductsMenuOpen)}
            onClose={handleProductsMenuClose}
          >
            <MenuItem onClick={() => {handleProductsMenuClose(); handleMenuClose();}} component={NavLink} to="/import">
              Import
            </MenuItem>
            <MenuItem onClick={() => {handleProductsMenuClose(); handleMenuClose();}} component={NavLink} to="/products">
              Export
            </MenuItem>
          </Menu>

          {/* Render other pages */}
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleMenuClose} component={NavLink} to={`/${page.toLowerCase().replace(' ', '-')}`}>
              {page}
            </MenuItem>
          ))}
        </Menu>

        {/* Render Products menu items under Products header for large screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={NavLink} to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }}>
            Home
          </Button>

          <Button
            color="inherit"
            onClick={handleProductsMenuOpen}
            aria-haspopup="true"
            aria-controls="products-menu"
            style={{ textDecoration: 'none', color: 'inherit', marginRight: '10px' }}
          >
            Products
          </Button>

          {/* Conditionally rendering Products menu items only for large screens */}
          <Menu
            id="products-menu"
            anchorEl={isProductsMenuOpen}
            open={Boolean(isProductsMenuOpen)}
            onClose={handleProductsMenuClose}
          >
            <MenuItem onClick={() => {handleProductsMenuClose(); handleMenuClose();}} component={NavLink} to="/import">
              Import
            </MenuItem>
            <MenuItem onClick={() => {handleProductsMenuClose(); handleMenuClose();}} component={NavLink} to="/products">
              Export
            </MenuItem>
          </Menu>

          {pages.map((page) => (
            <Button key={page} color="inherit" component={NavLink} to={`/${page.toLowerCase().replace(' ', '-')}`}
              sx={{
                '&:hover': {
                  color: 'white'
                }
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
        {isMenuOpen && (
          <Box style={{ flexGrow: 1}} /> 
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
