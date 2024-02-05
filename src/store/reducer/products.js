import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    selectedId: null
}

const products = createSlice({
    name:'product',
    initialState,
    reducers : {
        getProducts(state, action){
            state.data = action.payload;
        },
        fetchSelectedProducts(state, action){
            state.selectedId = action.payload;
        },
    }
})



export const { getProducts, fetchSelectedProducts } = products.actions;
export default products.reducer;