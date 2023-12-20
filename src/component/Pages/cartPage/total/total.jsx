// total.component.jsx
import { CartContext } from '../../../../context/cart-context';
import { useContext } from 'react';
import './total.styles.scss';
import { countAndPrice } from '../../../../Helper';

const Total = () => {
  const { cartItem} = useContext(CartContext);
  const {count,totalPrice} = countAndPrice(cartItem);
  return (
    <div className='total-container'>
            <h2>CHECKOUT SESSION</h2>
            <p>Item number: {count}</p>
            <p>Total price: {totalPrice}</p>
        <div className='checkout'>
            <button 
            className='button is-black' 
            >CHECKOUT</button>
        </div>
    </div>
  );
}

export default Total;
