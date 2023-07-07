import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null
}

export const productsFetch = createAsyncThunk(
    "products/ProductsFetch",
    async () => {
        const response = await axios.get("http://localhost:5000/products");
        return response?.data;
    }
)

const productsSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;

