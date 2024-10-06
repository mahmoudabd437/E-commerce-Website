import { createSlice } from "@reduxjs/toolkit";

const initialCartState = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      console.log("Adding product with id:", action.payload._id);

      const foundProduct = state.find(
        (product) => product._id === action.payload._id
      );
      if (foundProduct) {
        foundProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload._id);
    },
    updateQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
