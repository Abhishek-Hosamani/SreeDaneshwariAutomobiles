export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    };
};


export const removeFromCart = (productName) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: productName
    };
};