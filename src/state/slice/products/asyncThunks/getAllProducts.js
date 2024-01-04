import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../axiosBase/api";

export default getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.error;
      if (errorMessage) {
        throw new Error(errorMessage);
      }
      throw error;
    }
  },
);
