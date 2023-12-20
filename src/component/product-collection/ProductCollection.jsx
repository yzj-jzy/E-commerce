import React,{ useContext } from 'react';
import {ProductContext} from '../../context/product-context';
import Product from '../product/Product';
import './ProductCollection.scss';

const ProductCollection = ()=>{
    const {products} = useContext(ProductContext);
    const productItems = products.map((product)=>(
        <Product {...product} key={product.id}/>
    ))

    console.log(productItems);
    return(
        <div className='product-collection-container'>
            <div className='featured-collection'> FEATURED COLLECTION </div>
            <div className='product-item'> 
                {productItems}
            </div>
        </div>  
        
    )
}

export default ProductCollection;