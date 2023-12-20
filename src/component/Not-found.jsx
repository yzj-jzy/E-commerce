import Layout from './layout/Layout';

 const NotFoundPage = ()=>{
    const style = {
        fontWeight: 'bold',
        textAlign: 'center',
    }
    return(
        <Layout>
            <p style={style}> Unfortunately we can't find that page </p>
        </Layout>
    )
 }

 export default NotFoundPage;