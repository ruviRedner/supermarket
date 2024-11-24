import {
    Action,
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  import { dataStatus } from "../../types/redux";
  import { IUser } from "../../types/user";
  import userState from "../../types/userState";
import { cartState } from "../../types/cartState";
import { ICart } from "../../types/cart";
  
  const port = import.meta.env.VITE_PORT;
  const initialData: cartState = {
    error: null,
    status: dataStatus.IDLE,
    data: null,
  };
  
  const checkout = createAsyncThunk(
    "cart/checkout",
    async (cart: ICart, thunkAPI) => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:${port}/api/cart/payment`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            'Authorization': token?token:"",
          },
          body: JSON.stringify(cart),
        });
        // if (!response.ok) {
        //   return thunkAPI.rejectWithValue("Couldn't checkout Please try again");
        // }
        const data = await response.json();
        return data.data;
      } catch (error) {
        return thunkAPI.rejectWithValue("something went wrong");
      }
    }
  )
  

  const cartSlice = createSlice({
    name: "cart",
    initialState: initialData,
    reducers: {
        addToCart: (state, action) => {
            state.data?.receipt.push(action.payload)
        }

    },
    extraReducers: (builder: ActionReducerMapBuilder<cartState>) => {
      builder.addCase(checkout.pending, (state) => {
        state.status = dataStatus.LOADING;
        state.error = null;
      });
      builder.addCase(checkout.fulfilled, (state, action) => {
        state.data = action.payload as unknown as ICart;
        state.error = null;
        state.status = dataStatus.SUCCESS;
      });
      builder.addCase(checkout.rejected, (state, action) => {
        state.error = action.error as string;
        state.data = null;
        state.status = dataStatus.FAILED;
      });
    },
  });
  
  export const { } = cartSlice.actions;
  export { checkout};
  export default cartSlice;
  