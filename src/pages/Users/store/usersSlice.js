import { userApi } from '../api/userApi';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => await userApi.fetchUsers()
)

export const usersSlice = createSlice({
    name: "users",
    initialState: {
      users: [],
      error: ''
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = [...action.payload]
      })
    },
});

export const { 
  fetchUserSuccess,
  fetchUserError
} = usersSlice.actions;

export default usersSlice.reducer;