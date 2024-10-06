import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const res = await fetch("https://api.foreverbuy.in/api/product/list");
    const data = await res.json();
    return data;
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload.products;
    });
  },
});

export default productSlice.reducer;
