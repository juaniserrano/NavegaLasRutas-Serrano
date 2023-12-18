import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const ItemDetail = ({ id, title, price, image, addToCart, discount, description, stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, p: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 2 }}>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {stock === 0 ? <span style={{ color: 'red' }}>Sin stock </span> : null}
          {discount ? <span style={{ textDecoration: 'line-through', color: 'red' }}>${price}</span> : <span>${price}</span>}
          {discount ? <span> ${price - (price * discount) / 100}</span> : null}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button variant="contained" onClick={handleDecrease} disabled={stock === 0}>
            -
          </Button>
          <Typography>{quantity}</Typography>
          <Button variant="contained" onClick={handleIncrease} disabled={stock === 0}>
            +
          </Button>
        </Box>
        <Button variant="contained" sx={{ mt: 2, width: 200 }} onClick={() => addToCart(quantity)} disabled={stock === 0}>
          Agregar al carrito
        </Button>
      </Box>
      <img src={image} alt={title} style={{ height: '600px', objectFit: 'cover' }} />
    </Box>
  );
};

export default ItemDetail;
