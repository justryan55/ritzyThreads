import React from "react";
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Women from '../pages/Women';
import Men from '../pages/Men';
import Accessories from '../pages/Accessories';
import Clothing from '../pages/Clothing';
import Miscellaneous from '../pages/Miscellaneous';
import ProductDetails from '../pages/ProductDetails';
import Layout from '../components/Layout';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { 
          path: '/', 
          element: <Home /> 
        },
        { 
          path: 'shop', 
          element: <Shop /> 
        },
        { 
          path: 'cart', 
          element: <Cart /> 
        },
        { 
          path: 'women', 
          element: <Women /> 
        },
        { 
          path: 'men', 
          element: <Men /> 
        },
        { 
          path: 'accessories', 
          element: <Accessories /> 
        },
        { 
          path: 'clothing', 
          element: <Clothing /> 
        },
        { 
          path: 'miscellaneous', 
          element: <Miscellaneous /> 
        },
        { 
          path: 'product/:itemId', 
          element: <ProductDetails /> 
        },
        {
            path: '*',
            element: <Navigate to='/' />
        }
      ],
    },
  ]);
  
export default router  