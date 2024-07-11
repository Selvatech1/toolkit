import { createSlice } from '@reduxjs/toolkit';
import products from '../../product.json';

const initialState = products.products;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectAllProducts = (state) => state.products;
export default productsSlice.reducer;
