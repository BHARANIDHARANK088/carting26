// 44
import { createSlice } from "@reduxjs/toolkit";

// 45
const cartSlice = createSlice({
    "name": "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity = state.quantity + 1;
            state.products.push(action.payload);
            state.total = state.total + action.payload.price * action.payload.quantity;
        }
    }
})

// 46
export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;