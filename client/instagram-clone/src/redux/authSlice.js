import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, action) {
      state.user = action.payload.others;
    },
      login(state, action) {
        localStorage.clear()
        state.user = action.payload.user;
        state.token = action.payload.token
      },
      logout(state) {
          state.user = null
          state.token = null
          localStorage.clear()
    }
  },
});

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;
