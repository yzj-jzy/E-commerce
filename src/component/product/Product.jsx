import React,{useContext}  from "react";
import { useNavigate } from 'react-router-dom';
import './Product.scss';
import { CartContext} from '../../context/cart-context';
import {isInCart} from '../../Helper';


const Product = (props) =>{
    const {id,imageUrl,title,price} = props;
    const navigate = useNavigate(); 
    const {addProduct,cartItem}  = useContext(CartContext);
    console.log('item selected so far: '+cartItem);
    const handleImageClick = () => {
        navigate(`/product/${id}`);
    };
    return(
        <div className='product-container'>
            <div className='product-image' onClick={handleImageClick}>
                <img src={imageUrl} alt='shopping-cart-icon'></img>
            </div>
            <div className='product-main-section'>
                <h3> {title} </h3>
                <p> {price}</p>
                {
                    isInCart(id,cartItem) &&
                    <button className='button is-white nomad-btns' onClick={()=>addProduct(props)}> ADD More</button>
                } 
                {
                    !isInCart(id,cartItem) &&
                    <button className='button is-black nomad-btns' onClick={()=>addProduct(props)}> ADD TO CART</button>
                } 
            </div>
            
        </div>
    )
}

export default Product;