import { createSlice } from "@reduxjs/toolkit";
// Async Thunks
import getAllProducts from "./asyncThunks/getAllProducts";

// initial state
initialState = {
  products: [],
  cart: [],
  errorMessage: null,
  //possible values: [ idle, loading, success, failed ]
  productsStatus: "idle",
  getAllProductsStatus: "idle",
};

// product's slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.getAllProductsStatus = "loading";
        state.errorMessage = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload?.products || [];
        state.getAllProductsStatus = "success";
        state.errorMessage = null;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.getAllProductsStatus = "failed";
        state.errorMessage = action.error.message;
      });
  },
});

export const productReducer = productSlice.reducer;
