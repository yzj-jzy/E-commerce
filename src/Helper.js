export const isInCart = (productId,cartItems) =>{
    return (cartItems.find(item => item.id === productId));
}
export const countAndPrice = (cartItems) =>{
    return ({
        count: cartItems.reduce((total,product)=> total+product.quantity,0),
        totalPrice: cartItems.reduce((total,product)=> total+product.quantity*product.price,0)
    })
}

const API = 'http://localhost:8080';

export async function fetchFromAPI(endpoint, opts) {
    const { method, body } = { method: 'POST', body: null, ...opts };
    const res = await fetch(`${API}/${endpoint}`, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
        'Content-Type': 'application/json'
        },
    });

    if (res.status === 200) {
        return res.json();
      } else {
          alert(res.statusText);
        return 'bad request';
      }
}