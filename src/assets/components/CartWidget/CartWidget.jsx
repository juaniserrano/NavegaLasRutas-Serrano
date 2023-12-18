import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import Swal from 'sweetalert2';

const CartWidget = ({ cartCount }) => {
  const handleCartClick = () => {
    if (cartCount == 0)
    Swal.fire({
      title: 'Carrito de compras',
      text: 'No hay productos en el carrito',
      icon: 'info',
      confirmButtonText: 'Ok',
    });
    else {
      Swal.fire({
        title: 'Carrito de compras',
        text: 'Hay ' + cartCount + ' productos en el carrito',
        icon: 'info',
        confirmButtonText: 'Ok',
      });
    }
  }
  return (
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => handleCartClick()}>
    <Badge badgeContent={cartCount} showZero color="error">
      <ShoppingCartIcon />
    </Badge>
    </IconButton>
  );
};

export default CartWidget;
