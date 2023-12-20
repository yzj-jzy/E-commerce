export const isInCart = (productId,cartItems) =>{
    return (cartItems.find(item => item.id === productId));
}
export const countAndPrice = (cartItems) =>{
    return ({
        count: cartItems.reduce((total,product)=> total+product.quantity,0),
        totalPrice: cartItems.reduce((total,product)=> total+product.quantity*product.price,0)
    })
}