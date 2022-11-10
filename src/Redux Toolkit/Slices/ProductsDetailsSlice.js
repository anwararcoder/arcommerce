import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsId =  createAsyncThunk('productsDetailsSlice/fetchProductsId', async (id) => {
    const res = await fetch(`http://localhost:9000/products/${id}`);
    const data = await res.json();
    return data
});

const productsDetailsSlice = createSlice({
    initialState : {},
    name: 'productsDetailsSlice',
    reducers: {}, // Actions For Slice
    extraReducers: (builder) => {
        builder.addCase( fetchProductsId.fulfilled, (state, action) => {
            return action.payload
        }) // Add Cases
    }
})

export const {} = productsDetailsSlice.actions;

export default productsDetailsSlice.reducer;