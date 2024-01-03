const initialState = {
    cart: [
        {name: "Book About Amazon", description: "amazon book", amount: 100 },
        {name: "Book about JS", description: "js book", amount: 250 }
    ]
};

// state is the current state of the store
// action: type, payload

// { store: { value: 1} }
// { type: INCREMENT, payload: 1 }
// { store: { value: 2 }}

// // { store: {
//     cart: [
//         {name: "Book About Amazon", description: "amazon book", amount: 100 },
//         {name: "Book about JS", description: "js book", amount: 250 }
//     ]
// ] }}
// { type: ADD_ITEM, payload: { name: "Book Name", description: "Book description", amount: 300 } }
//
// { type: REMOVE_ITEM, payload: { name: "Book Name" } }
// 
// {
//     cart: [
//         {name: "Book About Amazon", description: "amazon book", amount: 100 },
//         {name: "Book about JS", description: "js book", amount: 250 },
//         { name: "Book Name", description: "Book description", amount: 300 }
//     ]
// };

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    case "ADD_ITEM":
        updatedCart = state.cart.push(action.newItem);
        
        return {
            cart: updatedCart
        };

    case "LIST_ITEMS":
        // will be fetched from http
        return { cart: state.cart };
        
    default:
        return { cart: state.cart };
    }
};
