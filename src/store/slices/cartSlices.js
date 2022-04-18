import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const { id } = action.payload;
      const duplicateProduct = state.cart.find(obj => obj.id === id);
      if (duplicateProduct) {
        return state.cart;
      } else {
        state.cart.push(action.payload);
      }
    },
    remove: (state, action) => {
      const updatedCart = state.cart.filter(cart => cart.id !== action.payload);
      state.cart = updatedCart;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
