import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import { cartSlice } from "./slices/Cart-slice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice.reducer,
  },
});
