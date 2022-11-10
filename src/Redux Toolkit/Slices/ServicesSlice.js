import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchServices =  createAsyncThunk('servicesSlice/fetchServices', async () => {
    const res = await fetch('http://localhost:9000/serviceData');
    const data = await res.json();
    return data
});

const servicesSlice = createSlice({
    initialState : [],
    name: 'servicesSlice',
    reducers: {}, // Actions For Slice
    extraReducers: (builder) => {
        builder.addCase( fetchServices.fulfilled, (state, action) => {
            return action.payload
        });
    } // add Cases
})

export const {} = servicesSlice.actions;

export default servicesSlice.reducer;