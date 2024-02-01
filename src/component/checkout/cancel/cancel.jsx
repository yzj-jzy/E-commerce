import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';

const Success = ()=>{
    const navigate = useNavigate();
    const directShop = ()=>{
        navigate(`/shop`);
    }

    return(   
       <Layout>
            <div className='checkout'>
                <h1>Payment failed</h1>
                <p>Payment was not successful</p>
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