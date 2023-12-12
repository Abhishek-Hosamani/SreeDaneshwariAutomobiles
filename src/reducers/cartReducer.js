const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if the product already exists in the cart
            const existingProduct = state.find(product => product.Name === action.payload.Name);
            if (existingProduct) {
                // If exists, increment the quantity
                console.log(state);
                return state.map(product =>
                    product.Name === action.payload.Name
                        ? { ...product, quantity: product.quantity + action.payload.quantity }
                        : product
                );
            } else {
                // If not, add the new product with quantity 1
                return [...state, { ...action.payload, quantity: action.payload.quantity }];
            }

        case 'REMOVE_FROM_CART':
            return state.filter(product => product.Name !== action.payload);
        default:
            return state;
    }
};

export default cartReducer;
