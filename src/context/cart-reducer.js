import { isInCart } from "../Helper";

const cartReducer = (state,action)=>{
    switch(action.type){
        case 'ADD':
            if(isInCart(action.payload.id,state.cartItem)){
                const increaseIndex = state.cartItem.findIndex(item =>item.id===action.payload.id);
                state.cartItem[increaseIndex].quantity ++;
                localStorage.setItem('cart',JSON.stringify(state));
                return({...state });
            }else{
                state.cartItem.push({
                    ...action.payload,
                    quantity:1
                })
                localStorage.setItem('cart',JSON.stringify(state));
                return({...state });
            }
        case 'REMOVE':
            const Index = state.cartItem.findIndex(item =>item.id===action.payload.id);
            if(state.cartItem[Index].quantity===1){
                localStorage.setItem('cart',JSON.stringify(state));
                return({
                    cartItem: state.cartItem.filter(item =>item.id!==action.payload.id)
                });
            }else{
                state.cartItem[Index].quantity --;
                localStorage.setItem('cart',JSON.stringify(state));
                return{...state};
            }
        case 'CLEAR':
            const newState = {cartItem: []};
            localStorage.setItem('cart', JSON.stringify(newState));
            break;
            return newState;
        default:
            return state;
    }
}

export default cartReducer;