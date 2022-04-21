import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';
export default combineReducers({
  cart: cartReducer,
  product: productReducer,
});
