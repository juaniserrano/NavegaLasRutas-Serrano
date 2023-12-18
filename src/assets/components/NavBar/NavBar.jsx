import { AppBar, Box, IconButton, Toolbar, Typography, Menu, MenuItem, Button } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ cartCount }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Ecommerce - Coderhouse
            </Link>
          </Typography>
          <Button color="inherit" onClick={handleClick} disableRipple>
            Categorias
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>
              <Link to="/category/ropa" style={{ textDecoration: 'none', color: 'inherit' }}>
                Ropa 👕
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/category/calzado" style={{ textDecoration: 'none', color: 'inherit' }}>
                Calzado 👟
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/category/accesorios" style={{ textDecoration: 'none', color: 'inherit' }}>
                Accesorios 🕶️
              </Link>
            </MenuItem>
          </Menu>
          <CartWidget cartCount={cartCount} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
