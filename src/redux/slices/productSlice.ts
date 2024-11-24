import { Action, ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataStatus } from "../../types/redux"

import { IProduct } from "../../types/product";
import {productState} from "../../types/productState";
import { useSelector } from "react-redux";
// import { socket } from "../../App";

const port = import.meta.env.VITE_PORT

const initialData: productState = {
    error: null,
    status: dataStatus.IDLE,
    data: []
}

const fetchAllProducts = createAsyncThunk('products/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:${port}/api/products`)
            const data = await response.json()
            return data.data
        } catch (error) {
            console.log(error);
            
            return thunkAPI.rejectWithValue('something went wrong')
        }
    })

const fetchByCategory = createAsyncThunk('products/fetchByCategory',
    async (category: string, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:${port}/api/products/${category}`)
            if (!response.ok) {
                return thunkAPI.rejectWithValue("Couldn't get products Please try again")
            }
            const data = await response.json()
            return data.data
        } catch (error) {
          
            return thunkAPI.rejectWithValue('something went wrong')
        }
    })


const productSlice = createSlice({
    name: 'products',
    initialState: initialData,
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<productState>) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.status = dataStatus.LOADING
            state.error = null
        }).addCase(fetchAllProducts.fulfilled, (state, action) => {
            
            state.data = action.payload as unknown as IProduct[]
            console.log(state.data);
            
            state.error = null
            state.status = dataStatus.SUCCESS
        }).addCase(fetchAllProducts.rejected, (state, action) => {
            state.error = action.error as string
            console.log(state.error);
            
            state.data = []
            state.status = dataStatus.FAILED
        }).addCase(fetchByCategory.fulfilled, (state) => {
            state.error = null
            state.status = dataStatus.SUCCESS
        }).addCase(fetchByCategory.rejected, (state, action) => {
            state.error = action.error as string
            state.status = dataStatus.FAILED
        }).addCase(fetchByCategory.pending, (state) => {
            state.error = null
            state.status = dataStatus.LOADING
        })
    }
})
export const { } = productSlice.actions
export { fetchAllProducts, fetchByCategory }
export default productSlice