import {CartContext} from '../../../../context/cart-context';
import './cartItem.styles.scss';
import {MinusCircleIcon,PlusCircleIcon,TrashIcon} from '../../../icons/index';
import { useContext } from 'react';

const CartItem = (props)=>{
    const {id,title,imageUrl,description,price,quantity} = props;
    const {cartItem,addProduct,removeProduct} = useContext(CartContext);
    return(
        <div className='cart-item-container'>
            <img src={imageUrl}></img>
            <div className='title-price'>
                <h3>{title}</h3>
                <p>${price*quantity}</p>
            </div>
            <div className='quantity'>
                quantity: {quantity}
                <div className='btn-container'> 
                    <button className='increase-btn'  onClick={()=>addProduct(props)} >
                        <PlusCircleIcon  width='20px'/>
                    </button>
                    <button className='decrease-btn' onClick={()=>removeProduct(props)} >
                        <MinusCircleIcon width='20px'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;