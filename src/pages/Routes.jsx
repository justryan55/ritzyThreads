import React from "react";
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Shop from './Shop';
import Women from './Women';
import Men from './Men';
import Accessories from './Accessories';
import Products from './Products';
import Miscellaneous from './Miscellaneous';
import ProductDetails from './ProductDetails';
import Layout from '../components/Layout';
import Kids from "./Kids";
import Sale from "./Sale";
import Purpose from "./Purpose";

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
          path: 'kids', 
          element: <Kids /> 
        },
        { 
          path: 'accessories', 
          element: <Accessories /> 
        },
        { 
          path: 'products', 
          element: <Products /> 
        },
        { 
          path: 'miscellaneous', 
          element: <Miscellaneous /> 
        },
        { 
          path: 'sale', 
          element: <Sale />
        },
        { 
          path: 'purpose', 
          element: <Purpose /> 
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