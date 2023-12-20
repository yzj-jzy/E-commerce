import React,{ useContext,useEffect, useState }   from 'react';
import {ProductContext} from '../../context/product-context';
import {CartContext} from '../../context/cart-context';
import { useNavigate,useParams } from 'react-router-dom';
import './singleProduct.styles.scss';
import Layout from '../layout/Layout';

const SingleProduct = (props)=>{

    const {products} = useContext(ProductContext);
    const productID = useParams()['id'];
    const [product,setProduct] = useState(null);
    const navigate = useNavigate(); 
    const {addProduct,cartItem}  = useContext(CartContext);

    useEffect(
        ()=>{ 
            const product = products.find( product => Number(product.id) === Number(productID) );
            if(!product){
                return navigate('/Shop');
            }
            setProduct(product);
            const {id,title,description,imageUrl,price} = product;
        }, [productID,products]
    )
    if (!product) { return null };
    const { imageUrl, title, price, description } = product;
    const toCartRoute = () => {navigate('/cart');};

    return(
        <Layout>
            <div className='single-product-container'>
                <div className='single-product-image'>
                    <img src={imageUrl}/> 
                </div>

                <div className='single-product-main'>
                    <div className='name-price'>
                        <h3> {title} </h3>
                        <p>  {price}  </p>
                    </div>
                    <div className='add-to-cart-btn'>
                        <button className='button is-white nomad-btn' onClick={()=>{addProduct(product)}}> ADD TO CART </button>
                    </div>
                    <div className='process-btn'>
                        <button className='button is-black nomad-btn' onClick={toCartRoute}>   PROCEED TO CHECKOUT </button>
                    </div>
                    <div className='single-product-description'>
                    <p>
                        {description}
                    </p>
                </div>
                </div>

            </div>
        </Layout>
    )
}

export default SingleProduct;