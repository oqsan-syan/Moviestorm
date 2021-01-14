import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink to="/" >
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </NavLink>
        <NavLink to="/series" >
          <MenuItem onClick={handleClose}>Series</MenuItem>
        </NavLink>
        <NavLink to="/movies" >
          <MenuItem onClick={handleClose}>Movies</MenuItem>
        </NavLink>
      </Menu>
    </div>
  );
}
