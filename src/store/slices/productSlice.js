import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const STATUSES = Object.freeze({
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error',
});
const initialState = {
  data: [],
  status: STATUSES.IDLE,
};
export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = STATUSES.IDLE;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

export default productSlice.reducer;

// Thunk
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const responseData = await response.json();
  return responseData;
});
