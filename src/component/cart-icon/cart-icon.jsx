import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import shoppingBag from '../../assets/shopping-bag.png';
import './cart-icon.styles.scss';
import { CartContext} from '../../context/cart-context';
import { countAndPrice } from '../../Helper';

const CartIcon = () =>{
    const {cartItem} = useContext(CartContext);
    const {count} = countAndPrice(cartItem);
    const navigate = useNavigate();
    const toCartRoute = () => {navigate('/cart');}
    return(
        <div className='cartIcon-container'>
            <img src={shoppingBag}  alt='shopping-cart-icon' onClick={toCartRoute}/>
            <span className='cart-count'>  {count} </span>
        </div>
    )
}

export default CartIcon;