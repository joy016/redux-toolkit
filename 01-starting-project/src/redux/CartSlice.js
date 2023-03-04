import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { notifications } from "./HeaderCartSlice";

const initialCartItemState = {
  cartItemCount: 0,
  cartItems: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartItemState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (item !== -1) {
        state.cartItems[item].quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.cartItemCount++;

      state.totalAmount += action.payload.price;
    },
    addSingleItem: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (cartItem) {
        cartItem.quantity++;
        state.cartItemCount++;
      }
    },
    removeSingleItem: (state, action) => {
      const item = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (item !== -1) {
        state.cartItems[item].quantity--;

        if (state.cartItems[item].quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
        state.cartItemCount--;
      }
    },
  },
});

export const postCart = createAsyncThunk(
  "put/postCart",
  async (cart, { dispatch }) => {
    dispatch(
      notifications({
        status: "Pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    try {
      const response = await fetch(
        "https://react-http-16399-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Error sending data!");
      }

      dispatch(
        notifications({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {}
  }
);

export const { addItemToCart, addSingleItem, removeSingleItem } =
  cartSlice.actions;
export default cartSlice.reducer;
