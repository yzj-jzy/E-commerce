import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../../context/cart-context';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';

const Success = ()=>{
    const {cartItem,clearProduct} = useContext(CartContext);
    const navigate = useNavigate();
    useEffect(()=>{
        clearProduct();
    },[]);
    const directShop = ()=>{
        navigate(`/shop`);
    }

    return(   
       <Layout>
        <div className='checkout'>
            <h1>Thank you for your order</h1>
                <p>We are currently processing your order and 
                will send you a confirmation email shortly
                </p>
            <div>
                <button className='button is-black nomad-btn submit' 
                    onClick={directShop}>
                    Continue Shopping
                </button>
            </div>
        </div>
      </Layout>
      )
}

export default Success;