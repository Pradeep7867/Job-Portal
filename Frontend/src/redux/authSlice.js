import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  // Add other auth-related states if any
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    // Add other reducers like logout if necessary
  },
});

export const { setUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
