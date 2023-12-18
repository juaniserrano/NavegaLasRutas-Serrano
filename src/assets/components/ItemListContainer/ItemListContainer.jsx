import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Item from '../Item/Item';
import { getProducts, getProductsByCategory } from '../../../data/asyncMock';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const ItemListContainer = ({ title, addToCart }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((products) => {
          setTimeout(() => {
            setItems(products);
            setLoading(false);
          }, 2000);
        })
        .catch((error) => console.log(error));
    } else {
      getProducts()
        .then((products) => {
          setTimeout(() => {
            setItems(products);
            setLoading(false);
          }, 2000);
        })
        .catch((error) => console.log(error));
    }
  }, [categoryId]);

  if (loading) {
    return <LoadingSpinner loadingText={categoryId ? categoryId : 'productos'} />;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h4" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Item {...item} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ItemListContainer;
