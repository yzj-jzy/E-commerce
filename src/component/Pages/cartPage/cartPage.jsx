import CartItem from './cart-Item/cartItem';
import Total from './total/total';
import Layout from '../../layout/Layout';
import {CartContext} from '../../../context/cart-context';
import { useContext } from 'react';
import './cartPage.styles.scss';

const CartPage = ()=>{
    const {cartItem}  = useContext(CartContext);
    console.log('item selected so far: '+cartItem);

    const cartItemTAG = cartItem.map(
        (cartItem) => <CartItem {...cartItem}/>
    )
    return(
        <Layout>
            <div className='cart-page-container'>
                <h2> CART</h2>
                
                {cartItem.length === 0 && <div className='empty-cart'> Your Cart Is Empty</div>}
                
                {
                    cartItem.length !== 0 &&                 
                    <div className='item-total-container'>
                        <div className='items-container'>
                            {
                                cartItemTAG
                            }
                        </div>
                        <Total/>
                    </div>
                }

            </div>
        </Layout>
    )
}

export default CartPage;