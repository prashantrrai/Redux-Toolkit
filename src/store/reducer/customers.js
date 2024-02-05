import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}


const customers = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        getCustomers(state, action){
            state.data = action.payload;
        },
    }
})

export const {getProducts} = customers.actions;
export default customers.reducer;