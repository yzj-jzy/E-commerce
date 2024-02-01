import cartReducer  from "./cart-reducer";
import { createContext,useReducer } from "react";

export const CartContext = createContext();
const CartContextProvider = ({children}) =>{
    const initial = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): {cartItem:[]};
    const [cartState,dispatch] = useReducer(cartReducer,initial);

    const addProduct = (product) => dispatch({type:'ADD', payload:product});
    const removeProduct = (product) => dispatch({type:'REMOVE', payload:product});
    const clearProduct = () => dispatch({type:'CLEAR'});
    const contextValue = {
        ...cartState,
        addProduct,
        removeProduct,
        clearProduct
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
