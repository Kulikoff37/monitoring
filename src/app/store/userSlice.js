import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
      userName: null,
      isAuth: false
  },
  reducers: {
      setUser: (state, action) => {
        console.log(action);
        state.isAuth = action.payload.isAuth;
        state.userName = action.payload.userName;
      },
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;