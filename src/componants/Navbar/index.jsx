import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; 
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogOut from '../../componants/Logout';
import {AppBar, Box, Toolbar, Typography, MenuItem} from '@mui/material';
import {IconButton, Menu} from '@mui/material';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchor, setAnchor] = React.useState(null);

  const auth = useSelector(state => state.connected);

  const handleHamb = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseHamb = () => {
    setAnchor(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar> 

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">Home</Link>
            </Typography>
            {!auth.connected && (
              <div>
              <IconButton onClick={handleHamb}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> 
              <Menu
                id="simple-menu"
                anchorEl={anchor}
                keepMounted
                open={Boolean(anchor)}
                onClose={handleCloseHamb}
              >
                <MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/register">Inscription</Link></MenuItem>
              </Menu>
              </div>
            )}
            {auth.connected && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}><Link to="/profile">My account</Link></MenuItem>
                  <MenuItem onClick={handleClose}><LogOut>LogOut</LogOut></MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  )
}