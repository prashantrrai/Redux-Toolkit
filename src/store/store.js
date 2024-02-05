import { configureStore } from "@reduxjs/toolkit";
import products from "./reducer/products";
import customers from "./reducer/customers";


const store = configureStore({
    reducer:{
        product: products,
        customer: customers
    }
})

export default store;