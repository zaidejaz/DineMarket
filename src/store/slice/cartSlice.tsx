import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface CartState {
  totalAmount: number;
  totalQuantity: number;
  items: any[];
}

// Define the initial state using that type
const initialState: CartState = {
  totalAmount: 0,
  totalQuantity: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      if (state.items.length > 0) {
        state.items.forEach((item) => {
          if (item.id == action.payload.item.id) {
            item.quantity += action.payload.item.quantity;
            item.price += action.payload.item.price;
            state.totalAmount += action.payload.price;
            state.totalQuantity += action.payload.quantity;
          } else {
            state.totalQuantity += action.payload.quantity;
            state.items.push(action.payload.item);
            state.totalAmount += action.payload.price;
          }
        });
      } else {
        state.totalQuantity += action.payload.quantity;
        state.items.push(action.payload.item);
        state.totalAmount += action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      state.items.forEach((item, index) => {
        if (item.id == action.payload.productId){
          state.items.splice(index, 1);
          state.totalAmount -= item.price;
          state.totalQuantity -= item.quantity;
          
        }
      })
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    clearCart: (state) => {
      state = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
