import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const { id } = action.payload;
      const duplicateProduct = state.find(obj => obj.id === id);
      if (duplicateProduct) {
        return state;
      } else {
        state.push(action.payload);
      }
    },
    remove: (state, action) => {
      return state.filter(cart => cart.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
