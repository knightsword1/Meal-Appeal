import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  //  *
  reducers: {
    addItem: (state, action) => {
      // * Redux Toolkit uses Immer (JS Library) behind the scene
      //* mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    clearCart: (state) => {
      //* RTK - either mutate the existing state or return a new State
      state.items.length = 0;

      // Or
      // * return {items : []};  // this new [] will be replaced inside originalState = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
