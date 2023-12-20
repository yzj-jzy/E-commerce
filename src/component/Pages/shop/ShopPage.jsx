import ProductCollection from '../../product-collection/ProductCollection';
import Layout from '../../layout/Layout';
import './Shop.styles.scss';

 const ShopPage = ()=>{
    return(
        <Layout>
            <div className='shop-page-container'>
                <ProductCollection />
            </div>
        </Layout>
    )
 }

 export default ShopPage;

