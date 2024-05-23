import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './pages/Routes'
import {  CartProvider } from './components/CartContext'

function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;


