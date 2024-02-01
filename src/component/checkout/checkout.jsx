import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import { countAndPrice,fetchFromAPI } from '../../Helper';
import { useStripe } from '@stripe/react-stripe-js';
import './checkout.styles.scss';

const Checkout = ()=>{
    const {cartItem} = useContext(CartContext);
    const {count,totalPrice} = countAndPrice(cartItem);
    const stripe = useStripe();
    const [email,setEmail] = useState('');
    const navigate = useNavigate(); 

    const handleGuestCheckout = async (e) => {
        e.preventDefault();
        const line_items = cartItem.map(item => {
          return {
            quantity: count,
            price_data: {
              currency: 'usd',
              unit_amount: item.price * 100, // amount is in cents
              product_data: {
                name: item.title,
                description: item.description,
                images: [item.imageUrl], 
              }
            }
          }
        });
        
    
        const response = await fetchFromAPI('createCheckoutSession', {
          body: { line_items, customer_email: email },
        });
    
        const { sessionId } = response;
        if(sessionId == 'bad request'){
            return;
        }
        const { error } = await stripe.redirectToCheckout({
          sessionId
        });
        
        if (error) {
          console.log(error);
        }
      }

    return(   
       <Layout>
            <div className='checkout'>

                <h2>Checkout Summary</h2>
                <h3>{`Total Items: ${count}`}</h3>
                <h4>{`Amount to Pay: $${totalPrice}`}</h4>

                <form onSubmit={handleGuestCheckout}>
                    <div>
                        <input 
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Email'
                        value={email}
                        className='nomad-input'
                        />
                    </div>
                    <div className='submit-btn'>
                        <button type='submit' className='button is-black nomad-btn submit'>
                        Checkout
                        </button>
                    </div>
                </form>

            </div>
      </Layout>
      )
}

export default Checkout;