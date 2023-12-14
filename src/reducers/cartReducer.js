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
                        ? { ...product, qty: product.qty + action.payload.qty }
                        : product
                );
            } else {
                // If not, add the new product with quantity 1
                return [...state, { ...action.payload, qty: action.payload.qty }];
            }

        case 'REMOVE_FROM_CART':
            return state.filter(product => product.Name !== action.payload);

        case 'UPDATE_QUANTITY':
            return state.map(product =>
                product.Name === action.payload.productName
                    ? { ...product, qty: action.payload.quantity }
                    : product
            );

        default:
            return state;
    }
};

export default cartReducer;
