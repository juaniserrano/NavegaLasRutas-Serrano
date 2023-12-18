import { Container } from '@mui/material';
import NavBar from './assets/components/NavBar/NavBar';
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import Footer from './assets/Footer/Footer';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './assets/components/ItemDetailContainer/ItemDetailContainer';
import Item from './assets/components/Item/Item';
import NotFoundPage from './assets/components/NotFoundPage/NotFoundPage';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (quantity = 1) => {
    quantity = Number(quantity);
    if (isNaN(quantity)) {
      quantity = 1;
    }
    setCartCount((count) => count + parseInt(quantity));
    Swal.fire({
      title: 'Producto agregado al carrito',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  };

  return (
    <>
      <Container disableGutters maxWidth={false}>
        <BrowserRouter>
          <NavBar cartCount={cartCount} />
          <Routes>
            <Route path="/" element={<ItemListContainer title="Productos" addToCart={addToCart} />} />
            <Route path={'/product/:id'} element={<ItemDetailContainer addToCart={addToCart} />} />
            <Route path={'/category/:categoryId'} element={<ItemListContainer title="Productos" addToCart={addToCart} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
