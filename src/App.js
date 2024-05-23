import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './pages/Routes'
import {  CartProvider } from './components/CartContext'
import Cart from './components/CartContext';
import { useState } from 'react';

function App() {
  const [quantity, setQuantity] = useState(0)


  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;


