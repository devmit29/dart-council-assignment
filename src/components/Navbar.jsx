import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, LightMode as LightModeIcon, DarkMode as DarkModeIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ toggleTheme, mode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Pricing', path: '/pricing' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
          }}
        >
          DART Council
        </Typography>
        
        {isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              onClick={toggleTheme}
              sx={{ mr: 1 }}
            >
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <Button
              color="inherit"
              variant="outlined"
              sx={{ mr: 1 }}
            >
              Login
            </Button>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  width: '100%',
                  maxWidth: '100%',
                  left: '0 !important',
                  right: '0 !important',
                  borderRadius: 0,
                  marginTop: 1,
                }
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleClose}
                  sx={{
                    width: '100%',
                    textAlign: 'center',
                    py: 2,
                  }}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={RouterLink}
                to={item.path}
              >
                {item.text}
              </Button>
            ))}
            <IconButton
              color="inherit"
              onClick={toggleTheme}
              sx={{ ml: 1, outline: 'none' }}
            >
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <Button
              color="inherit"
              variant="outlined"
              sx={{ ml: 1 }}
            >
              Login
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 