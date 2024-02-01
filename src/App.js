import { Routes,Route } from 'react-router-dom';
import './App.scss';
import HomePage from './component/HomePage';
import NotFoundPage from './component/Not-found';
import ShopPage from './component/Pages/shop/ShopPage';
import SingleProduct from './component/single-product/singleProduct';
import CartPage from './component/Pages/cartPage/cartPage';
import Checkout from './component/checkout/checkout';
import Success from './component/checkout/success/success';
import Cancel from './component/checkout/cancel/cancel';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/Shop' element={<ShopPage />} />
      <Route path='/product/:id' element={<SingleProduct/>} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/success' element={<Success />} />
      <Route path='/canceled' element={<Cancel />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    
  );
}

export default App;
