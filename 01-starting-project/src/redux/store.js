import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import showCart from "./HeaderCartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    showCart: showCart,
  },
});
