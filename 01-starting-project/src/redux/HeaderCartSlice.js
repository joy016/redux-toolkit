import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  notifications: null,
};

export const showCartSlice = createSlice({
  name: "showCart",
  initialState,
  reducers: {
    isCartShown: (state) => {
      state.showCart = !state.showCart;
    },
    notifications: (state, action) => {
      state.notifications = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { isCartShown, notifications } = showCartSlice.actions;
export default showCartSlice.reducer;
