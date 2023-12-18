export const productos = [
  { id: 1, title: 'Remera', price: '6000.00', image: 'https://montinkantigo.s3.amazonaws.com/data/camisas/react-e-foda-59cbd9c26b0e0.jpg', description: 'Remera de algodón de alta calidad', stock: 10, category: 'ropa' },
  { id: 2, title: 'Short', price: '15000.00', image: 'https://media.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/s/h/short-de-argentina-adidas-alternativo-ni_o-violeta-100020hf1487001-1.jpg', description: 'Short deportivo cómodo y duradero', stock: 20, category: 'ropa' },
  { id: 3, title: 'Medias', price: '3000.00', image: 'https://rossettiar.vtexassets.com/arquivos/ids/203531-800-auto?v=638013851762730000&width=800&height=auto&aspect=true', description: 'Medias de algodón suave', stock: 0, category: 'ropa' },
  { id: 4, title: 'Botines', price: '20000.00', image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/164021424a5c46058057ad7c0079d386_9366/Botines_X_Speedflow_Messi.3_Terreno_Firme_Dorado_GW7420_01_standard.jpg', description: 'Botines de fútbol de alto rendimiento', stock: 5, discount: 20, category: 'calzado' },
  { id: 5, title: 'Camiseta titular', price: '60000.00', image: 'https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/49/eb/49eb4c6c6245b8e8662aa2e166e102fa14f2e3f6.jfif', description: 'Camiseta oficial de la selección argentina', stock: 15, category: 'ropa' },
  { id: 6, title: 'Gorra', price: '5000.00', image: 'https://ih1.redbubble.net/image.3363877304.1692/ssrco,baseball_cap,mens,000000:44f0b734a5,front_three_quarter,tall_portrait,750x1000-bg,f8f8f8.jpg', description: 'Gorra de algodón', stock: 7, category: 'accesorios' },
  { id: 7, title: 'Mochila', price: '8000.00', image: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf86fa191/products/JS_TYP7-54M/JS_TYP7-54M-1.JPG', description: 'Mochila resistente', stock: 8, category: 'accesorios' },
  { id: 8, title: 'Reloj', price: '15000.00', image: 'https://www.cdmarket.com.ar/image/0/600_750-1920_1080-81113_0011(1)jpg', description: 'Reloj deportivo', stock: 4, category: 'accesorios' },
  { id: 9, title: 'Zapatillas', price: '18000.00', image: 'https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwadb24e14/products/NI_554724-092/NI_554724-092-1.JPG', description: 'Zapatillas para correr', stock: 10, category: 'calzado' },
  { id: 10, title: 'Pantalón', price: '12000.00', image: 'https://ss251.liverpool.com.mx/xl/1064184297.jpg', description: 'Pantalón de entrenamiento', stock: 6, category: 'ropa' },
];

export const emojis = ['🛒', '🛍️', '🎁', '🎈', '🎉', '👕', '👖', '👗', '👠', '👡', '👢', '👞', '👟', '👒', '👜', '👛', '👓', '🕶️', '🧣', '🧤', '🧥', '🧦', '👔', '👚', '👘', '👝', '🎩', '👑', '👒', '🎒', '👞', '👟', '👠', '👡', '👢', '👑', '👒', '🎩', '🎓', '🧢', '⛑️', '💼', '👜', '👝', '👛', '👓', '🕶️', '🥽', '🥼', '👔', '👕', '👖', '🧣', '🧤', '🧥', '🧦', '👗', '👘', '💄', '💍', '💼'];

export const getRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return Promise.resolve(emojis[randomIndex]);
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    const productoFiltrado = productos.find((producto) => producto.id === parseInt(id));
    resolve(productoFiltrado);
  }, 2000);
};

export const getProducts = () => {
  return new Promise((resolve) => {
    resolve(productos);
  }, 2000);
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    const productosFiltrados = productos.filter((producto) => producto.category === category);
    resolve(productosFiltrados);
  }, 2000);
};
