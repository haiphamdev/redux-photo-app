import userApi from "api/userApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getMe = createAsyncThunk(
  "user/getMe",
  async (params, thunkAPI) => {
    const currentUser = await userApi.getMe();
    return currentUser;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
  },
  reducers: {},
  extraReducers: {
    [getMe.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer: useReducer } = userSlice;
export default useReducer;
