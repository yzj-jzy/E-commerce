import { Routes,Route } from 'react-router-dom';
import './App.scss';
import HomePage from './component/HomePage';
import NotFoundPage from './component/Not-found';
import ShopPage from './component/Pages/shop/ShopPage';
import SingleProduct from './component/single-product/singleProduct';
import CartPage from './component/Pages/cartPage/cartPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/Shop' element={<ShopPage />} />
      <Route path='/product/:id' element={<SingleProduct/>} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    
  );
}

export default App;
