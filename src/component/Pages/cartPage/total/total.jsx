// total.component.jsx
import { CartContext } from '../../../../context/cart-context';
import { useContext } from 'react';
import './total.styles.scss';
import { countAndPrice } from '../../../../Helper';
import { useNavigate } from 'react-router-dom';

const Total = () => {
  const { cartItem} = useContext(CartContext);
  const {count,totalPrice} = countAndPrice(cartItem);
  const navigate = useNavigate();
  const redirectToCheckout = ()=>{
    navigate(`/checkout`);
  }
  return (
    <div className='total-container'>
            <h2>CHECKOUT SESSION</h2>
            <p>Item number: {count}</p>
            <p>Total price: {totalPrice}</p>
        <div className='checkout'>
            <button 
            className='button is-black' 
            onClick={redirectToCheckout}
            >CHECKOUT</button>
        </div>
    </div>
  );
}

export default Total;
