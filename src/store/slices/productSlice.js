import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: [],
};
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    add: (state, action) => {},
  },
});

export const { add } = productSlice.actions;

export default productSlice.reducer;
