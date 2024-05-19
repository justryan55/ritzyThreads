import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Accessories from './pages/Accessories';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/women' element={<Women />} />
      <Route path='/men' element={<Men />} />
      <Route path='/kids' element={<Kids />} />
      <Route path='/accessories' element={<Accessories />} />

    </Routes>
  );
}

export default App;


