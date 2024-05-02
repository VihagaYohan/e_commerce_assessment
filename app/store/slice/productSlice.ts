import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// model
import { CartItem } from "../../models/index";

interface CartItemState {
  savedItems: CartItem[];
  total: number;
}

const initialState: CartItemState = {
  savedItems: [
    {
      id: "4",
      imageUrl:
        "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/44abed599ef04cf5b728cab676d57b5d_35857601_fr_puma_sc7.jpeg",
      name: "PUMA Roma Basic",
      qty: 5,
      size: "8",
      unitPrice: 50,
    },
    {
      id: "5",
      imageUrl:
        "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/media/44abed599ef04cf5b728cab676d57b5d_35857601_fr_puma_sc7.jpeg",
      name: "PUMA Roma Basic",
      qty: 5,
      size: "8",
      unitPrice: 50,
    },
  ],
  total: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.savedItems = [...state.savedItems, action.payload];
      state.total = calculateTotal(state.savedItems);
    },
    increaseCount: (state, action: PayloadAction<number>) => {
      state.savedItems[action.payload].qty =
        state.savedItems[action.payload].qty + 1;
      state.total = calculateTotal(state.savedItems);
    },
    decreaseCount: (state, action: PayloadAction<number>) => {
      state.savedItems[action.payload].qty =
        state.savedItems[action.payload].qty - 1;
      state.total = calculateTotal(state.savedItems);
      // check the qty is 0 then remove item from list
      if (state.savedItems[action.payload].qty == 0) {
        const remainingItems = state.savedItems.filter(
          (item) => item.id !== state.savedItems[action.payload].id
        );
        state.savedItems = remainingItems;
        state.total = calculateTotal(state.savedItems);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const remainingItems = state.savedItems.filter(
        (item) => item.id !== action.payload
      );
      state.savedItems = remainingItems;
      state.total = calculateTotal(state.savedItems);
    },
  },
});

const calculateTotal = (items: CartItem[]): number => {
  let result = 0;
  items.map((item, index) => {
    result = result + item.unitPrice * item.qty;
  });
  return result;
};

export const { addItem, increaseCount, decreaseCount, removeItem } =
  productSlice.actions;

export default productSlice.reducer;
