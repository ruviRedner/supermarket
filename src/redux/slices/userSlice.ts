import {
  Action,
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { dataStatus } from "../../types/redux";
import { IUser } from "../../types/user";
import userState from "../../types/userState";

const port = import.meta.env.VITE_PORT;
const initialData: userState = {
  error: null,
  status: dataStatus.IDLE,
  user: null,
  role: undefined,
};

const fetchLogin = createAsyncThunk(
  "user/login",
  async (user: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:${port}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        return thunkAPI.rejectWithValue("Couldn't login Please try again");
        
      }
      const data = await response.json();
      
      localStorage.setItem("token", data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const fetchRegister = createAsyncThunk(
  "user/register",
  async (user: { username: string; password: string, creditCard: string }, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:${port}/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        return thunkAPI.rejectWithValue("Couldn't register Please try again");
      }
      const data = await response.json();

      return data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

// Async thunk for checking auth status
const checkAuth = createAsyncThunk(
  "user/verify",
  async (_, thunkAPI) => {
    const Token = localStorage.getItem("token");
    if (!Token) {
      return thunkAPI.rejectWithValue("No token found");
    }
    try {
      const response = await fetch(
        `http://localhost:${port}/api/users/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: Token?Token as string:"",
          },
        }
      );
    // console.log(response);
      // if (!response.ok) {
      //   localStorage.removeItem("token");
      //   return thunkAPI.rejectWithValue("Invalid token");
      // }

      const data = await response.json();
      console.log(data)
      localStorage.setItem("token", data.data.token);
      console.log(data.data.token)
      return data.data;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue("Auth check failed");
    }
  }
);
const getRecipit = createAsyncThunk(
  "user/getRecipit",
  async (id: string, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:${port}/api/users/history`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(id),
        }
      );
      if (!response.ok) {
        return thunkAPI.rejectWithValue("Couldn't get please try again ");
      }
      const result = await response.json();
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Sorry something went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = undefined;
      state.status = dataStatus.IDLE
      localStorage.removeItem("token");
    },
    returnStatusToIdle: (state) =>{
      state.status = dataStatus.IDLE
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<userState>) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = dataStatus.LOADING;
        state.error = null;
        state.user = null;

      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload as unknown as IUser;
        console.log(state.user);
        
        state.error = null;
        state.status = dataStatus.SUCCESS;
        console.log(state);
        
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.error = action.error as string;
        state.role = undefined;
        state.user = null;
        state.status = dataStatus.FAILED;
      })
      .addCase(fetchRegister.fulfilled, (state) => {
        state.user = null;
        state.error = null;
        state.status = dataStatus.SUCCESS;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.error = action.error as string;
        state.user = null;
        state.status = dataStatus.FAILED;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload as unknown as IUser;
        state.status = dataStatus.SUCCESS;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        // state.error = action.error as string;
        state.role = undefined;
        state.status = dataStatus.IDLE;
      })
      .addCase(checkAuth.pending, (state) => {
        state.status = dataStatus.LOADING;
        state.error = null;
      })
      .addCase(getRecipit.pending, (state) => {
        state.status = dataStatus.LOADING;
        state.error = null;
        state.user = null;
      })
      .addCase(getRecipit.rejected, (state, action) => {
        state.error = action.error as string;
        state.user = null;
        state.role = undefined;
        state.status = dataStatus.FAILED;
      })
      .addCase(getRecipit.fulfilled, (state, action) => {
        state.user.carts = action.payload;
        state.error = null;
        state.status = dataStatus.SUCCESS;
      });
  },
});

export const { logout, returnStatusToIdle } = userSlice.actions;
export { fetchLogin, fetchRegister, checkAuth };
export default userSlice;
