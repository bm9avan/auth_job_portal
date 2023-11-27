import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { a: false },
  reducers: {
    signUp(state) {
      state.a = true;
    },
    login(state) {
      state.a = true;
    },
    logout(state) {
      state.a = false;
    },
  },
});

const store = configureStore({ reducer: authSlice.reducer });
export const authActions = authSlice.actions;
export default store