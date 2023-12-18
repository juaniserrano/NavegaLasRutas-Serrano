import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { emojis, getRandomEmoji } from '../../../data/asyncMock';

function LoadingSpinner({ loadingText }) {
  const [emoji, setEmoji] = useState(emojis[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomEmoji().then((res) => {
        setEmoji(res);
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" height="100vh">
      <CircularProgress />
      <Typography variant="h5" component="h4" gutterBottom style={{ marginTop: '20px' }}>
        Cargando {loadingText}... {emoji}
      </Typography>
    </Box>
  );
}

export default LoadingSpinner;
