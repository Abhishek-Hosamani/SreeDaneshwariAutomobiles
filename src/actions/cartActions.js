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

export const updateQuantity = (productName, quantity) => {
    return {
        type: 'UPDATE_QUANTITY',
        payload: { productName, quantity }
    };
};