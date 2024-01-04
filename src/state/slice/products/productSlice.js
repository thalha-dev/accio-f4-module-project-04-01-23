import { createSlice } from "@reduxjs/toolkit";
// Async Thunks
import { getAllProducts } from "./asyncThunks/getAllProducts";

// initial state
const initialState = {
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
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      const exists = state.cart.find((o) => o.id === id);
      if (!exists) {
        const prod = state.products.find((o) => o.id === id);
        state.cart.push(prod);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((o) => o.id !== id);
    },
    checkOut: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.getAllProductsStatus = "loading";
        state.productsStatus = "loading";
        state.errorMessage = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload?.products || [];
        state.getAllProductsStatus = "success";
        state.productsStatus = "success";
        state.errorMessage = null;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.getAllProductsStatus = "failed";
        state.productsStatus = "failed";
        state.errorMessage = action.error.message;
      });
  },
});

export const productsCB = (state) => state.product.products;
export const cartCB = (state) => state.product.cart;
export const productsStatusCB = (state) => state.product.productsStatus;
export const getAllProductsStatusCB = (state) =>
  state.product.getAllProductsStatus;

export const { removeFromCart, addToCart, checkOut } = productSlice.actions;

export const productReducer = productSlice.reducer;
