import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import Layout from '../layout/Layout';
import { countAndPrice } from '../../Helper';
import { useStripe } from '@stripe/react-stripe-js';
import './checkout.styles.scss';

const Checkout = ()=>{
    const {cartItem} = useContext(CartContext);
    const {count,totalPrice} = countAndPrice(cartItem);
    const stripe = useStripe();
    const [email,setEmail] = useState('');

    async function handleGuestCheckout(e) {
      e.preventDefault();
  
      const line_items = cartItem.map(item => {
          return {
              quantity: count,
              price_data: {
                  currency: 'usd',
                  unit_amount: item.price * 100,
                  product_data: {
                      name: item.title,
                      description: item.description,
                      images: [item.imageUrl],
                  },
              },
          };
      });
  
      const endpoint = 'https://deft-taffy-a0c825.netlify.app/.netlify/functions/api/add ';

      const requestData = {
          line_items: line_items,
          customer_email: email,
      };

      console.log(requestData);
  
      try {
          const response = await fetch(endpoint, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestData),
          });

          const responseData = await response.json();
          const { sessionId } = responseData;
          
        const { error } = await stripe.redirectToCheckout({
          sessionId
        });
          
          
      } catch (error) {
          console.error('Fetch error:', error.message);
          throw error;
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