import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, image, addToCart, stock, discount }) => {
  return (
    <Box component={Link} to={`/product/${id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
      <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
        <CardMedia component="img" height="400" image={image} alt={title} />
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {stock === 0 ? <span style={{ color: 'red' }}>Sin stock </span> : null}
            {discount ? <span style={{ textDecoration: 'line-through', color: 'red' }}>${price}</span> : <span>${price}</span>}
            {discount ? <span> ${price - (price * discount) / 100}</span> : null}
          </Typography>
          <Button variant="contained" sx={{ mt: 2, width: 200 }} onClick={addToCart} disabled={stock === 0}>
            Agregar al carrito
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Item;
