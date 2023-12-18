import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { emojis, getProductById, getRandomEmoji } from '../../../data/asyncMock';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import ItemDetail from '../ItemDetail/ItemDetail';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function ItemDetailContainer({ addToCart }) {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((res) => {
      setTimeout(() => {
        setProduct(res);
        setLoading(false);
      }, 1500);
    });
  }, [id]);

  if (loading) {
    return <LoadingSpinner loadingText={'producto'} />;
  }

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '90vh' }}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ItemDetail {...product} addToCart={addToCart} />
      </Grid>
    </Grid>
  );
}

export default ItemDetailContainer;
