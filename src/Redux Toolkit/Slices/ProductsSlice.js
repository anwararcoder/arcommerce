import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts =  createAsyncThunk('productsSlice/fetchProducts', async () => {
    const res = await fetch('http://localhost:9000/products');
    const data = await res.json();
    return data
});

// export const addItemProducts =  createAsyncThunk('productsSlice/addItemProducts', async (productName, imgUrl, category, price, shortDesc, description) => {
//     fetch('http://localhost:9000/products', {
//         method: 'POST', // or 'PUT'
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             productName,
//             imgUrl,
//             category,
//             price,
//             shortDesc,
//             description,
//         }),
//     })
//     .then((response) => response.json())
//     .then((data) => {
//     })
// });

// export const deleteItemProducts =  createAsyncThunk('productsSlice/deleteItemProducts', async (id, allProduct) => {
//     fetch(`http://localhost:9000/products/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//           }
//     })
//     .then( (res) => res.json() )
//     .then( (data) => allProduct )
// });

const productsSlice = createSlice({
    initialState : [],
    name: 'productsSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase( fetchProducts.fulfilled, (state, action) => {
            return action.payload
        })
        // .addCase( addItemProducts.fulfilled, (state, action) => {
        //     return action.payload
        // })
        // .addCase( deleteItemProducts.fulfilled, (state, action) => {
        //     return action.payload
        // })
    }
})

export const {} = productsSlice.actions;

export default productsSlice.reducer;