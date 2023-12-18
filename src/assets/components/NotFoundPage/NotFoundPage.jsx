import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  const [catImage, setCatImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search')
      .then((response) => {
        setCatImage(response.data[0].url);
        setLoading(false);
      })
      .catch((error) => {
        console.error('No se pudo cargar la imagen', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
      <Typography variant="h1" component="div" gutterBottom>
        404 Not Found ❌
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Oops! La página que estás buscando no existe. 😣
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Te recomendamos que vuelvas a la página principal. 🏠
        </Link>
      </Typography>
      <Typography variant="h6" component="h6" gutterBottom style={{ marginTop: '3rem' }}>
        Y sino, no te preocupes, aca tenes un gatito para que te sientas mejor. 🐱
      </Typography>
      {catImage && <img src={catImage} alt="Gatito" style={{ maxWidth: '500px', maxHeight: '500px', paddingTop: '1rem' }} />}
    </Box>
  );
}

export default NotFoundPage;
