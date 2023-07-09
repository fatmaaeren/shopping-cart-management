import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    status: null,
    error: null,
    loading: false,
}


export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/products"
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );

const productsSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.status = "pending"
                state.loading = true;
                state.error = null;
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.status = "rejected"
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;

