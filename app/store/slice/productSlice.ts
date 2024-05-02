import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// model
import { CartItem } from "../../models/index";

interface CartItemState {
  savedItems: CartItem[];
}

const initialState: CartItemState = {
  savedItems: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.savedItems = [...state.savedItems, action.payload];
    },
    increaseCount: (state, action: PayloadAction<number>) => {
      state.savedItems[action.payload].qty++;
    },
    decreaseCount: (state, action: PayloadAction<number>) => {
      state.savedItems[action.payload].qty =
        state.savedItems[action.payload].qty - 1;
      // check the qty is 0 then remove item from list
      if (state.savedItems[action.payload].qty == 0) {
        const remainingItems = state.savedItems.filter(
          (item) => item.id !== state.savedItems[action.payload].id
        );
        state.savedItems = remainingItems;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const remainingItems = state.savedItems.filter(
        (item) => item.id !== action.payload
      );
      state.savedItems = remainingItems;
    },
  },
});

export const { addItem, increaseCount, decreaseCount, removeItem } =
  productSlice.actions;

export default productSlice.reducer;
