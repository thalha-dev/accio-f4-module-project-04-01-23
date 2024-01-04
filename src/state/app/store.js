import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../slice/products/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
