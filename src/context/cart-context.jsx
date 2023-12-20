import cartReducer  from "./cart-reducer";
import { createContext,useReducer } from "react";

export const CartContext = createContext();
const CartContextProvider = ({children}) =>{
    const initial = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): {cartItem:[]};
    const [cartState,dispatch] = useReducer(cartReducer,initial);

    const addProduct = (product) => dispatch({type:'ADD', payload:product});
    const removeProduct = (product) => dispatch({type:'REMOVE', payload:product});
    const contextValue = {
        ...cartState,
        addProduct,
        removeProduct
    }

    return(
        <CartContext.Provider value={contextValue}>
            {
                children
            }
        </CartContext.Provider>
    )
}

export default CartContextProvider;
