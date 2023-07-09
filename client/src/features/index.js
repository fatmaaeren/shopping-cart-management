import { configureStore } from "@reduxjs/toolkit";
import productsSlice, {productsFetch }from "./productsSlice";
import { productsApi } from "./productApi";

const store = configureStore({
    reducer: {
        products: productsSlice,
        [productsApi.reducerPath]: productsApi.reducer,
    },
     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),

});

store.dispatch(productsFetch());


export default store;