import SHOP_DATA from '../shop/index';
import { createContext, useState } from 'react';

export const ProductContext = createContext();
const ProductContextProvider = ({children})=>{
    const [products] = useState(SHOP_DATA);
    return(
        <ProductContext.Provider value={{products}}>
        {children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;