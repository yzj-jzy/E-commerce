import Hero from './hero/hero';
import MainSection from './main-section/main-section';
import ProductCollection from './product-collection/ProductCollection';
import Layout from './layout/Layout';

 const HomePage = ()=>{
    return(
        <Layout>
            <Hero />
            <MainSection />
            <ProductCollection />
        </Layout>
    )
 }

 export default HomePage;

